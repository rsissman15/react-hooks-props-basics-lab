import React from "react";

function About(props) {
  const bioInfo=props.bio;
    return (
      <div id="about">
        <h2>About Me</h2>
        {(props.bio) ? <p>{props.bio}</p> : null} 
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <h3>Links</h3>
          <a href={props.linkedin}>{props.linkedin}</a>
          <a href={props.github}>{props.github}</a>
        
      </div>
    );
  
}

export default About;