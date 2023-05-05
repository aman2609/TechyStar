import React from 'react'
import graphics from "../Assets/2.webp"
import {AiFillGoogleCircle,AiFillYoutube,AiFillInstagram,AiFillAmazonCircle} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home" id='home'>
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your tech problems</p>
        </main> 
      </div>
      <div className="home2">
        <img src={graphics} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability in children. 
          </p>
        </div>
      </div>
      <div className="home3" id='about'>
        <div>
          <h1>Who I am?</h1>
          <p>
            Myself Aman Singh, and I am a software engineer 1 at HashedIn by Deloitte with 6+ months of experience in the industry. I graduated from NIET, Greater Noida with a degree in Information Technology and have been passionate about programming ever since.

            Throughout my career, I have had the opportunity to work on various projects, including developing web applications and building software solutions to solve complex problems. My skillset includes proficiency in programming languages such as Java, Python, and C, as well as knowledge of front-end web development technologies like HTML, CSS, JavaScript and ReactJs.

            I am a quick learner and always eager to expand my knowledge and expertise in the field of software engineering. I thrive in collaborative environments and enjoy working with other talented professionals to create innovative solutions that exceed client expectations.

            If you are interested in connecting with me or learning more about my experience and skillset, please don't hesitate to reach out. I look forward to connecting with you!
          </p>
        </div>
      </div>
      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay:"0.3s"
            }}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style={{
              animationDelay:"0.4s"
            }}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style={{
              animationDelay:"0.5s"
            }}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
            <div style={{
              animationDelay:"0.6s"
            }}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home
