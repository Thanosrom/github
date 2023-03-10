//React Imports
import React from 'react';

//CSS Imports
import '../CSS/Footer.css';

//Icon Imports
import { AiOutlineGithub} from "react-icons/ai";


function Footer() {

    return (
    <>
        <div id = 'divFooter' >
          <AiOutlineGithub id = 'imageCatFooter'/>
          <p id = 'pCopyrights'>© 2023 GitHub, Inc.</p>
          <a href='#' className='ahrefFooter'>Terms</a>
          <a href='#' className='ahrefFooter'>Privacy</a>
          <a href='#' className='ahrefFooter'>Security</a>
          <a href='#' className='ahrefFooter'>Status</a>
          <a href='#' className='ahrefFooter'>Docs</a>
          <a href='#' className='ahrefFooter'>Contact GitHub</a>
          <a href='#' className='ahrefFooter'>Pricing</a>
          <a href='#' className='ahrefFooter'>API</a>
          <a href='#' className='ahrefFooter'>Training</a>
          <a href='#' className='ahrefFooter'>Blog</a>
          <a href='#' className='ahrefFooter'>About</a>
        </div>
    </>
   
  );
}

export default Footer;
