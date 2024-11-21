import React from 'react';

const LandingPageCard = () => {
  return (
    <>
      <nav className="navbar navbar-brand navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between m-0 py-3">
        <div className="container container-lg w-70">
          <h5 className="m-0 ps-2">Start Bootstrap!</h5>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-auto" id="navbarContent">
            <div className="navbar-nav ms-auto">
              <p className="m-0 px-2">Home</p>
              <p className="m-0 px-2">About</p>
              <p className="m-0 px-2">Services</p>
              <p className="m-0 px-2">Contact</p>
            </div>
          </div>
        </div>
      </nav>

      <div className="container w-70">
        <div className="container-fluid bg-light py-5">
          <div className="container w-70">
            <div className="text-start">
              <h1 className="display-4">A Warm Welcome!</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eius, at amet temporibus accusamus ducimus sint exercitationem quae esse iste et est iusto delectus corporis error dolore vel? Quia, quasi.
              </p>
              <a href="#" className="btn btn-primary btn-lg">
                Call To Action!
              </a>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-4 g-4 w-100 my-3">
          {[1, 2, 3, 4].map((_, index) => (
            <div className="col" key={index}>
              <div className="card d-flex flex-column h-100">
                <img
                  src="https://static.vecteezy.com/ti/fotos-gratis/t1/23701963-selvagem-leopardo-animal-ilustracao-ai-generativo-gratis-foto.jpg"
                  className="card-img-top"
                  alt="Leopardo"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text flex-grow-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsam nostrum porro illo ex! Voluptate accusantium consequatur ullam amet facere, sed beatae quae quo nihil est eos deserunt inventore illo.
                  </p>
                </div>
                <div className="button-container d-flex justify-content-center bg-light p-4">
                  <button type="button" className="btn btn-primary">
                    Find Out More!
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="navbar navbar-dark bg-dark mt-5 py-5">
        <div className="container w-70 d-flex justify-content-center">
          <p className="m-0 text-white">Copyright © Your Website 2024</p>
        </div>
      </footer>
    </>
  );
};

export default LandingPageCard;