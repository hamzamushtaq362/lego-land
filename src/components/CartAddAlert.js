import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function CartAddAlert() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2} style={{ position:"sticky", top: "0", right: "0", zIndex: "1" }}>
      <Alert severity="success">Added in cart!</Alert>
    </Stack>
  )
}