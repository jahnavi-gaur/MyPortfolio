import React from 'react'
import "./css/TechCard.css"

import reactLogo from "../assets/skillLogos/react.png"
import nodeLogo from "../assets/skillLogos/node.png"
import expressLogo from "../assets/skillLogos/express.png"
import mongoLogo from "../assets/skillLogos/mongodb.png"
import jsLogo from "../assets/skillLogos/javascript.png"
import htmlLogo from "../assets/skillLogos/html.png"
import cssLogo from "../assets/skillLogos/css.png"
import tailwindLogo from "../assets/skillLogos/tailwind.png"
import cppLogo from "../assets/skillLogos/cpp.png"
import gitLogo from "../assets/skillLogos/git.png"

const logos = {
  React: reactLogo,
  "Node.js": nodeLogo,
  Express: expressLogo,
  MongoDB: mongoLogo,
  JavaScript: jsLogo,
  HTML: htmlLogo,
  CSS: cssLogo,
  Tailwind: tailwindLogo,
  CPP: cppLogo,
  Git: gitLogo
}

const TechCard = (props) => {
  let {skill} = props

  return (
    <div className='tech-card'>
        <img src={logos[skill]} alt={`${skill}-logo`} />
        <p>{skill}</p>
    </div>
  )
}

export default TechCard
