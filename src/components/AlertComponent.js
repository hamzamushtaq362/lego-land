import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function AlertComponent() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">New Account Registered Successfully!</Alert>
    </Stack>
  )
}
