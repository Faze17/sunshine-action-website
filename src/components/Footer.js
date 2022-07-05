import React from 'react';
import './Footer.css';
import { HashLink as Link } from 'react-router-hash-link';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe to our Sunshine Action newsletter to get the latest updates
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <a href="mailto:sunshine@sunshine-action.org" type="button" class="btn btn-outline-light btn-lg" 
            style={{borderRadius: '0px', marginBottom: '5px',}}>Subscribe
            </a>

          </form>
        </div>
      </section>
    
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
          </div>
          <small class='website-rights'>Sunshine Action © 2022</small>
          <div class='social-icons'>
          <a
            className='social-icon-link facebook'
            href='https://www.facebook.com/SunshineAction'
            target='_blank'
            aria-label='Facebook'
            rel='noopener noreferrer'>
            <i className='fab fa-facebook-f' />
            </a>

            <a
            className='social-icon-link instagram'
            href='https://www.instagram.com/sunshineactionhk/'
            target='_blank'
            aria-label='Instagram'
            rel='noopener noreferrer'>
            <i className='fab fa-instagram' />
            </a>

            <a
            className='social-icon-link youtube'
            href='https://www.youtube.com/channel/UCcZcSDalMCEW47Bo7UZquPw'
            rel='noopener noreferrer'
            target='_blank'
            aria-label='Youtube'>
            <i className='fab fa-youtube' />
            </a>

            <a
            className='social-icon-link twitter'
            href='https://twitter.com/SunshineAction'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'>
            <i className='fab fa-twitter' />
            </a>

            <a
            className='social-icon-link twitter'
            href='https://www.linkedin.com/company/sunshine-action-limited/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Linkedin'>
            <i className='fab fa-linkedin' />
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;