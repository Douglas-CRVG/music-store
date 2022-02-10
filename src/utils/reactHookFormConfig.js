import emailPattern from './emailPattern';

const required = { value: true, message: 'Este campo é obrigatório' };
const maxLength = {
  value: 40,
  message: 'Este campo não deve ultrapassar 40 caracteres',
};
const minLength = {
  value: 8,
  message: 'Sua senha deve ter pelo menos 8 caracteres',
};
const pattern = {
  value: emailPattern,
  message: 'Email inválido',
};

export { required, maxLength, minLength, pattern };
