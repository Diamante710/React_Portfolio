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
          Hello, my name is Jessie Caban. I am new to full stack coding and have always had an interest for learning about and applying new technologies. I am a recent graduate from the University of Denver's full stack web development bootcamp. I found the course be a challenging also also extremely rewarding process. My background is originally in construction and hospitality, but recently graduated from Ecoversity with a certificate in permaculture design and then gained an interest in the tech world. I am looking forward to expanding my knowledge and the ability to apply it in this new career field on new technologies being developed.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;