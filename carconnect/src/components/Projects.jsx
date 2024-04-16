import React from "react";

const Projects = () => {
  return (
    <div>
      <section
        id="projects"
        style={{
          background: "url(img/projects-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="containner">
          <h5
            className="section-subheading"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-easing="ease-in-quad"
          >
            Our Work
          </h5>
          <h2
            className="section-heading"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-easing="ease-in-quad"
          >
            Check the real innovation on problem solving
          </h2>
          <div className="projects">
            <div
              className="project"
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-duration="1000"
            >
              <div className="project__img">
                <img src="img/project-1.png" alt="" />
              </div>
              <div className="project__content bg-[#8AB4F8]">
                <h5 className="project__category">Development</h5>
                <h3 className="project__tittle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p className="project__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci autem labore quod laudantium nam aperiam voluptatem
                  deserunt cumque numquam totam amet veritatis dolore aliquam
                  placeat quidem, ratione eaque. Deleniti, harum?
                </p>
                <a href="#" className="btn btn-secondary">
                  {" "}
                  View details
                </a>
              </div>
            </div>
            <div
              className="project"
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="1000"
            >
              <div className="project__img">
                <img src="img/project-2.png" alt="" />
              </div>
              <div className="project__content">
                <h5 className="project__category">Development</h5>
                <h3 className="project__tittle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p className="project__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci autem labore quod laudantium nam aperiam voluptatem
                  deserunt cumque numquam totam amet veritatis dolore aliquam
                  placeat quidem, ratione eaque. Deleniti, harum?
                </p>
                <a href="#" className="btn btn-secondary">
                  {" "}
                  View details
                </a>
              </div>
            </div>
            <div
              className="project"
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-duration="1000"
            >
              <div className="project__img left">
                <img src="img/project-3.png" alt="" />
              </div>
              <div className="project__content">
                <h5 className="project__category">Development</h5>
                <h3 className="project__tittle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p className="project__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci autem labore quod laudantium nam aperiam voluptatem
                  deserunt cumque numquam totam amet veritatis dolore aliquam
                  placeat quidem, ratione eaque. Deleniti, harum?
                </p>
                <a href="#" className="btn btn-secondary">
                  {" "}
                  View details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
