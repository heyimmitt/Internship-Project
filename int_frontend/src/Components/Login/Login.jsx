import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted: ', data);
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Sign In</div>
        <div className='underline'></div>
      </div>

      <form className='inputs' onSubmit={handleSubmit(onSubmit)}>
        <div className='input'>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            {...register('username', { required: true })}
          />
        </div>
        {errors.username && <span className='error-text'>*Username is required</span>}

        <div className='input'>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            {...register('email', { required: true })}
          />
        </div>
        {errors.email && <span className='error-text'>*Email is required</span>}

        <div className='input'>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            {...register('password', { required: true })}
          />
        </div>
        {errors.password && <span className='error-text'>*Password is required</span>}

        <button type='submit' className='submit-button'>Sign In</button>
      </form>
    </div>
  );
}
