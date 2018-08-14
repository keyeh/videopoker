import React, { Component } from "react";
import { connect } from "react-redux";

class WinContainer extends Component {
    render() {
        if (this.props.roundEnded && this.props.win) {
            return <div className="winContainer">You win: {this.props.win}</div>;
        }
        return null;
    }
}

const mapStateToProps = (state) => ({
    roundEnded: state.data.roundEnded,
    win: state.data.handWin.win
});
export default connect(mapStateToProps)(WinContainer);
