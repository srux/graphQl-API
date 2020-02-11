import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import AuthContext from '../context/auth-context';

// const [isToggled, setToggled] = useState(false);
// const toggleTrueFalse = () => setToggled(!isToggled);


class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
         
        }
    }


    render() {
       
        return (
            <AuthContext.Consumer>
            {(context) => {
                    return (
                        <div className="footer-container">
                            <div className="footer">
                             
                            {context.token && (
                            <NavLink className="button logout" onClick={context.logout} to={'/auth'}>Logout</NavLink>)}
                        </div>
                    </div>
                    )
                }
            }
        </AuthContext.Consumer>
        )
    }
}




export default Footer
