import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { required, maxLength, pattern } from '../../utils/reactHookFormConfig';
import { ThreeDots } from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/vinyl-record.png';
import AuthContext from '../../contexts/AuthContext';
import { services } from '../../services/services';
import { Container } from './style.js';
import {
  Form,
  Input,
  Button,
  StyledLink,
  toastError,
  SiteLogo,
} from '../../components';

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { auth, login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    if (auth) navigate(-1);
  }, [auth, navigate]);

  async function submitForm(formData) {
    try {
      setIsLoading(true);

      const { data: token } = await services.signIn({ ...formData });

      login(token);

      setTimeout(() => {
        setIsLoading(false);
        navigate(-1);
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      toastError('Usuário e/ou senha errados');
    }
  }

  return (
    <Container>
      <SiteLogo src={logo} alt='site logo' />
      <Form onSubmit={handleSubmit((formData) => submitForm(formData))}>
        <p>{errors?.name?.message}</p>
        <Input
          type='text'
          placeholder='Email'
          disabled={isLoading}
          autoComplete='off'
          error={errors?.email?.message ? true : false}
          {...register('email', {
            required,
            maxLength,
            pattern,
          })}
        />
        <p>{errors?.email?.message}</p>

        <Input
          type='password'
          placeholder='Senha'
          error={errors?.password?.message ? true : false}
          {...register('password', {
            required,
          })}
          disabled={isLoading}
        />
        <p>{errors?.password?.message}</p>

        <Button type='submit'>
          {isLoading ? (
            <ThreeDots color='#FFFFFF' height={50} width={50} />
          ) : (
            'Entrar'
          )}
        </Button>
      </Form>
      <StyledLink to='/signup'>Primeira vez? Cadastre-se!</StyledLink>
    </Container>
  );
}
