import { useState, useRef, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import useSupercluster from 'use-supercluster';
import LocationMarker from './LocationMarker';

function Map(props) {
  const { center, eventData, categoryCheck, bounds, setBounds } = props;

  const mapRef = useRef();
  const [zoom, setZoom] = useState(13);

  const points = eventData.map((event) => ({
    type: 'Feature',
    properties: {
      cluster: false,
      eventId: event._id,
      eventCategory: event.category,
      eventStartDate: event.startDate,
      eventEndDate: event.endDate,
      eventStartTime: event.startTime,
      eventEndTime: event.endTime,
      eventTitle: event.title,
      eventOrganiser: event.organiser,
      eventDescription: event.description,
      eventCity: event.city,
      eventStreet: event.street,
      eventImage: event.image,
      eventLat: event.lat,
      eventLong: event.long,
    },
    geometry: {
      type: 'Point',
      coordinates: [event.long, event.lat],
    },
  }));

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  const handleMapChange = (bounds) => {
    // console.log('La mappa ha cambiato');
    // console.log(bounds.sw);
  };

  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY }}
        center={center}
        zoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        // Next thing will give access to the actual js map object (?)
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            // bounds.sw.lat,
            // bounds.ne.lat,
            // bounds.sw.lng,
            // bounds.ne.lng,
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat,
          ]);
          //   console.log(bounds);
          handleMapChange(bounds);
        }}
      >
        {clusters.map((cluster) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const { cluster: isCluster, point_count: pointCount } =
            cluster.properties;

          if (isCluster) {
            let changeSize = Math.round((pointCount / points.length) * 5);
            //Can't exceed 40 px
            let addSize = Math.min(changeSize * 10, 40);
            return (
              <section key={cluster.id} lat={latitude} lng={longitude}>
                <div
                  className="cluster-marker"
                  style={{
                    width: `${addSize + changeSize}px`,
                    height: `${addSize + changeSize}px`,
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );
                    mapRef.current.setZoom(expansionZoom);
                    mapRef.current.panTo({ lat: latitude, lng: longitude });
                  }}
                >
                  {pointCount}
                </div>
              </section>
            );
          } else {
            return (
              <LocationMarker
                key={`${cluster.properties.eventId}`}
                lat={latitude}
                lng={longitude}
                category={cluster.properties.eventCategory[0]}
                zoom={zoom}
              />
            );
          }

          //   Not a cluster
          //   if (categoryCheck[+cluster.properties.eventCategory[0]]) {
          //     return (
          //       <LocationMarker
          //         key={`${cluster.properties.eventId}`}
          //         lat={latitude}
          //         lng={longitude}
          //         category={cluster.properties.eventCategory[0]}
          //         zoom={zoom}
          //       />
          //   <Marker
          //     key={`${cluster.properties.eventId}`}
          //     lat={latitude}
          //     lng={longitude}
          //   >
          //     <CustomMarker
          //       key={cluster.properties.eventId}
          //       id={cluster.properties.eventId}
          //       title={cluster.properties.eventTitle}
          //       setCurrentPlaceId={setCurrentPlaceId}
          //       mobileView={mobileView}
          //       category={cluster.properties.eventCategory[0]}
          //       zoom={zoom}
          //     />
          //   </Marker>
          // );
          //   }
        })}
      </GoogleMapReact>
    </div>
  );
}

Map.defaultProps = {
  center: {
    lat: 45.76,
    lng: 11.73,
  },
};

export default Map;
