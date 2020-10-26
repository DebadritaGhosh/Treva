import React from 'react';
import HolidayCard from '../Components/HolidayCard';
import '../styles/Holiday.css';
import HoliDayData from '../Data/HoliDayData';
const Holidays = () => {
    return (
        <section className="holidayContainer">
            <h1>Trending Holiday Destinations</h1>
            <div className="holidayCards">
                {
                HoliDayData.map((value) => {
                    return(
                        <>
                        <HolidayCard key={value.id} imgsrc={value.imgsrc} name={value.name} price={value.price} 
                        person={value.person} demand={value.demand}/>
                        </>
                    );
                })
                }
            </div>
        </section>
    );
}

export default Holidays;
