import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ingridientFilter } from '../../../redux/reducers/products';





const IngridientSelect = ({ingridient, setIngridient}) => {
      

    const dispatch = useDispatch();
  
    const handleChange = (e)=>{
        dispatch(ingridientFilter(setIngridient(e.target.value)))
    }

  
    return (
    <Box  sx={{ minWidth: 120 }}>
      <FormControl  fullWidth>
            <InputLabel id="demo-simple-select-label">Ингридиент</InputLabel>
                <Select 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className='catalog__select'
                value={ingridient}
                label="Ингридиент"
                onChange={handleChange}
                >
                
                <MenuItem value="all">Все</MenuItem> 
                <MenuItem value="salmon">С лососем</MenuItem>
                <MenuItem value="chicken">С курица</MenuItem>
                <MenuItem value="soup">С говядиной</MenuItem>
                <MenuItem value="eel">С Угрем</MenuItem>
                <MenuItem value="cheese">С сыром</MenuItem>
                <MenuItem value="shrimp">С креветками</MenuItem>
                <MenuItem value="beef">С говядиной</MenuItem>
                <MenuItem value="crab">С крабом</MenuItem>
                <MenuItem value="caviar">С икрой</MenuItem>
                <MenuItem value="mushrooms">С грибами</MenuItem>
                <MenuItem value="pepperoni">С пеперони</MenuItem>
                
            </Select>
        </FormControl>
    </Box>
    
  
    );
};

export default IngridientSelect;