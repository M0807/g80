import React, {Component} from 'react';
import Item1 from "./Item1";


class Item2 extends Component {
    //
    // constructor(props){
    //     super(props)
    //     this.state={
    //         isRegistred:true
    //
    //     }
    //
    // }

    render() {
        //
        // const onClick=(e) => {
        //     this.setState({open:false})
        // }

        return (
            <div className="container">
                <div className="top">
                    <h1>Welcome Back</h1>
                    <h4>Login back into your accaunt </h4>
                </div>
                <div className="main">
                    <div className="three"></div>
                    <div className="box"></div>
                    <h1>Sign Up</h1>
                    <input type="text" placeholder="Full Name"/>
                    <input type="text" placeholder="E-mail"/>
                    <input type="text" placeholder="Password"/>

                    <button type="button">Sign Up</button>
                    <div className="blue"></div>
                </div>

                <div className="bottom">
                    <h4>Already have an account?</h4>
                    <h3 onClick={this.props.myItem}>Log In</h3>

                </div>

            </div>
        );
    }
}

export default Item2;