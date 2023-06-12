import React from 'react';
import selfie from "../../assets/images/Selfie.jpg";

function AboutMe() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
          <img src={selfie} alt="selfie"/>
        </div>
        <p>
          Greetings! I am Jessie Caban, an enthusiastic individual driven with a passion for learning and implementing new technologies. I have a background in construction, hospitality, and a recently obtained certificate in permaculture design from Ecoversity. This broadend my educational horizons and led me to embark on a transformative journey, completing the full stack web development bootcamp at the University of Denver. Throughout the program, I wholeheartedly embraced the challenges and found the experience to be exceptionally rewarding. This pivotal moment ignited my interest in the dynamic tech industry, fueling my desire to continually expand my knowledge and apply it to this captivating field. I am particularly excited about exploring and harnessing the potential of emerging technologies as I embark on this new career path.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;