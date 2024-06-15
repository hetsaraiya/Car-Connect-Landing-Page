import React from "react";

const Testi = () => {
  return (
    <div>
      <section
        id="testimonial"
        style={{
          background: "url(img/testimonials-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <div
          className="container flex-row"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <div className="testimonial-wrapper">
            <p className="quotes">
              <i className="fas fa-quote-left"> </i>
            </p>
            <p className="section-subheading">testimonial</p>

            <div className="testimonials">
              <div className="testimonial">
                <h3 className="testimonial__tittle">the awesome team</h3>
                <p className="testimonial__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam eos accusantium rem voluptates quod aspernatur
                  deleniti, suscipit eius, quidem, possimus eligendi dolorum
                  neque temporibus soluta ipsum numquam dolores porro explicabo?
                </p>

                <div className="testimonial__author">
                  <h3>dhairya joshi</h3>
                </div>
              </div>
            </div>
            <div className="testimonial-navigation">
              <span className="active"></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="testimonial__img">
            <img src="img/testimonials.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testi;
