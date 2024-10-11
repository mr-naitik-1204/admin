import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
    
    </CardContent>
    <CardActions>
      
    </CardActions>
  </React.Fragment>
);

const card2 = (
  <React.Fragment>
    <CardContent>
    
    </CardContent>
    <CardActions>
      
    </CardActions>
  </React.Fragment>
);

const card3 = (
  <React.Fragment>
    <CardContent>
    
    </CardContent>
    <CardActions>
      
    </CardActions>
  </React.Fragment>
);


function Dash2() {
  return (
    <div>
      <Box  sx={{ display:"flex",justifyContent:"space-around" }}>
        <Card sx={{height:"150px",width:"250px",border:"2px solod black"}} variant="elevation">{card}</Card>
        <Card sx={{height:"150px",width:"250px",}} variant="elevation">{card2}</Card>
        <Card sx={{height:"150px",width:"250px",}} variant="elevation">{card3}</Card>
      </Box>
    </div>
  )
}

export default Dash2
