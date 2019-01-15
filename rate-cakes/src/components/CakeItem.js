import React from 'react';
import '../static/cakeItem.css';

const CakeItem = ({cake, onCakeSelect}) => {
  return (
      <button className="cakeItemBtn" onClick={() => onCakeSelect(cake)}>
        <h4 className="cakeItem">{cake.title}</h4>
        <img src={cake.url} alt="CakeIMG" />
      </button>
  )
}

export default CakeItem;
