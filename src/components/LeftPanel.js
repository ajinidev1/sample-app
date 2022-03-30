import React, { Fragment } from 'react';
import Thumbnail from "./Thumbnail";

function LeftPanel(props) {
  const {items, imageSelected} = props;
  const onThumbailCliccked = (index) => {
    console.log( 'left', index)
    imageSelected(index);
  };
  
  return items.length > 0 ? (
    <div className='leftpanel mx-3'>
      {items.map((item) => (
        <Fragment>
          <Thumbnail key={item.id} item={item} showImage={onThumbailCliccked} />
        </Fragment>
      ))}
    </div>
  ) : (<></>)
}

export default LeftPanel;