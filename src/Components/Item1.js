import React, {Component} from 'react';

import img2 from '../images/gina.jpg'



class Item1 extends Component {


    render() {


        return (
            <div className="container">
                <div className="top">
                    <h1>Welcome Back</h1>
                    <h4>Login back into your accaunt </h4>
                </div>
                <div className="main">
                    <div className="three"></div>
                    <div className="box"><img src={img2} alt=""/></div>
                    <h1>Log In</h1>
                    <input type="text" placeholder="E-mail"/>
                    <input type="text" placeholder="Password"/>
                    <h5>Forgot Password ?</h5>
                    <button type="button">Login</button>
                    <div className="blue"></div>
                </div>

                <div className="bottom">
                    <h4>Don't have an account yet ?</h4>
                    <h3 onClick={this.props}> Join Now </h3>

                </div>

            </div>
        );
    }
}

export default Item1;