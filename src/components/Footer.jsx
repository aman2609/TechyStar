import React from 'react';
import {AiFillLinkedin,AiFillGithub,AiFillInstagram} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TechyStar</h1>
        <p>@all right reserved</p>
      </div>
      <div>
        <h5>Follow Us</h5>
        <div>
            <a href="https://www.linkedin.com/in/aman-singh-34b354210/" target="blank"><AiFillLinkedin/></a>
            <a href="https://github.com/aman2609" target="blank"><AiFillGithub/></a>
            <a href="https://www.instagram.com/rajput_aman2000/" target="blank"><AiFillInstagram/></a>

        </div>
      </div>
    </footer>
  )
}

export default Footer
