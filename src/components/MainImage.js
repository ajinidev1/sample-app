import React from 'react';

function MainImage(props) {
  const { url } = props;
  return (
    <div className='text-center'>
      <img className='mx-auto main-image m-3 p-3 mx-auto rounded' src={url} alt=""/>
    </div>
  )

}

export default MainImage;