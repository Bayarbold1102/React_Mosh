import React, { Component } from 'react';
import Test from './test'
class  Tests extends Component {
    state = {
       tests:[
           {id: 1, value: 4},
           {id: 2, value: 0},
           {id: 3, value: 0},
           {id: 4, value: 0}
       ]
     }
     handleIncrement = test =>{
        const tests =[...this.state.tests];
        const index = tests.indexOf(test)
        tests[index] = {...test};
        tests[index].value++;
        this.setState({tests})
     }
     handleReset=()=>{
         const tests = this.state.tests.map(c=>{
             c.value = 0;
             return c;
         })
     }
     handleDelete=(testId)=>{
         const tests = this.state.tests.filter(c => c.id !== testId);
         this.setState({tests})
     }
    render() {
        return (
        <div>
            <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {this.state.tests.map(test =>(
            <Test key={test.id} onIncrement={this.handleIncrement} onDelete={this.handleDelete} test={test}>
            </Test>
        ))}
        </div> );

    }
}

export default Tests ;