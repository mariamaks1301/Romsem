import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../../redux/reducers/products';






const CategorySelect = () => {
    
    const [ category, setCategory] = useState('');
    const dispatch = useDispatch();
  
    const handleChange = (e)=>{
        dispatch(changeStatus(`${e.target.value}`))
    }

  
    return (
    <Box  sx={{ minWidth: 120 }}>
      <FormControl  fullWidth>
            <InputLabel id="demo-simple-select-label">Категория</InputLabel>
                <Select 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className='catalog__select'
                value={category}
                label="Категория"
                onChange={handleChange}
                >
                
                <MenuItem selected onChange={(e)=> setCategory(e.target.value)} value="all">Все категории</MenuItem>   
                <MenuItem onChange={(e)=> setCategory(e.target.value)}  value="pizza">Пицца</MenuItem>
                <MenuItem onChange={(e)=> setCategory(e.target.value)}  value="rolls">Ролы</MenuItem>
                <MenuItem onChange={(e)=> setCategory(e.target.value)}  value="sushi">Суши</MenuItem>
                <MenuItem onChange={(e)=> setCategory(e.target.value)}  value="sets">Сеты</MenuItem>
                <MenuItem onChange={(e)=> setCategory(e.target.value)}  value="soup">Супы</MenuItem>
                <MenuItem onChange={(e)=> setCategory(e.target.value)}  value="wok">WOK</MenuItem>
                <MenuItem onChange={(e)=> setCategory(e.target.value)}  value="snacks">Закуски</MenuItem>
                <MenuItem onChange={(e)=> setCategory(e.target.value)}  value="salads">Салаты</MenuItem>
                <MenuItem onChange={(e)=> setCategory(e.target.value)}  value="drinks">Напитки</MenuItem>
                <MenuItem onChange={(e)=> setCategory(e.target.value)}  value="salads">Салаты</MenuItem>
            </Select>
        </FormControl>
    </Box>
    
  
    );
};

export default CategorySelect;