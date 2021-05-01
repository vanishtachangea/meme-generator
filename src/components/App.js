import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/index.css";
import MemeItem from "./MemeItem";
import MyMemes from "./MyMemes";
import { Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      memeLimit: 10,
      text0: "",
      text1: "",
    };
  }
  render() {
    return (
      <div>
        <h3>
          <u>This is a meme generator</u>
        </h3>
        <MyMemes />
        <h4>
          <i>Write Some Text</i>
        </h4>
        <Form inline>
          <FormGroup>
            <FormLabel className="pr-2">Top</FormLabel>{" "}
            <FormControl
              className="pr-2"
              type="text"
              onChange={(event) => this.setState({ text0: event.target.value })}
            ></FormControl>
          </FormGroup>{" "}
          <FormGroup>
            <FormLabel className="pr-2 pl-2">Bottom</FormLabel>{" "}
            <FormControl
              className="pr-2"
              type="text"
              onChange={(event) => this.setState({ text1: event.target.value })}
            ></FormControl>
          </FormGroup>
        </Form>

        {this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
          return (
            <MemeItem
              key={index}
              meme={meme}
              text0={this.state.text0}
              text1={this.state.text1}
            />
          );
        })}
        <div
          className="meme-button"
          onClick={() =>
            this.setState({ memeLimit: this.state.memeLimit + 10 })
          }
        >
          Load 10 more memes
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, null)(App);
