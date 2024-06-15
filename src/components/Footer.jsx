// import React from 'react'

// const Footer = () => {
//   return (
//     <div><footer id="footer">
//     <div className="container">
//       <div className="footer__content">
//         <div className="footer__details">
//           <div className="footer__logo">
//             <img src="Picsart_24-01-05_21-28-53-808.png" alt="logo" />
//           </div>
//           <p className="footer__text">Lorem ipsum dolor sit amet consectetur.</p>
//           <div className="footer__newletter">
//             <form action="#" className="footer__newsletter-form">
//               <input type="email" placeholder="submit email" required>
//               <div className="icon">
//                 <i className="fa fa-envelope"></i>
//               </div>
//             </form>
//           </div>
          
//         </div>
//         <div className="footer__menu">
//           <h3 className="footer__menu-tittle">Quick links</h3>
//           <ul className="footer__menu-list">
//             <li><a href="#home">Home</a></li>
//             <li><a href="#home">About</a></li>
//             <li><a href="#home">services</a></li>
//             <li><a href="#home">Projects</a></li>
//             <li><a href="#home">team</a></li>
//             <li><a href="#home">contact</a></li>
//           </ul>
//         </div>
//         <div className="footer__menu">
//           <h3 className="footer__menu-tittle">services</h3>
//           <ul className="footer__menu-list">
//             <li><a href="#home">Development</a></li>
//             <li><a href="#home">maintaince</a></li>
//             <li><a href="#home">design</a></li>
                  

//           </ul>
//         </div>
//         <div className="footer__menu">
//           <h3 className="footer__menu-tittle">socials</h3>
//           <ul className="footer__menu-list">
//             <li><a href="#home">github</a></li>
//             <li><a href="#home">linkedin</a></li>
//             <li><a href="#home">twitter</a></li>
                  

//           </ul>
//         </div>
        

//       </div>
//       <div className="footer__bottom">
//         <p>follow us </p>
//         <a href="#" className="facebook">
//           <i className="fab fa-facebook-f"></i>
//         </a>
//         <a href="#" className="twitter">
//           <i className="fab fa-twitter"></i>
//         </a>
//         <a href="#" className="instagram">
//           <i className="fab fa-instagram"></i>
//         </a>
//         <a href="#" className="linkedin">
//           <i className="fab fa-linkedin"></i>
//         </a>

//       </div>
//       <p> ldrp project 2024@ all right reseverd</p>

//     </div>
//   </footer></div>
//   )
// }

// export default Footer


import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__details">
              <div className="footer__logo">
                <img src="Picsart_24-01-05_21-28-53-808.png" alt="logo" />
              </div>
              <p className="footer__text">Lorem ipsum dolor sit amet consectetur.</p>
              <div className="footer__newletter">
                <form action="#" className="footer__newsletter-form">
                  <input type="email" placeholder="submit email" required />
                  <div className="icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer__menu">
              <h3 className="footer__menu-tittle">Quick links</h3>
              <ul className="footer__menu-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer__menu">
              <h3 className="footer__menu-tittle">Services</h3>
              <ul className="footer__menu-list">
                <li><a href="#development">Development</a></li>
                <li><a href="#maintenance">Maintenance</a></li>
                <li><a href="#design">Design</a></li>
              </ul>
            </div>
            <div className="footer__menu">
              <h3 className="footer__menu-tittle">Socials</h3>
              <ul className="footer__menu-list">
                <li><a href="#github">GitHub</a></li>
                <li><a href="#linkedin">LinkedIn</a></li>
                <li><a href="#twitter">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <p>Follow us</p>
            <a href="#" className="facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <p>LDRP project 2024. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
