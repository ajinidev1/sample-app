import React from 'react';

function MainImage(props) {
  const { url } = props;
  return (
    <div className='col-12'>
      <img className='main-image' src={url} />
    </div>
  )

}

export default MainImage;