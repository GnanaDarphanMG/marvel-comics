import React, {useState} from 'react';
import selected from './image/spider-man.png';
import deselected from './image/spiderTick.png';
import "./toggle.css";

const CheckBox = (handleClick) => {

  const [isChecked, setIsChecked] = useState(false);


  const toggleCheck = () => {
    setIsChecked(!isChecked);
    handleClick()
  }

  const checkbox = isChecked ? selected : deselected;
  return (
    <div>
      <div onClick={toggleCheck}>
        <span><img className="toggleImg" alt={'svtp-Checkbox'} src={checkbox} /></span>
      </div>
    </div>
  )
}
export default CheckBox