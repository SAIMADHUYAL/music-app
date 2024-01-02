import React, { Component } from "react";
import JSON from './db.json';

class Products extends Component{

    constructor(props){
        super(props)
        this.state = {

            title: 'PRODUCTS PAGE',
            products: JSON
        }
        console.log(props);

    }
    

    render(){
        return (
            <div>
                <h2>
                    { this.state.title}
                </h2>
            </div>
        )
    }

}

export default Products;