import React, { useState } from 'react'
import {useRef} from 'react';
import { Modal,ModalHeader} from 'reactstrap'
function Contactform() {
  const [modal, setmodal] = useState(false)

  
    const ref = useRef(null);
  
    const handleClick = () => {
      ref.current.value = '';
    };
  
  return (
<>

  <h2 className='text-center mt-3'>Contact Form</h2>
<div className='container contact'>
<div className='row contactform'>
    <div className='col-xs-12 col-md-5 connect'>
            <h3 className='topic'>Get In Touch</h3>
            <span>Address</span>
            <p>Lazimpat, Kathmandu, Nepal</p>
            <span>Phone</span>
            <p>9800221177</p>
            <span>Email</span>
            <p>Technoria@info.com</p>
    </div>
    <div className='col-xs-12 col-md-7 message'>
            <h4 className='text-center'>Leave a Message</h4>
            <form>
                <input  ref={ref} id="message" name="message" type="text" placeholder='Full Name'></input><br/>
                <input type="email" placeholder='Email'></input><br/>
                <input type="number" placeholder='Phone'></input><br/>
                <textarea placeholder='Message'></textarea><br/>
                </form> 
                <Modal 
                  size='lg'
                  isOpen={modal} 
                  toggle={() =>setmodal(!modal)}>
                    <ModalHeader
                      toggle={() =>setmodal(!modal)}>
                      Message Sent
                      </ModalHeader>
                </Modal>

                <button className='btn btn-sm' onClick={() => setmodal(true)}>
                  Send
                </button>
                
    </div>
</div>
</div>
</>
  )
}

export default Contactform