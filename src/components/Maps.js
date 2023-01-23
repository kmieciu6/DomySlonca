import React, {useMemo} from "react";
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'

const Maps = () => {
    const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyDdvHGMi3Lbh8dcY0S6vwaop5kfVAflLDM"})

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
        zoom={13}
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