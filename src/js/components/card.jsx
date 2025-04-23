import React from 'react';

const Card = ({ card }) => {
  const { image, title, description } = card;

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  );
};

export default Card;
