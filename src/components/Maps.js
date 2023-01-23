import React, {useMemo} from "react";
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'

const Maps = () => {
    const {isLoaded} = useLoadScript({googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY})

    if (!isLoaded) return <div>Loading...</div>
    return (
        <section id='maps'>
            <Map/>
        </section>
    )
}


function Map() {
    const center = useMemo(() => ({
        lat: 50.41730290823196,
        lng: 16.666442344580794
    }), []);


    return <GoogleMap
        zoom={15}
        center={center}
        mapContainerClassName='map'
    >
        <Marker
            position={{
                lat: 50.41730290823196,
                lng: 16.666442344580794
            }}/>
    </GoogleMap>
}

export default Maps;