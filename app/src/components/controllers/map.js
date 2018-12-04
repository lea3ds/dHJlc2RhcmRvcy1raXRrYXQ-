import React from 'react';

class Component extends React.Component {
    defaultElementId = "map";
    defaultMarkers = [];
    defaultMapConfig = {
        center: {lat: -34.618145, lng: -58.365294},
        zoom: 12,
        fullscreenControl: false,
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        styles: [
            {"featureType": "poi", "stylers": [{"visibility": "off"}]},
            {"featureType": "poi.park", "stylers": [{"visibility": "on"}]},
            {"featureType": "transit", "stylers": [{"visibility": "off"}]},
        ],
    };

    initMap = (elementId, mapConfig, markers) => {

        elementId = !elementId ? this.defaultElementId : elementId;
        markers = !markers ? this.defaultMarkers : markers;
        mapConfig = !mapConfig ?this.defaultMapConfig:{...this.defaultMapConfig,...mapConfig};

        var googleMaps = new window.google.maps.Map(
            document.getElementById(elementId),
            mapConfig
        );

        markers.forEach(marker => {

            let googleMapsMarker = new window.google.maps.Marker({
                map: googleMaps,
                position: marker.position,
                title: marker.title,
            });

            let googleMapsInfoWindow = new window.google.maps.InfoWindow({
                content: marker.content
            });

            googleMapsMarker.addListener('click', function () {
                googleMapsInfoWindow.open(googleMaps, googleMapsMarker);
            });

        });

        // var contentString = ReactDOMServer.renderToString(<div>
        //     <h2>content</h2>
        //     <p id={"content"}>ACA</p>
        // </div>);
        //
        // contentString = contentString.replace('id="content"', 'id="content" onclick=window.handleConfirmLocker()');
    }

    componentDidMount() {
        this.initMap(this.props.elementId, this.props.mapConfig, this.props.markers);
    }

    render() {
        var elementId = !this.props.elementId ? this.defaultElementId : this.props.elementId;
        return <div id={elementId} className={this.props.className} style={{display: "flex", margin: "auto"}}/>;
    }
}

export default Component