import Image from 'next/image';
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Forgot() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-600 ">
      <div className="flex-col flex items-center justify-center w-3/12">
        <Image src="/lock.png" alt="zurag" width={100} height={100} className="" />
        <h1 className="text-white font-semibold text-3xl mt-6">Forgot your password?</h1>
        <h1 className="text-gray-900 font-medium text-xs mt-3 mb-6">
          Please enter the email address associated with your account and We will email you a link to reset your password.
        </h1>
        <TextField label="Username" variant="outlined" color="info" fullWidth />
        <Button variant="contained" size="large" type="submit" fullWidth className="bg-black text-white normal-case px-4 py-3 font-bold mt-5">
          Create account
        </Button>
        <Button href="/login" className="text-white font-medium text-sm normal-case flex items-center">
          <IconButton edge="start" className="text-white">
            <ArrowBackIcon />
          </IconButton>
         Return to sign in
        </Button>
      </div>
    </div>
  );
}
