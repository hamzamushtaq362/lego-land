import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function RegisterErrorComponent() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">Something went wrong!</Alert>
    </Stack>
  )
}
