import React from 'react';

function Thumbnail(props) {
  const { item } = props;
  return (
    <div className='col-12'>
      <div className='row leftpanel-row my-2'>
        <div className='col-3 my-3'>
          <img className='thumbnail-image' src={item.thumbnailUrl} />
        </div>
        <div className='col-9 item-title'>
          <h4>{item.title}</h4>
        </div>
      </div>
    </div>
  )

}

export default Thumbnail;