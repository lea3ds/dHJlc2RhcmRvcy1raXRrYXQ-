import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Toolbar } from '../../controllers';
import {connect} from "react-redux";
import {Map} from "../../controllers";
import './_style.css';

class Component extends React.Component {

    elementId = "map";
    mapConfig = {zoomControl: true};
    markers = [
        {
            position: {lat: -34.618145, lng: -58.365294},
            title: "Marker 1",
            content: "<div onclick=window.handleMapMarkerConfirm(1)>Marker 1</div>",
        },
        {
            position: {lat: -34.628145, lng: -58.365294},
            title: "Marker 2",
            content: ReactDOMServer.renderToString(<div className={"marker"}>Marker 2</div>)
                    +"<div class='button confirm' onclick=window.handleMapMarkerConfirm(2)>Confirm</div>",
        },
        {
            position: {lat: -34.638145, lng: -58.365294},
            title: "Marker 3",
            content: ReactDOMServer.renderToString(<div className={"marker"}>Marker 3</div>)
            +"<div class='button confirm' onclick=window.handleMapMarkerConfirm(3)>Confirm</div>",
        },
    ];

    handleMapMarkerConfirm = (id) => {
        console.log("MapMarkerConfirm: ",id);
    };

    componentDidMount() {
        window.handleMapMarkerConfirm = this.handleMapMarkerConfirm;
    }

    render() {
        return <section className={"page"}>
            <Toolbar title={'Map google'} menuButton/>

            <div className={"content-wrapper"}>
                {/* -------------------- Content --------------------*/}
                <Map className={"map"} elementId={this.elementId} mapConfig={this.mapConfig} markers={this.markers}/>
                {/* -------------------- Content --------------------*/}
            </div>
        </section>;
    }
}

const mapDispatchToProps = {};
const mapStateToProps = store => ({  });
export default connect(mapStateToProps, mapDispatchToProps)(Component);