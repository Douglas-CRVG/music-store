import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { SiteLogo } from '../../components/SiteLogo.js';
import { ThreeDots } from 'react-loader-spinner';
import AuthContext from '../../contexts/AuthContext.js';
import { services } from '../../services/services';
import logo from '../../assets/vinyl-record.png';
import { Container } from './style.js';
import { Form, Input, Button, StyledLink } from '../../components';
import {
  required,
  maxLength,
  minLength,
  pattern,
} from '../../utils/reactHookFormConfig';
import { toastError, toastSuccess } from '../../components/toasts.jsx';

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  if (localStorage.getItem('auth')) logout();

  async function submitForm(formData) {
    try {
      setIsLoading(true);
      await services.signUp({ ...formData });
      setIsLoading(false);
      toastSuccess('Usuário criado! Entrando na página de login...');
      setTimeout(() => {
        navigate('/signIn');
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      toastError(error.response.data);
    }
  }

  const password = watch('password');
  return (
    <Container>
      <SiteLogo src={logo} />
      <Form onSubmit={handleSubmit((formData) => submitForm(formData))}>
        <Input
          type='text'
          placeholder='Nome'
          disabled={isLoading}
          autoComplete='off'
          error={errors?.name?.message ? true : false}
          {...register('name', {
            required,
            maxLength,
          })}
        />
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
            minLength,
          })}
          disabled={isLoading}
        />
        <p>{errors?.password?.message}</p>

        <Input
          type='password'
          placeholder='Confirme a senha'
          error={errors?.confirmPassword?.message ? true : false}
          {...register('confirmPassword', {
            required,
            minLength,
            validate: (confirmPassword) =>
              password === confirmPassword || 'As senhas não são iguais',
          })}
          disabled={isLoading}
        />
        <p>{errors?.confirmPassword?.message}</p>
        <Button type='submit'>
          {isLoading ? (
            <ThreeDots color='#FFFFFF' height={50} width={50} />
          ) : (
            'Cadastrar'
          )}
        </Button>
      </Form>
      <StyledLink to='/signIn'>Já tem uma conta? Entre agora!</StyledLink>
    </Container>
  );
}
