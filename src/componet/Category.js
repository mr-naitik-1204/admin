import React from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function Category() {
  return (
    <div>
        <TextField id="outlined-basic" label="surch category" variant="outlined" sx={{width:"85%"}} />
        <Button variant="contained" sx={{height:"55px"}}>Add Category</Button>
    </div>
  )
}

export default Category
