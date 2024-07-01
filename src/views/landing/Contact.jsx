import { DribbbleLogo, InstagramLogo, PaperPlaneRight, PaperPlaneTilt, TwitterLogo, YoutubeLogo } from '@phosphor-icons/react'
import React from 'react'
import { Input, Space } from 'antd';
import { color } from 'framer-motion';
const { Search } = Input;

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact__body">

        <div className="contact__copyright">
          <div className="contact__copy">
            <p>Copyright @ 2024</p>
            <p>All rights reserved</p>
            <div className="contact__sociallinks">
              <a href=""><InstagramLogo className='icon' size={25} /></a>
              <a href=""><DribbbleLogo className='icon'  size={25} /></a>
              <a href=""><TwitterLogo className='icon'  size={25} /></a>
              <a href=""><YoutubeLogo className='icon'  size={25} /></a>
            </div>
          </div>
        </div>

        <div className="contact__main">

          <div className="contact__company">
            <h1>Company</h1>
            <div className="contact__items">
              <p>About us</p>
              <p>Blog</p>
              <p>Contact us</p>
              <p>Pricing</p>
              <p>Testimonials</p>
            </div>

          </div>

          <div className="contact__support">
            <h1>Support</h1>
            <div className="contact__items">
              <p>Help center</p>
              <p>Terms of service</p>
              <p>Legal</p>
              <p>Privacy policy</p>
              <p>Status</p>
            </div>

          </div>

          <div className="contact__email">
            <h1>Stay up to date</h1>
            <Input
              className='contact__input'
              addonAfter={<PaperPlaneRight color='white' />}
              placeholder="Your email address"
              style={{
                width: 200,
              }}
            />
          </div>

        </div>


      </div>
    </div>
  )
}

export default Contact