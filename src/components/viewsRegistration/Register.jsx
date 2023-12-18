import { useState } from 'react';
import authOperations from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import {
  Button,
  ButtonLog,
  InputLabel,
  Input,
  Form,
  Title,
  FormContainer,
  Wrapper,
  Divflex
} from './viewsRegistration.styled';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Please enter your email'),
    name: Yup.string().required('Please enter your name'),
    password: Yup.string().min(6).required('Please enter your password'),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await validationSchema.validate({ email, name, password }, { abortEarly: false });

      const result = await dispatch(authOperations.register({ email, password }));
      if (authOperations.register.fulfilled.match(result)) {
        toast.success('Registration successful!');
        setName('');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        error.errors.forEach((errorMessage) => {
          toast.error(errorMessage);
        });
      } else if (authOperations.register.rejected.match(error)) {
        if (error.status === 409) {
          toast.error('This email is already in use. Please use a different email.');
        } else {
          toast.error('Unexpected error during registration. Please try again.');
        }
      }
    }
  };

  return (
    <Wrapper>
      <FormContainer>
        <Title>Registration</Title>
        <Toaster />
        <Form onSubmit={handleSubmit}>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />

          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />

          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
           <InputLabel htmlFor="password">Confirm Password</InputLabel>
          <Input
            type="password"
            id="password"
            name="password"
            value={ password}
            onChange={handleChange}
          />
          <Button type="submit">Registration</Button>
        </Form>
        <Divflex>
        <p>Already have an account?</p>
        <Link to="/annabelous75/questify/login">
          <ButtonLog type="submit">Log in</ButtonLog>
        </Link>
        </Divflex>
      </FormContainer>
    </Wrapper>
  );
};

export default Register;

