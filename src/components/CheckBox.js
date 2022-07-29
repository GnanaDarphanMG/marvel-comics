import React, {useState} from 'react';
import "./CheckBox.css";

const CheckBox = (handleClick) => {

  const [isChecked, setIsChecked] = useState(true);


  const toggleCheck = () => {
    setIsChecked(!isChecked);
    handleClick()
  }

  const checkbox = isChecked ? handleClick.selected : handleClick.deselected;
  return (
      <div onClick={toggleCheck}>
        <span><img className="toggleImg" alt={'svtp-Checkbox'} src={checkbox} /></span>
      </div>
  )
}
export default CheckBox