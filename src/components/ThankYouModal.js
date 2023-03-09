import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ThankYouModal(props) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

  return (
    <div>
          <Button
              style={{
                  padding: "10px 20px",
                  color: "white",
                  backgroundColor: "black",
                  borderRadius: "4px",
                  borderColor: "black",
                  width: "100%",
                  cursor: "pointer"
              }}
              onClick={props.handleOpen}
          >CHECKOUT</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <Typography id="transition-modal-description" sx={{ mt: 2 }} style={{ textAlign: "center" }}>
              Thank You!
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }} style={{ textAlign: "center" }}>
              Your Order is on the way.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}