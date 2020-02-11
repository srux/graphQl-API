import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import AuthContext from '../../context/auth-context';

// const [isToggled, setToggled] = useState(false);
// const toggleTrueFalse = () => setToggled(!isToggled);


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: false
        }
    }

    // componentWillMount() {

    // }

    // componentDidMount() {

    // }

    // componentWillReceiveProps(nextProps) {

    // }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    // componentWillUpdate(nextProps, nextState) {

    // }

    // componentDidUpdate(prevProps, prevState) {

    // }

    // componentWillUnmount() {

    // }

    menuHandler = () => {
        this.setState(prevState => {
            return {
                menu: !prevState.menu
            };
        })
    }
    
    handleLogout = () => {
        this.setState(prevState => {
            return {
                menu: !prevState.menu
            };
        })
        this.props.context.logout();
    }

    render() {
        let menu = this.state.menu;
        return (
            <AuthContext.Consumer>
            {(context) => {
                    return (
                        <div className="nav-container">
                            <div className="nav-header">
                                {
                                    menu
                                        ? <img
                                                className="logo"
                                                src={require("../../assets/evibe-logo-white.svg")}
                                                alt="logo"/>
                                        : <img className="logo" src={require("../../assets/evibe-logo.svg")} alt="logo"/>
                                }
                                <button className="nav-tgl" onClick={this.menuHandler}>
                                    <img
                                        className="menu-burger"
                                        src={require("../../assets/menu-burger.svg")}
                                        alt=""/>
                                </button>
    
                            </div>
                            <div className="menu-container">
    
                                <div className={"menu " + menu}>
    
                                    <div className="nav">
                                        <div className={"main-menu " + menu}>
                                            {!context.token && ( 
                                            <NavLink onClick={this.menuHandler} to={'/auth'}>Login / Signup</NavLink>)}
                                            <NavLink onClick={this.menuHandler} to={'/events'}>Events</NavLink>
                                            {context.token && (
                                            <NavLink onClick={this.menuHandler} to={'/bookings'}>Bookings</NavLink>)}
                                           
                                        </div>
                                    </div>
                                </div>
                     
                            </div>
                        </div>
    
                    )
                }
            }
        </AuthContext.Consumer>
        )
    }
}




export default Header
