import React from 'react';
import CakeItem from './CakeItem';
import '../static/cakeList.css'

const CakeList = ({cakes, onCakeSelect}) => {
  let renderedList = cakes.map(cake => {
    return (
      <CakeItem
        key={cake._id}
        onCakeSelect={onCakeSelect}
        cake={cake}
      />
    )
  });
  return <div className="row cakeListOuter"><div className="cakeListInner">{renderedList}</div></div>
};

export default CakeList;
