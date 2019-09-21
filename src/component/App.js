import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form , FormControl , Button } from 'react-bootstrap';
import  './App.css';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            newDate:''
        }
    }
    changedBirthday(){
        console.log(this.state);
    }
    render(){
        return(
            <div className="App">
                <Form inline>
                <h2>Enter your Birthday</h2>
                <FormControl type="date"
                onChange={event => this.setState({newDate: event.target.value})}>
                </FormControl>
                {''}
                <Button onClick={() => this.changedBirthday()}>
                        Submit
                </Button>
           </Form>
            </div>
        );
    }
}
export default App;