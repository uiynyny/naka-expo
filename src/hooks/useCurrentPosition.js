import React from "react";
import { getCurrentPositionAsync, useForegroundPermissions } from "expo-location";

export function useCurrentPosition() {
    const [location, setLocation] = React.useState()
    const [status, permission] = useForegroundPermissions()
    React.useEffect(() => {
        (async () => {
            let loc = await getCurrentPositionAsync()
            setLocation(loc)
        })()
    },[status])
    return [location]
}