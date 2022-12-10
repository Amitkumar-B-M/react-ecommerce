import React, { useContext } from 'react'
import { AppContext } from './context/productcontext';
const About = () => {
  let myname=useContext(AppContext);
  return (
    <div>{myname}</div>
  )
}

export default About;