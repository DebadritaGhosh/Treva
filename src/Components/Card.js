import React from 'react';
import '../styles/Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card__imageContainer">
                <img src={require(`../assets/icons/${props.imgsrc}.svg`)} alt="notAvailable" className="servicesIcon"/>
            </div>
            <div className="card__detailsContainer">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Card;