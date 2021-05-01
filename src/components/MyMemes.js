import React, { Component } from "react";
import { connect } from "react-redux";

class MyMemes extends Component {
  render() {
    return (
      <div>
        <h3>My Memes</h3>
        {this.props.myMemes.map((meme, index) => {
          return (
            <img
              className="my-meme-image"
              key={index}
              src={meme.data.url}
              alt="My Meme"
            />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { myMemes: state.personalisedMemes };
}

export default connect(mapStateToProps, null)(MyMemes);
