import React, { Component } from "react";
import { connect } from "react-redux";

class HandStatusContainer extends Component {
    render() {
        if (this.props.status) {
            return (
                <div className="handStatusContainer padded">
                    <span>{this.props.status.toUpperCase()}</span>
                </div>
            );
        } else {
            return (
                <div className="handStatusContainer padded">
                    <span>&nbsp;</span>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    roundEnded: state.data.roundEnded,
    status: state.data.handWin.name
});
export default connect(mapStateToProps)(HandStatusContainer);
