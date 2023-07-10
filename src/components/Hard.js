import React, { Component } from "react";

class BasicInfo extends Component {
    render() {
      const { name, age, dob, track } = this.props.person;
      return (
        <div className="id">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Date of Birth: {dob}</p>
            <p>Track: {track}</p>
        </div>
      );
    }
  }
  
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        people: [
          {
            name: 'Anthony Hinojosa',
            age: '23',
            dob: 'April 15, 2000',
            track: "Coding"
          },
          {
            name: 'Diana Hinojosa',
            age: '24',
            dob: 'November 3, 1999',
            track: "Coding"
          },
          {
            name: 'Nancy Hinojosa',
            age: '28',
            dob: 'January 12, 1995',
            track: "Coding"
          }
        ]
      };
    }
  
    render() {
      return (
        <div>
          {this.state.people.map((person, index) => (
            <BasicInfo key={index} person={person} />
          ))}
        </div>
      );
    }
  }
  export default App;