import React, { Component } from "react";
import { connect } from "react-redux";

class PayTableContainer extends Component {
    render() {
        return <div className="payTableContainer" />;
    }
}

const mapDispatchToProps = {};

const mapStateToProps = (state) => ({
    hand: state.data.hand,
    roundEnded: state.data.roundEnded
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PayTableContainer);
