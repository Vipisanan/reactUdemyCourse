import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormControl} from 'react-bootstrap';
import './App.css';
import AgeState from "./AgeState";
class App extends React.Component{
    constructor(){
        super();
        this.state={
            newDate: '',
            birthday: '1994-09-11'
        }
    }
    changedBirthday(){
        console.log(this.state);
        this.setState({birthday: this.state.newDate})
    }
    render(){
        return(
            <div className="">
                <Form inline>
                <h2>Enter your Birthday</h2>
                <FormControl type="date"
                             onChange={event => this.setState({newDate: event.target.value})}>
                </FormControl>
                {''}
                <Button onClick={() => this.changedBirthday()}>
                        Submit
                </Button>
                    <AgeState date={this.state.birthday}/>
           </Form>
            </div>
        );
    }
}
export default App;