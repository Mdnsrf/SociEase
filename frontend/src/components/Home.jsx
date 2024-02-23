import React from "react";

function Home() {
  return (
    <div>

<div className="container mt-5">
      <h2 className="text-center">Welcome to SociEase</h2>
      <p className="lead text-center">Your all-in-one solution for society management.</p>
     
    </div>
   

    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100 " src="https://img.freepik.com/premium-vector/city-landscape-with-houses-trees-clouds-sun-design-architecture-urban-theme_24877-69786.jpg" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>

   
  </div>
  );
}

export default Home;
