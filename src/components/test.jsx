import React, {Component} from 'react';

class  Test extends Component {

    render() {

        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
            onClick={()=> this.props.onIncrement(this.props.test)}
            className="btn btn-secondary btn-sm">
                Increment
            </button>
            <button onClick={()=>this.props.onDelete(this.props.test.id)} className="btn btn-danger btn-sm m-2"> Delete</button>
        </div>)
    }
    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.test.value === 0 ? 'warning' : 'primary'
        return classes;
    }
    formatCount(){
        const {value} = this.props.test;
        return value === 0 ? <h1>Zero</h1> : value
    }
}

 
export default Test;