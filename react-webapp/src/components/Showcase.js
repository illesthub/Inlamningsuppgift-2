import React from 'react';
import BackgroundLeftImage from '../assets/images/background-left-image.svg';
import BackgroundRightImage from '../assets/images/background-right-image.svg';
const Showcase = () => {
  return (
    <section className='__showcase'>
        <div className='container-fluid'>
            <img src={BackgroundLeftImage} />
            <div>mitten</div>
            <img src={BackgroundRightImage} />
        </div>
    </section>
  )
}

export default Showcase