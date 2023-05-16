import React, {useState} from 'react';
import './panel.css';

const Panel = (props) => {
    const {url, text } = props;
    const [isActive , setIsActive ] = useState(false);
    const handleMouseOver = () => {
        setIsActive(true);
    }
    const handleMouseOut = () => {
        setIsActive(false);
    }
  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ backgroundImage: `url(${url})`}}
      className={`panel ${isActive ? "active" : ""}`}
    >
      <h3> {text} </h3>
    </div>
  );
}

export default Panel

