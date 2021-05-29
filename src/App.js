


import Item1 from "./Components/Item1";
import Item2 from "./Components/Item2";

import React, {Component} from 'react';

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            isRegistred:true
        }

    }


    render(props) {

        const onClick=() => {
            this.setState({ isRegistred: !this.state.isRegistred})
        }



        return (
            <div className="App">
                {
                    this.state.isRegistred? <Item1/>
                    :<Item2/>
                }

            </div>
        );
    }
}

export default App;
