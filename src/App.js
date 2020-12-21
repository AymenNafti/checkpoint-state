//import logo from './logo.svg';
import React ,{Component} from "react";
import "./App.css";
//import { useToggleState } from "@react-stately/toggle";

class Person extends Component {
  state = {
    person: [{
      fullName: 'Aymen Nafti',
    
      bio: "Test",
        
      imgSrc: "Whatever",
    
      profession: "Operations Manager",
    },
    ],
    visible: false,
    counter : 0
  };
  handleClick = () => this.state.visible ? this.setState({ visible: false }) : this.setState({ visible: true });
incrementCounter = () => {
    const { counter } = this.state;
    this.state.visible ?
      this.setState({ counter: counter + 1 }) : this.setState({ counter: 0 });
  };

  componentDidMount () {
    setInterval(this.incrementCounter, 1000);
  }
  render() {
    const buttonText = this.state.visible ? "hide" : "show";

    return (
      <div className="App">
        {this.state.visible ? (
          <div>
            {this.state.person.map((el) => (
              <>
                <h1>{el.fullName}</h1>
                <h1>{el.bio}</h1>
                <h1>{el.imgSrc}</h1>
                <h1>{el.profession}</h1>
                <p>{this.state.counter}</p>
              </>
            ))}
          </div>
        ) : null}
        <button style={{
          background: '#0000FF',
            color: 'white', padding: 15, fontSize: 20,
            textAlign: 'center', borderRadius: 5,
            cursor: 'pointer', width: 150, height: 50
        }}
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

export default Person;