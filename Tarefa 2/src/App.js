import React, { Component } from "react";
import "./App.css";
import CharComponent from "./components/CharComponent";
import ValidationComponent from "./components/ValidationComponent";

class App extends Component {
    state = { value: "" };

    ValueHandler = (newValue) => {
        this.setState({
            value: newValue,
        });
    };

	DeleteValueHandler = (index) => {
		const NewState = {...this.state}
		NewState.value = NewState.value.split('')
		NewState.value.splice(index,1)
		NewState.value = NewState.value.join('')
		this.setState(NewState)
	}

    render() {
        return (
            <div className="App">
                <input
                    onChange={(event) => this.ValueHandler(event.target.value)} value={this.state.value}
                />
                <ValidationComponent value={this.state.value} />

				{this.state.value.split('').map((element,index) => <CharComponent letter={element} key={index} DeleteValue={this.DeleteValueHandler.bind(this)} id={index}/>)}

                <ol>
                    <li>
                        @Create an input field (in App component) with a change
                        listener which outputs the length of the entered text
                        below it (e.g. in a paragraph).
                    </li>
                    <li>
                        @Create a new component (=> ValidationComponent) which
                        receives the text length as a prop
                    </li>
                    <li>
                        @Inside the ValidationComponent, either output "Text too
                        short" or "Text long enough" depending on the text
                        length (e.g. take 5 as a minimum length)
                    </li>
                    <li>
                        @Create another component (=> CharComponent) and style it
                        as an inline box (=> display: inline-block, padding:
                        16px, text-align: center, margin: 16px, border: 1px
                        solid black).
                    </li>
                    <li>
                        @Render a list of CharComponents where each CharComponent
                        receives a different letter of the entered text (in the
                        initial input field) as a prop.
                    </li>
                    <li>
                        @When you click a CharComponent, it should be removed
                        from the entered text.
                    </li>
                </ol>
                <p>
                    Hint: Keep in mind that JavaScript strings are basically
                    arrays!
                </p>
            </div>
        );
    }
}

export default App;
