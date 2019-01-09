import React, { Component } from "react";
import { connect } from "react-redux";

class HandStatusContainer extends Component {
    render() {
        const {status} = this.props;
        return (
            <header className="handStatusContainer padded">
                <span>{status ? status.toUpperCase() : ' '}</span>
            </header>
        );
    }
}

const mapStateToProps = (state) => ({
    roundEnded: state.game.roundEnded,
    status: state.game.handWin.name
});
export default connect(mapStateToProps)(HandStatusContainer);
