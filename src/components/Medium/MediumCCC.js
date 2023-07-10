class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'Anthony Hinojosa',
        age: '23',
        dob: 'April 15, 2000',
        track: "Coding"
        
      }
    };
  }

  render() {
    return (
      <div>
        <BasicInfo person={this.state.person} />
      </div>
    );
  }
}