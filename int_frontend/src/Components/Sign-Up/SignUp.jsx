import './SignUp.css'

import { useForm } from 'react-hook-form'
import { Box, Typography, TextField, InputAdornment, Button } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import Login from "../Login/Login";
import { Icon } from '@iconify/react';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log('Form submitted: ', data)
  }
  const redirectToLogin = ()=>{
    return <Login/>
  }

  return (
    <div className='container'>
      <Box className=''>
        <Typography variant="h1" gutterBottom sx={{ fontSize: '48px' }}>
          Sign Up
        </Typography>
      </Box>

      <form className='mx-auto mt-10 py-10 px-5 flex flex-col justify-center items-center gap-6 shadow-2xl' onSubmit={handleSubmit(onSubmit)}>
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
          <Typography>Already have an account?<Button sx={{textDecoration:"Capitalise"}} variant="text" onClick={redirectToLogin}>login</Button></Typography>
          <Button variant="contained" type="submit">Signup</Button>
        </Box>
      </form>
    </div>
  )
}