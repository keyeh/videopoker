import React, { Component } from "react";
import { connect } from "react-redux";

class WinContainer extends Component {
    render() {
        if (this.props.roundEnded && this.props.win) {
            return <span className="winContainer">WIN {this.props.win}</span>;
        }
        return <span>&nbsp;</span>;
    }
}

const mapStateToProps = (state) => ({
    roundEnded: state.data.roundEnded,
    win: state.data.handWin.win
});
export default connect(mapStateToProps)(WinContainer);
