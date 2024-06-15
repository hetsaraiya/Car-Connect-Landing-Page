import React from 'react'

const About = () => {
  return (
    <div><section id="about" className="container flex-center flex-column" data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-in-quad">
    <h5 className="section-subheading"> build trust first</h5>
    <h2 className="section-heading text-center">Go anywhere with the single tap</h2>
    <div className="features text-center">
      <div className="features" style={{"--color": "#fe6786"}}>
        <div className="feature__icon">
          <i className="fas fa-car"></i>
        </div>
        <h3 className="feature__tittle"> Our complete work detail</h3>
        <p className="feature__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ullam saepe voluptates quos laborum excepturi.</p>

      </div>
      <div className="features" style={{"--color":"#5cd8a5"}}>
        <div className="feature__icon">
          <i className="fas fa-chart-line"></i>
        </div>
        <h3 className="feature__tittle"> Business model </h3>
        <p className="feature__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ullam saepe voluptates quos laborum excepturi.</p>

      </div>
      <div className="features" style={{"--color": "#fea95b"}}>
        <div className="feature__icon">
          <i className="fa-regular fa-file-lines"></i>
        </div>
        <h3 className="feature__tittle"> How it is helpful</h3>
        <p className="feature__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ullam saepe voluptates quos laborum excepturi.</p>

      </div>
      <div className="features" style={{"--color": "#fe6786"}}>
        <div className="feature__icon">
          <i className="fas fa-car"></i>
        </div>
        <h3 className="feature__tittle"> Our complete work detail</h3>
        <p className="feature__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ullam saepe voluptates quos laborum excepturi.</p>

      </div>
    </div>
    <div className="about__details flex-center" > 
      <div className="about__details-content"  data-aos="zoom-in-left" data-aos-duration="1000">
        <h1>Most innovative/creative team</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio dolores expedita tempore soluta cupiditate, 
          placeat ducimus nobis ad repellat voluptatem,
          Mollitia repellendus quam dolore nemo. 
            modi dolore eum, excepturi non!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          facere facilis fugit non sunt temporibus debitis ullam harum,
          Deserunt, maxime atque cupiditate amet ratione voluptas doloribus  
            soluta iure commodi nemo corrupti sed. Veritatis nesciunt corrupti 
            iure ut pariatur? Debitis, perspiciatis atque unde adipisci ex 
          temporibus doloremque nemo ut necessitatibus eos ea?</p>  
        <a href="#" className="btn btn-primary"> Get started</a>


      </div>
      <div className="about__details-img"  data-aos="zoom-in-right" data-aos-duration="1000">
        <img src="img/about.png" alt="" />

      </div>


    </div>

  </section></div>
  )
}

export default About