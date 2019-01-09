import React, { Component } from "react";
import { connect } from "react-redux";

class HandStatusContainer extends Component {
    render() {
        if (this.props.status) {
            return (
                <header className="handStatusContainer padded">
                    <span>{this.props.status.toUpperCase()}</span>
                </header>
            );
        } else {
            return (
                <header className="handStatusContainer padded">
                    <span>&nbsp;</span>
                </header>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    roundEnded: state.game.roundEnded,
    status: state.game.handWin.name
});
export default connect(mapStateToProps)(HandStatusContainer);
