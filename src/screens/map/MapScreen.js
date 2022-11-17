import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import * as Location from 'expo-location';
import { getContentByLocation } from '../../actions/content';
import { getUserByUsername } from '../../actions/user';
import { getDistance } from 'geolib';
import CustomCallout from './CustomCallout';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from "react-redux";
import NormPin from '../../components/NormPin';
import { CustomCluster } from './CustomCluster';

const window = Dimensions.get('window');
const { width, height } = window;
const LATITUD_DELTA = 0.05;
const LONGITUDE_DELTA = LATITUD_DELTA * (width / height);
const LAT_DEFAULT = 33;
const LONG_DEFAULT = -122;
const radius = 200;
const exploreRadius = 5000;

const MapScreen = (props) => {

    const { navigation } = props;
    const [userLocation, setUserLocation] = useState({
        latitude: LAT_DEFAULT,
        longitude: LONG_DEFAULT,
        latitudeDelta: LATITUD_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    });
    const [markerSate, setMarkers] = useState([]);
    const [showmodal, setShowModal] = useState(false);
    const [renderChildren, setRenderChildren] = useState([]);
    const [optionVisible, setOptionVisible] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(s => s.user);
    const mapRef = useRef();
    const [status] = Location.useForegroundPermissions()

    const toggleModal = () => setShowModal(!showmodal);

    //calculate distance between post and user
    const isDisable = useCallback((marker) => {
        let dist = getDistance(userLocation, {
            latitude: marker.coordinates[1],
            longitude: marker.coordinates[0]
        });
        return dist > radius;
    }, [userLocation]);


    // watch user location
    useEffect(() => {
        let foregroundSubscription = null
        const getUserLocation = async () => {
            if (!status.granted) {
                console.warn('Permission to access location was denied');
                return;
            }

            foregroundSubscription = await Location.watchPositionAsync({}, (position) => {
                setUserLocation({
                    ...position.coords,
                    latitudeDelta: LATITUD_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                })
            })
        }
        getUserLocation()
        return () => foregroundSubscription
    }, []);

    //get content from server when user change location
    useEffect(() => {
        let unmount = false;
        if (!unmount && userLocation) {
            getContentByLocation((radius + exploreRadius) / 1000, userLocation.latitude, userLocation.longitude, 100, 1)
                .then(res => res.items)
                .then(items => items.map(item => ({ ...item, disabled: isDisable(item.location) })))
                .then(items => {
                    setMarkers(items)
                    items.map(item => {
                        getUserByUsername(item.username).then(res => {
                            if (res) {
                                dispatch({ 'type': 'USER_IMAGE_UPDATE', 'payload': { [item.username]: res.image } })
                            }
                        })
                    })
                });
        }
        return () => {
            unmount = true;
        }
    }, [userLocation]);

    const onClusterPress = (clr, markers) => {
        if (!isClose(userLocation, {
            longitude: clr.geometry.coordinates[0],
            latitude: clr.geometry.coordinates[1]
        })) {
            return;
        }
        let clusterPoints = markers.map(marker => (marker.properties.coordinate));
        let pointOfInterest = markerSate.filter(marker => clusterPoints.some((value) => value.longitude === marker.location.coordinates[0] && value.latitude === marker.location.coordinates[1]));
        setRenderChildren(pointOfInterest);
        toggleModal();
    }

    const disableCluster = (coords) => !isClose(userLocation, {
        longitude: coords.coordinates[0],
        latitude: coords.coordinates[1]
    })

    const isClose = (from, to) => {
        return getDistance(from, to) < radius;
    };

    const onMarkerPress = (latLng, marker) => {
        if (!isClose(userLocation, latLng)) {
            return;
        }
        let post = markerSate.filter(mk => mk._id.$oid === marker._id.$oid);
        setRenderChildren(post);
        toggleModal();
    }

    return (!userLocation ? <></> :
        <View style={styles.container}>
            <MapView
                customMapStyle={styles.mapStyle}
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                ref={mapRef}
                maxZoomLevel={18}
                minZoomLevel={10}
                initialRegion={userLocation}
                preserveClusterPressBehavior
                onRegionChange={(region, details) => {
                    setUserLocation(prevState => ({
                        ...prevState,
                        longitudeDelta: region.longitudeDelta,
                        latitudeDelta: region.latitudeDelta
                    }));
                }}
                renderCluster={(cluster) => <CustomCluster {...cluster}
                    disabled={disableCluster(cluster.geometry)} />}
                onClusterPress={onClusterPress}
                showsUserLocation
                followsUserLocation
                showsMyLocationButton
                showsScale
            >
                <Circle
                    center={userLocation}
                    radius={radius}
                    fillColor={'#EA6C6C20'}
                    strokeWidth={0.5}
                    strokeColor={'#1a66ff'}
                />
                {/* add marker image here from props */}
                {markerSate.map((marker, index) => {
                    const latLng = {
                        longitude: marker.location.coordinates[0],
                        latitude: marker.location.coordinates[1]
                    }
                    return (
                        <Marker
                            stopPropagation={true}
                            key={marker._id.$oid}
                            coordinate={latLng}
                            onPress={() => onMarkerPress(latLng, marker)}
                        >
                            <NormPin color={marker?.disabled && marker.disabled ? '#0B7CC4' : '#BB557B'} width='27'
                                height='41' />
                        </Marker>
                    );
                })}
            </MapView>
            <Modal isVisible={showmodal} onBackdropPress={toggleModal}>
                <CustomCallout content={renderChildren} toggle={toggleModal} navigation={navigation}
                    setOptionVisible={setOptionVisible} />
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    Modal: {
        alignItems: 'center',
        alignSelf: 'center',
        height: '70%',
        width: '75%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 20,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        alignContent: 'space-between',
    },
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'tomato',
    },
    map: {
        flex: 1,
    },
    bubble: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 150,
    },
    // Arrow below the bubble
    arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5,
        // marginBottom: -15
    },
    scrollView: {
        // position: 'relative',
        // bottom: 100,
        top: 0,
        left: 0,
        right: 0,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        alignContent: 'center',
    },
    cardtitle: {
        fontSize: 12,
        // marginTop: 5,
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: 12,
        color: '#444',
    },
    markerWrap: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    marker: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(130,4,150, 0.9)',
    },
    ring: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: 'rgba(130,4,150, 0.3)',
        position: 'absolute',
        borderWidth: 1,
        borderColor: 'rgba(130,4,150, 0.5)',
    },
    mapStyle: [
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e9e9e9"
                },
                {
                    "lightness": 17
                }
            ]
        }
    ]

});

export default MapScreen;