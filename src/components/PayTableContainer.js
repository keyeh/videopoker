import React, { Component } from "react";
import { connect } from "react-redux";
import PayTableData from "../lib/PayTableData";
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
            <article className="payTableContainer padded">
                <table className="payTable">
                    <tbody>
                        {PayTableData.map((row) => {
                            let classes = "";
                            if (this.props.handWinName === row[0].pokersolver) {
                                if (this.props.roundEnded) {
                                    classes = "blink white";
                                } else {
                                    classes = "white";
                                }
                            }
                            return (
                                <tr key={this.getKey()}>
                                    {row.map((c, index) => (
                                        <td
                                            key={this.getKey()}
                                            className={
                                                index === 5 ? "active" : "" /* todo when we implement changing bets*/
                                            }
                                        >
                                            <span className={classes}>{typeof c === "object" ? c.display : c}</span>
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </article>
        );
    }
}

const mapDispatchToProps = {};

const mapStateToProps = (state) => ({
    roundEnded: state.data.roundEnded,
    handWinName: state.data.handWin.name
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PayTableContainer);
