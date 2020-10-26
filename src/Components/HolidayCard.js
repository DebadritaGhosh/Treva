import React from 'react';
import '../styles/HolidayCard.css';

const HolidayCard = (props) => {
    return (
        <>
            <div className="holidayCard">
                <div className="imageContainer">
                    <img src={require(`../assets/holiday/${props.imgsrc}.jpg`)} alt="notAvailable" className="holidayImage" />
                </div>
                <div className="detailsContainer">
                    <h3>{props.name}</h3>
                    <h3>&#8377;{props.price}</h3>
                    <h5>{props.person}</h5>
                    <p>{props.demand}</p>
                </div>
            </div>
        </>
    );
}

export default HolidayCard;