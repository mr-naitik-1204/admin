import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
const drawerWidth = 240;
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function Subcategory() {
  return (

    <div>
      <TextField id="outlined-basic" label="surch Subcategory" variant="outlined" sx={{ width: "82%" }} />
      <Button variant="contained" sx={{ height: "55px" }}>Add SubCategory</Button>


      <TableContainer component={Paper} sx={{marginTop:"50px"}}>
        <Table sx={{ width: '991px' }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: '#1976d2' }}>
            <TableRow >
              <TableCell sx={{ color: 'white' }}>No</TableCell>
              <TableCell sx={{ color: 'white' }}>Sub-Catagory Name</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>Catagory Name</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>Status</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>Delete	</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  )
}

export default Subcategory

