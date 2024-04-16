import React from "react";

const Team = () => {
  return (
    <div>
      <section id="id" className="container">
        <h5
          className="section-subheading"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in-quad"
        >
          {" "}
          meet our team{" "}
        </h5>
        <h2
          className="section-heading"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in-quad"
        >
          {" "}
          Awesome people with great ideas
        </h2>
        <div className="members" data-aos="flip-down" data-aos-duration="3000">
          <div className="member">
            <div className="member__img">
              <img src="img/member-3.png" alt="" />
            </div>
            <div className="member__content">
              <h1>Dhairya joshi</h1>
              <p>Web - developer</p>
            </div>
          </div>
          <div className="member">
            <div className="member__img">
              <img src="img/member-2.png" alt="" />
            </div>
            <div className="member__content">
              <h1>Shrey Shah</h1>
              <p>Web - developer</p>
            </div>
          </div>
          <div className="member">
            <div className="member__img">
              <img src="img/member-1.png" alt="" />
            </div>
            <div class="member__content">
              <h1>Het Saraiya</h1>
              <p>Backend & Android- developer</p>
            </div>
          </div>
          <div className="member">
            <div className="member__img">
              <img src="img/member-4.png" alt="" />
            </div>
            <div className="member__content">
              <h1>Dev Jogi</h1>
              <p>Web - developer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
