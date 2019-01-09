import React, { Component } from "react";
import { connect } from "react-redux";

class WinContainer extends Component {
    render() {
        if (this.props.roundEnded) {
            return <span className="winContainer">WIN {this.props.win}</span>;
        }
        return <span>&nbsp;</span>;
    }
}

const mapStateToProps = (state) => ({
    roundEnded: state.game.roundEnded,
    win: state.game.handWin.win
});
export default connect(mapStateToProps)(WinContainer);
