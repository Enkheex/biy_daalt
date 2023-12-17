import Image from 'next/image';
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Stack } from '@mui/material';

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="w-2/3 h-screen flex items-center bg-slate-600 flex-col">
        <h1 className="text-white font-semibold text-3xl my-24">Bagshdaa Hairtai</h1>
        <Image src="/zurag.png" alt="zurag" width={500} height={500} className="scale-110" />
      </div>
      <div className="w-1/3 h-screen bg-slate-400 flex-col flex justify-center items-center">
        <Box sx={{ width: '350px', justifyContent: 'center' }}>
          <Stack direction={'column'} spacing={2} sx={{ width: '100%' }}>
            <div className="text-white text-2xl font-medium">
              Sign in to Lorem Ipsum
              <div className="font-medium text-sm flex items-center">
                New user?
                <Button href="/register" className="text-primary font-medium text-sm normal-case">
                  Create an account
                </Button>
              </div>
            </div>
            <TextField label="Username" variant="outlined" color="primary" />
            <TextField
              label="Password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              color="primary"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button href="/forgot" className="text-primary font-medium text-sm normal-case justify-end p-0">
              Forgot password?
            </Button>
            <Button variant="contained" size="large" type="submit" className="bg-black text-white normal-case px-4 py-3 font-bold">
              Login
            </Button>
          </Stack>
        </Box>
      </div>
    </div>
  );
}
