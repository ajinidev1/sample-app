import React, { Fragment } from 'react';
import Thumbnail from "./Thumbnail";

function LeftPanel(props) {
  const {items} = props;
  return (
    <div className='leftpanel mx-3'>
      {items.map((item) => (
        <Fragment>
          <Thumbnail item={item}></Thumbnail>
        </Fragment>
      ))}
    </div>
  )
}

export default LeftPanel;