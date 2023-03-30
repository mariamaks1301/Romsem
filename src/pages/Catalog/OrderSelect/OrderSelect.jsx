import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useParams } from 'react-router-dom';
import { changeOrder } from '../../../redux/reducers/products';
import { useDispatch } from 'react-redux';



function OrderSelect() {
    
    const dispatch = useDispatch()
    const {order} = useParams();
   
  
    const handleChange = (e)=>{
        dispatch(changeOrder(e.target.value));
    }

 

  return (
    <Box  sx={{ minWidth: 120 }}>
      <FormControl  fullWidth>
        <InputLabel id="demo-simple-select-label">Порядок</InputLabel>
        <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className='catalog__select'
          value={order}
          label="Порядок"
          onChange={handleChange}
        >
            
            <MenuItem  value={'default'}>По умолчанию</MenuItem>
            <MenuItem  value={'desc'}>По убыванию</MenuItem>
            <MenuItem  value={'asc'}>По возрастанию</MenuItem>
            <MenuItem  value={'abc'}>По алфавиту</MenuItem>
            <MenuItem  value={'weight'}>По весу</MenuItem>
           

            

        </Select>
      </FormControl>
    </Box>
  );
}
export default OrderSelect