import React from 'react'
import Pollreadingwrapper from '../components/pollreading/Pollreadingwrapper'
import Header from '../components/Header'
import share from '../assets/share.png'
import { RWebShare } from 'react-web-share'
function Homepage() {
  return (
    <>
      <Header />
      <Pollreadingwrapper />
      <div className="text-center">
        <a href="#"
          style={{ textDecoration: "none", background: "#46bf08", padding: "0.2rem 0.6rem", borderRadius: "7px" }}>

          <img src={share} alt="logo" width="20px" />
          <RWebShare
            data={{
              url: "https://electionpoll-hittv.netlify.app/",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <span className="text-white font-weight-bold" style={{ fontSize: "small" }} > SHARE</span>
          </RWebShare>
        </a>
      </div>
    </>
  )
}

export default Homepage