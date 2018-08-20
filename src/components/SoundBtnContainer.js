import React, { Component } from "react";
import { connect } from "react-redux";
import { soundToggle } from "../actions/index";

class SoundBtnContainer extends Component {
    handleButton() {
        this.props.soundToggle();
    }

    render() {
        return <button onClick={this.handleButton.bind(this)}>Sound {this.props.soundOn ? "ON" : "OFF"}</button>;
    }
}

const mapDispatchToProps = { soundToggle };

const mapStateToProps = (state) => ({
    soundOn: state.ui.soundOption
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SoundBtnContainer);
