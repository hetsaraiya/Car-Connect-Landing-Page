// import React from 'react'

// const Contact = () => {
//   return (
//     <div><section id="contact" style={{
//         background: 'url(img/contact-bg.png)',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'right',
//         backgroundSize: 'contain'
//       }}>
//       <div class="container">
//         <h5 class="section-subheading text-center" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-quad"> contact us</h5>
//         <h2 class="section-heading text-center left right" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-quad">Stay connected with us for ay reason</h2>
//         <div class="contact">
//           <form action="" class="contact__form">
//             <h1>Write us a message</h1>
//             <input type="text" placeholder="your name "required>
//             <input type="email" placeholder="your email "required>
//             <textarea rows="5" required> your message</textarea>
//             <button class="btn btn-primary"> Send message</button>
//           </form>
//           <div class="contact__details"> 
//           <p class="text">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores ipsa sunt deserunt minima officia ipsam.
//           </p>
//           <div class="details">
//             <div class="detail">
//               <div class="detail__icon">
//                 <i class="fas fa-phone"></i>
//               </div>
//               <div class="detail__content">
//                 <h3>Phone</h3>
//                 <P>696969696</P>
//               </div>
//             </div>
//             <div class="detail">
//               <div class="detail__icon">
//                 <i class="fas fa-envelope"></i>
//               </div>
//               <div class="detail__content">
//                 <h3>Email</h3>
//                 <P>tarimane@gmail.com</P>
//               </div>
//             </div>
//             <div class="detail">
//               <div class="detail__icon">
//                 <i class="fas fa-map-marked-alt"></i>
//               </div>
//               <div class="detail__content">
//                 <h3>Address</h3>
//                 <P>su kaam che bhai jagya jani ne tare</P>
//               </div>
//             </div>
//           </div>
//         </div>
//         </div>
       
//       </div>
//     </section></div>
//   )
// }

// export default Contact


import React from 'react';

const Contact = () => {
  return (
    <div>
      <section id="contact" style={{
        background: 'url(img/contact-bg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundSize: 'contain'
      }}>
        <div className="container">
          <h5 className="section-subheading text-center" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-quad">Contact us</h5>
          <h2 className="section-heading text-center left right" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-quad">Stay connected with us for any reason</h2>
          <div className="contact">
            <form action="" className="contact__form">
              <h1>Write us a message</h1>
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Your email" required />
              <textarea rows="5" placeholder="Your message" required></textarea>
              <button className="btn btn-primary">Send message</button>
            </form>
            <div className="contact__details">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores ipsa sunt deserunt minima officia ipsam.
              </p>
              <div className="details">
                <div className="detail">
                  <div className="detail__icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="detail__content">
                    <h3>Phone</h3>
                    <p>696969696</p>
                  </div>
                </div>
                <div className="detail">
                  <div className="detail__icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="detail__content">
                    <h3>Email</h3>
                    <p>tarimane@gmail.com</p>
                  </div>
                </div>
                <div className="detail">
                  <div className="detail__icon">
                    <i className="fas fa-map-marked-alt"></i>
                  </div>
                  <div className="detail__content">
                    <h3>Address</h3>
                    <p>su kaam che bhai jagya jani ne tare</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
