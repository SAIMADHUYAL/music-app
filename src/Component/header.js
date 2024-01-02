
import React, {Component} from "react";

class Header extends Component{

    constructor(){
        super();
        this.state = {
            title: 'React App',
            userInput: 'User Text Here'
        }
    }

    inputChange(event){
        this.setState({userInput:event.target.value?event.target.value:'User Text Here'})

    }

    render(){

        return (

            <div>
                <center>
        
                    <h1>
                        MUSIC STORE
                    </h1>
        
                    <center>
                        <input placeholder="Please Enter Your Search Here..."
                        onChange={this.inputChange.bind(this)}
                        />
                    </center>
                    <p>{this.state.userInput}</p>
                </center>
            </div>
        )    
    }
}


export default Header;
