import React, { Component } from "react";
import { connect } from "react-redux";

class CreditContainer extends Component {
    render() {
        return <span style={{ textAlign: "right" }}>CREDIT {this.props.credits}</span>;
    }
}

const mapDispatchToProps = {};

const mapStateToProps = (state) => ({
    credits: state.credit.amount
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreditContainer);
