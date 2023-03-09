import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function Range(props) {
  const [value, setValue] = React.useState([20, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.getData(newValue)
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        max={1000}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        sx={{
          color: 'red',
        }}
      />
      {
      console.log(value)
    }
    </Box>
  );
}