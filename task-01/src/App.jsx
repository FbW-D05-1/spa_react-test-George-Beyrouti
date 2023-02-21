import React from "react";
import "./style.css";

function App() {

  const user = {
  name: "Jeff Bezos",
  city: "Albuquerque",
  born: 1964,
  likes: "Being rich",
  twitterLink: "https://twitter.com/jeffbezos",
  img: "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1032942302_dkawzr.jpg",
  twitterName: "JeffBezos",
  companies: [
    "Amazon",
    "The Washington Post",
    "Google share holder",
    "IMBD",
    "Alexa",
    "Blue Origin",
    "Twitch",
    "Zappos",
    "Whole food market",
    "Amazon robotics",
    "Goodreads",
  ],
};
  return (
  <div className="App">
    <div className="container">
    <img src={user.img } alt="profile pic" />

    <h1>{user.name}</h1>

    <strong>Place of Birth</strong>
    <h3>{user.city }</h3>

    <strong>Age of Birth</strong>
    <h3>{user.born }</h3>
    
    <strong>owns</strong>
    <ul>{user.companies.map((company)=>(
      <li>{company}</li>
    )) }</ul>

    <strong>Likes</strong>
    <h3>{user.likes }</h3>

    <strong>Twitter</strong>

    <a href={user.twitterLink}>@{user.twitterName}</a>



    </div>
  </div>

  )
}

export default App;
