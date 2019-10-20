import React from "react";
import { Marker } from "react-map-gl";
//import { Link } from "react-router-dom";

import Chip from '@material-ui/core/Chip';
import SchoolIcon from '@material-ui/icons/School';
//import { Pin } from "./styles";

const Events = ({ events }) =>
  events.map(event => (
    <Marker
      key={event.id}
      longitude={event.longitude}
      latitude={event.latitude}
    >
      <Chip
        icon={<SchoolIcon />}
        label={event.title}
        clickable
        color="primary"
      />
      {/*<Pin>
        <Link to="">{event.title}</Link>
      </Pin>*/}
    </Marker>
  ));

export default Events;