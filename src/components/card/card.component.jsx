import React from 'react';

import './card.style.css';

export const Card = (props) => (
  <div className="card-container">
    <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set4&size=180x180`}/>
    <h2 key={props.monster.key}>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
)



