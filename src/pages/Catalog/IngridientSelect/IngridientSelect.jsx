import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ingridientFilter } from '../../../redux/reducers/products';
import store from '../../../redux';
import { productsSelector } from '../../../redux/reselect';





const IngridientSelect = () => {
      
    const {filter} = useSelector(productsSelector)
    const [ingridient, setIngridint] = useState("all");
    
    const dispatch = useDispatch();
  
    const handleChange = (event) => {
        setIngridint(event.target.value)
        console.log(event.target.value)
    }
    
    useEffect(() => {
        dispatch(ingridientFilter(ingridient))
    },[ingridient])



  
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