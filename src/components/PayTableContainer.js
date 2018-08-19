import React, { Component } from "react";
import { connect } from "react-redux";
import PayTableData from "../PayTableData";
class PayTableContainer extends Component {
    constructor(props) {
        super(props);

        this.keyCount = 0;
        this.getKey = this.getKey.bind(this);
    }
    getKey() {
        return this.keyCount++;
    }
    render() {
        return (
            <div className="payTableContainer">
                <table className="payTable">
                    <tbody>
                        {PayTableData.map((row) => (
                            <tr key={this.getKey()}>
                                {row.map((c) => (
                                    <td key={this.getKey()}>{typeof c === "object" ? c.display : c}</td>
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
    roundEnded: state.data.roundEnded,
    handWin: state.data.handWin.name
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PayTableContainer);
