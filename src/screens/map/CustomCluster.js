import React from "react";
import { Marker } from "react-native-maps";
import IndPin from "../../components/IndPin";

export const CustomCluster = (props) => {
    const coord = props.geometry.coordinates
    const disabled = props.disabled
    return (
        <Marker
            key={`${props.geometry.coordinates[0]}_${props.geometry.coordinates[1]}`}
            coordinate={{ longitude: coord[0], latitude: coord[1] }}
            onPress={props.onPress}
        >
            <IndPin color={disabled ? '#0B7CC4' : '#BB557B'} width='27' height='41' />
        </Marker>
    )
}