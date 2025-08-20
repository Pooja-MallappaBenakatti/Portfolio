import React from 'react';
import '../cssComponents/Background.css';



const Galaxy = () => {
  return (
    <div className="galaxy">
      <div className="nebula"></div>
      <div className="stars">
        {[...Array(70)].map((_, i) => (
          <div key={i} className="star"></div>
        ))}
      </div>
      <div className="planets">
        <div className="planet planet-1"></div>
        <div className="planet planet-2"></div>
      </div>
    </div>
  );
};

export default Galaxy;
