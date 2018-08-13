import React, { Component } from 'react';
import { connect } from "react-redux";

class CardContainer extends Component {
    render() {
        return <span>{JSON.stringify(this.props)}</span>
    }
}


const mapDispatchToProps = { };

const mapStateToProps = (state) => ({
    hand: state.data.hand
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardContainer);
