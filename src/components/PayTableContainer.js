import React, { Component } from "react";
import { connect } from "react-redux";
import PayTableData from "../PayTableData";
class PayTableContainer extends Component {
    render() {
        return (
            <div className="payTableContainer">
                <table className="payTable">
                    <tbody>
                        {PayTableData.map((row) => (
                            <tr>
                                {row.map((c) => (
                                    <td>{c}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
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
