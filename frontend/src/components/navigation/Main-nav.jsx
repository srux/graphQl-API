import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';


const MainNav = (props) => {

    // const [menuState, active] = useState({active:false});
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
    //   const [inputVal, setInputVal] = useState(false);

    return (
        <div className="nav-container">
            <div className="nav-header">
                <img className="logo" src={require("../../assets/evibe-logo.svg")} alt="logo"/>
                    <button className="nav-tgl" onClick={toggleTrueFalse}>
                    <img className="menu-burger" src={require("../../assets/menu-burger.svg")} alt=""/>
                    </button>
               
            </div>
            <div className="menu-container">
                
                <div className={"menu "+isToggled}>

                        <div className="nav">
                            <div className={"main-menu "+isToggled}>
                                    <NavLink onClick={toggleTrueFalse} to={'/auth'}>Authentication</NavLink>
                                    <NavLink onClick={toggleTrueFalse} to={'/events'}>Events</NavLink>
                                    <NavLink onClick={toggleTrueFalse} to={'/bookings'}>Bookings</NavLink>
                            </div>
                        </div>
                </div>

            </div>

        </div>
    )
}

export default MainNav
