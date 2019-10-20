import React, { Component } from "react";
import Dimensions from "react-dimensions";
import { Container } from "./styles";
import MapGL from "react-map-gl";
import PropTypes from "prop-types";

import debounce from "lodash/debounce";
import api from "../../services/api";

import LeftBar from '../../components/leftBar';
import Events from "../../components/Events";

const TOKEN = "pk.eyJ1IjoicmF5b2FjayIsImEiOiJjankwNWNqZXIwYTNwM2dwYmNocWtpZGJqIn0.UisCMlaFbbv0AXiPBWFkaQ";

class Map extends Component {
    constructor() {
        super();
        this.updateEventsLocalization = debounce(
          this.updateEventsLocalization,
          500
        );
        this.state = {
            viewport: {
                latitude: -27.2108001,
                longitude: -49.6446024,
                zoom: 12.8,
                bearing: 0,
                pitch: 0
            },
            events: [],
        };
    }

    componentDidMount() {
        this.loadEvents();
    }
      
    updateEventsLocalization() {
        this.loadEvents();
    }
      
    loadEvents = async () => {
        const { latitude, longitude } = this.state.viewport;
        try {
          const response = await api.get("/events", {
            params: { latitude, longitude }
          });
          this.setState({ events: response.data });
        } catch (err) {
          console.log(err);
        }
    };

    

    static propTypes = {
        containerWidth: PropTypes.number.isRequired,
        containerHeight: PropTypes.number.isRequired
    };

    render() {
        const { containerWidth: width, containerHeight: height } = this.props;
        const { events } = this.state;
        return (
            <MapGL
            width={width}
            height={height}
            {...this.state.viewport}
            mapStyle="mapbox://styles/mapbox/dark-v9"
            mapboxApiAccessToken={TOKEN}
            onViewportChange={viewport => this.setState({ viewport })}
            onViewStateChange={this.updateEventsLocalization.bind(this)}
            >
            <LeftBar events={events}/>
            <Events events={events} />
            </MapGL>
        );
    }
}

const DimensionedMap = Dimensions()(Map);
const Mapa = () => (
    <>
        <Container>
            <DimensionedMap />
        </Container>
    </>
);

export default Mapa;