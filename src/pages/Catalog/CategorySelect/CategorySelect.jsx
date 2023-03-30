import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../../redux/reducers/products';





const CategorySelect = () => {
    
    const [select, setSelect] = useState('');
    // const {category} = useParams();
    const [category, setCategory] = useState('');
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
                
                <MenuItem value="all">Все категории</MenuItem>   
                <MenuItem value="pizza">Пицца</MenuItem>
                <MenuItem value="rolls">Ролы</MenuItem>
                <MenuItem value="sushi">Суши</MenuItem>
                <MenuItem value="sets">Сеты</MenuItem>
                <MenuItem value="soup">Супы</MenuItem>
                <MenuItem value="wok">WOK</MenuItem>
                <MenuItem value="snacks">Закуски</MenuItem>
                <MenuItem value="salads">Салаты</MenuItem>
                <MenuItem value="drinks">Напитки</MenuItem>
                <MenuItem value="salads">Салаты</MenuItem>
            </Select>
        </FormControl>
    </Box>
    
  
    );
};

export default CategorySelect;