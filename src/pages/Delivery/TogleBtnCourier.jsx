import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';



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
        <span>Курьером</span>
      </ToggleButton>
      <ToggleButton value="right" className='delivery__form-btn delivery__form-btn'>
        <span>Самовывоз</span>
      </ToggleButton> 
    </ToggleButtonGroup>
  );
}