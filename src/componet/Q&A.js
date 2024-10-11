
import React from 'react'
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import CategoryIcon from '@mui/icons-material/Category';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


const top100Films = [

  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];


const me = [{ name: 'Dashboard', icon: <SpaceDashboardIcon /> }, { name: 'Category', icon: <CategoryIcon /> }, { name: 'Subcategory', icon: <ControlPointDuplicateIcon /> }, { name: 'Q&A', icon: <HelpOutlineIcon /> }]
const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];

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

function QA() {
  return (
    <Box sx={{ display: 'flex',marginTop:"80px" }}>
     
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p:0 ,paddingLeft:'0px'}}
      >
        {/* <Toolbar /> */}
        <Typography sx={{ marginBottom: 2, display: 'flex', justifyContent: 'space-around',marginTop:'-88px' }}>
          <Box sx={{ flexGrow: 1 }}>
            {/* <Autocomplete
      disablePortal
      options={top100Films}
      sx={{ width: '824px',height:'38px',paddingRight:'39px' }}
      renderInput={(params) => <TextField {...params} sx={{width:'825px'}} label="
                Search Category
                    " />}
                    /> */}
          </Box>
          <Stack spacing={0.5} direction="row">
            <Button variant="contained" sx={{ width: '152px', height: '55.500px', padding: '15px 20px' }}>ADD Q & A</Button>
          </Stack>

        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ width:'991px' }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: '#1976d2' }}>
              <TableRow >
                <TableCell sx={{ color: 'white' }}>No</TableCell>
                <TableCell sx={{ color: 'white' }}>Questions</TableCell>
                <TableCell align="right" sx={{ color: 'white' }}>Answer</TableCell>
                <TableCell align="right" sx={{ color: 'white' }}>Sub-Catagory</TableCell>
                <TableCell align="right" sx={{ color: 'white' }}>Catagory</TableCell>
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

      </Box>
    </Box>
  )
}

export default QA