import React from 'react'
import Navbar from '../components/Navbar'

export default function ContactUs() {
  return (
    <>
      <Navbar/>
      <div className="text-white text-xl text-center mt-20">
      Hi ! Looking to work with me ?<br/>
      Just send an email at <i> sakshamsahore@gmail.com</i><br/>
      Or<br/>
     Ping me on any of my profiles mentioned in my <a href="/links"><u>Links</u></a>
    </div>
    <div className="mt-20 text-xl text-white text-center">
      Thanks!
    </div>
    </>
  )
}
