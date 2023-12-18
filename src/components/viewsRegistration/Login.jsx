import { useState } from 'react';
import authOperations from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ButtonLogin,  Input,  Form, InputLabel, Title, FormContainer, Wrapper } from './viewsRegistration.styled';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
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
    email: Yup.string().email('Please enter a valid email').required('Please enter your email'),
    password: Yup.string().required('Please enter your password'),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await validationSchema.validate({ email, password }, { abortEarly: false });
      dispatch(authOperations.logIn({ email, password }));
      setEmail('');
      setPassword('');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        error.errors.forEach((errorMessage) => {
          toast.error(errorMessage);
        });
      } else {
        toast.error('Unexpected error during login. Please try again.');
      }
    }
  };

  return (
    <Wrapper>
      <FormContainer>
        <Title>Log in</Title>
        <Form onSubmit={handleSubmit}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <Link to="/annabelous75/questify/dashboard"><ButtonLogin type="submit">Log in</ButtonLogin></Link>
          
        </Form>
      </FormContainer>
    
    </Wrapper>
  );
};

export default Login;