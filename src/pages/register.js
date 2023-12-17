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

export default function Register() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="w-2/3 h-screen flex items-center bg-slate-600 flex-col">
        <h1 className="text-white font-semibold text-3xl my-24">Manage the job more effectively with AAA</h1>
        <Image src="/zurag.png" alt="zurag" width={500} height={500} className="scale-110" />
      </div>
      <div className="w-1/3 h-screen bg-slate-400 flex-col flex justify-center items-center">
        <Box sx={{ width: '350px', justifyContent: 'center' }}>
          <Stack direction={'column'} spacing={2} sx={{ width: '100%' }}>
            <div className="text-white text-2xl font-medium">
              Get started for absolutely free
              <div className="font-medium text-sm flex items-center">
                Already have an account?
                <Button href="/login" className="text-primary font-medium text-sm normal-case">
                  Sign in
                </Button>
              </div>
            </div>
            <TextField label="Username" variant="outlined" color="info" />
            <TextField
              label="Password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              color="info"
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
            <Button variant="contained" size="large" type="submit" className="bg-black text-white normal-case px-4 py-3 font-bold">
              Create account
            </Button>
          </Stack>
        </Box>
      </div>
    </div>
  );
}
