import React from 'react';
import './About.css'
const AboutUs = () => {


  return <div class='some-page-wrapper' id='about'>
  <h1 className='text-center'><em>Welcome to About Page</em></h1> <hr/>
    <div className='container mt-5'>
      <div class='row'>
        <div class='col-md-4'>
          <div class='blue-column'>
            <h1>About US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Quis pharetra adipiscing ultrices vulputate posuere tristique. <br />In sed odio nec aliquet eu proin mauris et.</p>
          </div>
        </div>
        <div className='col-md-4' id="knif">
          <img src='https://www.bigw.com.au/medias/sys_master/images/images/h09/h73/10670858633246.jpg' height='350px' width='350px' alt='knif_img' />
        </div>
        <div class='col-md-4'>
          <h1>Our History</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        </div>
      </div>
    </div>
    <p className='text-center'> <br/>
    <a href="#">Back To Top</a>
</p>
  </div>
}
export default AboutUs;
