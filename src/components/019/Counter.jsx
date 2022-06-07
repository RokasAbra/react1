import React from "react";


class Counter extends React.Component{

    constructor(){
        super();
        this.state = {counter: 0};
    };
    doClick =() => {
        this.setState(s => ({counter: s.counter + 1}));
    };
    componentDidMount(){// suveikia tiktai uzsikraunant puslapiui
        console.log("Loaded");
    };
    componentWillUnmount(){// suveikia atsitikus pakeitimams "pasalinus kazka tai..."
        console.log('Numire');
    }
    componentDidUpdate(){
        console.log('update');
    }

        render(){ /// Ka grazina render metodas tas ir yra atvaizduojama
            return (
                <>
                   <div>{this.state.counter}: Pirmadienis {this.props.when}</div> 
                   <button onClick={(this.doClick)}>
                       <svg className="star">  <use href="#star" /></svg>
                       <svg className="star">  <use href="#star" /></svg>
                       <svg className="star">  <use href="#star" /></svg>
                   </button>
                </>
            )
        }
};


export default Counter;