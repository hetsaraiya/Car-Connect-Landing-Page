import React from 'react'

const Services = () => {
  return (
    <div><section id="services"  style={{
        background: 'url(img/services-bg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: '100% 80%',
      }}>
    <div className="container" >
      <h5 className="section-subheading" data-aos="fade-down" data-aos-easing="linear"data-aos-duration="1500"> What we offer</h5>
      <h2 className="section-heading right" data-aos="fade-down"data-aos-easing="linear"data-aos-duration="1500"> Services to solve all type of real world problem </h2>
      <div className="services"  data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out-cubic">
        <div className="service">
          <div className="service__icon">
            <img src="img/squares.png" alt="" />

          </div>
          <h3 className="services__tittle"> Business Automation</h3>
          <p className="service__text">Lorem ipsum dolor sit amet consectetur.</p>
          <div className="arrow-icon">
            <i className="fas fa-arrow-right"></i>

          </div>

        </div>
        <div className="service">
          <div className="service__icon">
            <img src="img/shopping-cart.png" alt="" />

          </div>
          <h3 className="services__tittle"> Ecommerce Support</h3>
          <p className="service__text">Lorem ipsum dolor sit amet consectetur.</p>
          <div className="arrow-icon">
            <i className="fas fa-arrow-right"></i>

          </div>

        </div>
        <div className="service">
          <div className="service__icon">
            <img src="img/video-camera.png" alt="" />

          </div>
          <h3 className="services__tittle"> Video production/editing</h3>
          <p className="service__text">Lorem ipsum dolor sit amet consectetur.</p>
          <div className="arrow-icon">
            <i className="fas fa-arrow-right"></i>

          </div>

        

        </div>
        <div className="service">
          <div className="service__icon">
            <img src="img/headphones.png" alt="" />

          </div>
          <h3 className="services__tittle">Real time support</h3>
          <p className="service__text">Lorem ipsum dolor sit amet consectetur.</p>
          <div className="arrow-icon">
            <i className="fas fa-arrow-right"></i>
          </div>  

        </div>
        <div className="service">
          <div className="service__icon">
            <img src="img/placeholder.png" alt="" />

          </div>
          <h3 className="services__tittle">location marking / tracking</h3>
          <p className="service__text">Lorem ipsum dolor sit amet consectetur.</p>
          <div className="arrow-icon">
            <i className="fas fa-arrow-right"></i>
          </div>  

        </div>
        <div className="service">
          <div className="service__icon">
            <img src="img/upload.png" alt="" />

          </div>
          <h3 className="services__tittle">files upload protocol</h3>
          <p className="service__text">Lorem ipsum dolor sit amet consectetur.</p>
          <div className="arrow-icon">
            <i className="fas fa-arrow-right"></i>
          </div>  

        </div>
        
      </div>
      </div>
  </section></div>
  )
}

export default Services