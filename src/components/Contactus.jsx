import React from "react";

function Contactus() {
  return (
    <div className='d-flex justify-content-center'>
      <div className='contactus-section'>
        <div>
          <h1>Contact Us</h1>
        </div>

        <div className='d-flex justify-content-around m-5'>
          <input
            type='text'
            placeholder='First Name'
            className='contactus-input'
          />
          <input
            type='text'
            placeholder='Last Name'
            className='contactus-input'
          />
        </div>
        <div className='d-flex justify-content-around m-5'>
          <input
            type='text'
            placeholder='Address'
            className='contactus-input'
          />
          <input type='text' placeholder='Email' className='contactus-input' />
        </div>

        <div className='d-flex justify-content-around m-5'>
          <textarea name='' id='' cols='50' rows='10'></textarea>
        </div>

        <div className='d-flex justify-content-end m-5'>
          <button className='btn btn-primary contactus-submit-button'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
