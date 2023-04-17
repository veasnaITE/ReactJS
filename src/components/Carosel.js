import React from 'react'

function Carosel() {
  return (
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2016/11/21/15/43/beach-1846040_960_720.jpg" className="d-block w-100 object-fit-cover border rounded" height={550}  alt="hs" />
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2018/04/22/15/02/siberian-squill-3341288_960_720.jpg" className="d-block w-100 object-fit-cover border rounded" height={550} alt="sf." />
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2016/05/05/02/40/jetty-1373173_960_720.jpg" className="d-block w-100 object-fit-cover border rounded" height={550} alt=".sfs" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carosel