import React from 'react';

function Thumbnail(props) {
  const { item, showImage } = props;

  const onItemClick = () => {
    showImage(item.id);
  }
  return (
    <div className='col-12' key={item.id}>
      <div className='row leftpanel-row my-2' onClick={onItemClick}>
        <div className='col-3 my-3'>
          <img className='thumbnail-image' src={item.thumbnailUrl} alt=""/>
        </div>
        <div className='col-9 item-title'>
          <h4>{item.title}</h4>
        </div>
      </div>
    </div>
  )

}

export default Thumbnail;