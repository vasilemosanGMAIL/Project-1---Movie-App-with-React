import React from 'react'

const img_URL = "https://image.tmdb.org/t/p/w1280/";

const Movies = ({title, poster_path, vote_average}) => {
  return (
    <div className="col-sm-4 my-2">
      <h5>{title}</h5>
      <img style={{ maxWidth: "70%" }} src={img_URL + poster_path} alt="alt" />
      <p className={vote_average >= 8 ? `text-success` : `text-warning` } >Rating {vote_average}</p>
    </div>
  );
}


export default Movies;