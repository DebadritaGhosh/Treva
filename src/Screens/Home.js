import React from 'react';
import { NavLink } from 'react-router-dom';
//Importing Components
import Card from '../Components/Card';
//Importing Data
import Data from '../Data/Data';
//Importing Style
import "../styles/Home.css";

const Home = () => {
    return (
        <>
            <section className="container">
                <div className="leftColumn">
                    <h2>Travel Beyond Limits.</h2>
                    <h5>Pack your bags.<br />We’re going on vacation!</h5>
                    <div className="leftColumn__buttonContainer">
                    <NavLink exact to="/holidays"><button type="button" className="buttonContainer__button1">Start</button> </NavLink>
                    <NavLink exact to="/contact"><button type="button" className="buttonContainer__button2">Contact Us</button></NavLink>
                    </div>
                </div>
                <div className="right">
                    <img src={require('../assets/tired.svg')} alt=""/>
                </div>
            </section>
            <section id="services">
                <header className="benefits__head">
                    <h2>The Perfect Traveling Experience</h2>
                    <h3>We cover everything from picking the perfect hotel,<br />
                flight and travelling destination.
            </h3>
                </header>
                <div className="cardParent">
                    {
                        Data.map((val, ind) => {
                            return (
                                <>
                                    <Card key={ind} imgsrc={val.imgsrc} title={val.title} description={val.description} />
                                </>
                            );
                        })
                    }
                </div>
            </section>
        </>
    );
}

export default Home;
