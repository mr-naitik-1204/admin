import { Button, TextField } from '@mui/material'
import React from 'react'


function Subcategory() {
  return (
 
      <div>
        <TextField id="outlined-basic" label="surch Subcategory" variant="outlined" sx={{ width: "82%" }} />
        <Button variant="contained" sx={{ height: "55px" }}>Add SubCategory</Button>
      </div>
   
  )
}

export default Subcategory

