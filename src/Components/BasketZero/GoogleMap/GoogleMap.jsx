import React from 'react';
import GoogleMap, { Marker } from 'react-maps-google';

const GoogleMap = () => {
    return (
        <GoogleMap apiKey="[aljg;ah'oaiuoriljk5062967027]">
            <Marker position={{lat: 40.7174343, lng: -73.9930319}} />
        </GoogleMap>

    );
};

export default GoogleMap;