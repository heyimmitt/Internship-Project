import { useForm } from 'react-hook-form';
import SignUp from '../Sign-Up/SignUp';
import { Box, Typography, TextField, InputAdornment, Button } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import { Icon } from '@iconify/react';

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted: ', data);
  };

  const redirectToSignUp = ()=>{
    return <SignUp/>
  }

  return (
    <div className='container'>
      <Box className=''>
        <Typography variant="h1" gutterBottom sx={{ fontSize: '48px' }}>
          Sign In
        </Typography>
      </Box>

      <form className='mx-auto mt-10 w-1/3 py-10 px-5 flex flex-col justify-center items-center gap-6 shadow-2xl' onSubmit={handleSubmit(onSubmit)}>
        <Box className='flex flex-col gap-1 items-center '>
          <TextField
            label="Username"
            {...register('username', { required: true })}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    {/* <PersonIcon /> */}
                    <Icon icon="material-symbols-light:person-rounded" width="30" height="30" />
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined" size="small"
          />
          {errors.username && <span className='flex text-red-500 justify-end w-full'>*Username is required</span>}
        </Box>

        <Box className='flex flex-col gap-1 items-center '>
          <TextField
            label="Email"
            {...register('email', { required: true })}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <MailIcon />
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined" size="small"
          />
          {errors.email && <span className='flex text-red-500 justify-end w-full'>*Email is required</span>}
        </Box>

        <Box className='flex flex-col gap-1 items-center '>
          <TextField
            label="Password"
            {...register('password', { required: true })}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon icon="solar:password-bold-duotone" width="24" height="24" />
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined" size="small"
          />
          {errors.password && <span className="flex text-red-500 justify-end w-full">*Password is required</span>}
        </Box>

        <Box className="flex flex-col gap-4 pt-4">
          <Typography>Don't Have an Account?<Button sx={{ textDecoration: "Capitalise" }} variant="text" onClick={redirectToSignUp}>sign up</Button></Typography>
          <Button variant="contained" type="submit">Signin</Button>
        </Box>
      </form>
    </div>
  );
}
