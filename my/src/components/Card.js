import React from 'react';

const Card = ({ title, artist, description, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {artist && <p className="card-text">{artist}</p>}
        {description && <p className="card-text">{description}</p>}
        <a href="" className="btn btn-primary">Play</a>
      </div>
    </div>
  );
};

export default Card;
