import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled(props) {
  // const [page, setPage] = React.useState(1);
  // const handleChange = (event, value) => {
  //   setPage(value);
  // };

  return (
    <Stack spacing={2} style={{ position:"fixed", bottom: "0", left: "50%", zIndex: "1" }}>
      {/* <Typography>Page: {page}</Typography> */}
      <Pagination count={10} page={props.page} onChange={props.handlePagination} />
    </Stack>
  );
}