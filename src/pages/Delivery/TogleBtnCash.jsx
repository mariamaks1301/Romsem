import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {BsWallet2, BsCreditCard2Back} from 'react-icons/bs';


export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="delivery__form-label delivery__form-btns"
    >
      <ToggleButton value="left" className='delivery__form-btn delivery__form-btn'>
        <span>
          <BsWallet2/>
      </span>
        <span>Наличными</span>
      </ToggleButton>
      <ToggleButton value="right" className='delivery__form-btn delivery__form-btn'>
        <span>
            <BsCreditCard2Back/>
        </span>
        <span>Картой</span>
      </ToggleButton> 
    </ToggleButtonGroup>
  );
}