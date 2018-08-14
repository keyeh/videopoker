import React, { Component } from "react";
import { connect } from "react-redux";
import OnImagesLoaded from "react-on-images-loaded";
import Card from "./Card";
import { holdCard, cardImageLoaded } from "./actions/index";

// Force browser to prefetch and cache all svgs
class DealBtnContainer extends Component {
    render() {
        return (
            <div style={{ display: "none" }}>
                <OnImagesLoaded onLoaded={this.props.cardImageLoaded.bind(this)}>
                    <img alt="" src="cards/10C.svg" />
                    <img alt="" src="cards/10D.svg" />
                    <img alt="" src="cards/10H.svg" />
                    <img alt="" src="cards/10S.svg" />
                    <img alt="" src="cards/2C.svg" />
                    <img alt="" src="cards/2D.svg" />
                    <img alt="" src="cards/2H.svg" />
                    <img alt="" src="cards/2S.svg" />
                    <img alt="" src="cards/3C.svg" />
                    <img alt="" src="cards/3D.svg" />
                    <img alt="" src="cards/3H.svg" />
                    <img alt="" src="cards/3S.svg" />
                    <img alt="" src="cards/4C.svg" />
                    <img alt="" src="cards/4D.svg" />
                    <img alt="" src="cards/4H.svg" />
                    <img alt="" src="cards/4S.svg" />
                    <img alt="" src="cards/5C.svg" />
                    <img alt="" src="cards/5D.svg" />
                    <img alt="" src="cards/5H.svg" />
                    <img alt="" src="cards/5S.svg" />
                    <img alt="" src="cards/6C.svg" />
                    <img alt="" src="cards/6D.svg" />
                    <img alt="" src="cards/6H.svg" />
                    <img alt="" src="cards/6S.svg" />
                    <img alt="" src="cards/7C.svg" />
                    <img alt="" src="cards/7D.svg" />
                    <img alt="" src="cards/7H.svg" />
                    <img alt="" src="cards/7S.svg" />
                    <img alt="" src="cards/8C.svg" />
                    <img alt="" src="cards/8D.svg" />
                    <img alt="" src="cards/8H.svg" />
                    <img alt="" src="cards/8S.svg" />
                    <img alt="" src="cards/9C.svg" />
                    <img alt="" src="cards/9D.svg" />
                    <img alt="" src="cards/9H.svg" />
                    <img alt="" src="cards/9S.svg" />
                    <img alt="" src="cards/AC.svg" />
                    <img alt="" src="cards/AD.svg" />
                    <img alt="" src="cards/AH.svg" />
                    <img alt="" src="cards/AS.svg" />
                    <img alt="" src="cards/JC.svg" />
                    <img alt="" src="cards/JD.svg" />
                    <img alt="" src="cards/JH.svg" />
                    <img alt="" src="cards/JS.svg" />
                    <img alt="" src="cards/KC.svg" />
                    <img alt="" src="cards/KD.svg" />
                    <img alt="" src="cards/KH.svg" />
                    <img alt="" src="cards/KS.svg" />
                    <img alt="" src="cards/QC.svg" />
                    <img alt="" src="cards/QD.svg" />
                    <img alt="" src="cards/QH.svg" />
                    <img alt="" src="cards/QS.svg" />
                    <img alt="" src="cards/RED_BACK.svg" />
                    <img alt="" src="cards/TC.svg" />
                    <img alt="" src="cards/TD.svg" />
                    <img alt="" src="cards/TH.svg" />
                    <img alt="" src="cards/TS.svg" />
                </OnImagesLoaded>
            </div>
        );
    }
}

const mapDispatchToProps = { cardImageLoaded };

const mapStateToProps = (state) => ({});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DealBtnContainer);
