import React from 'react';
import { useState, useEffect } from 'react';
import classes from './LocationMarker.module.css';

function LocationMarker({ lat, lng, category, zoom }) {
  //   let renderIcon = null;
  //   if (id === 8) {
  //     renderIcon = fireIcon;
  //   } else if (id === 10) {
  //     renderIcon = stormIcon;
  //   } else if (id === 12) {
  //     renderIcon = volcanoIcon;
  //   } else if (id === 15) {
  //     renderIcon = iceIcon;
  //   }

  let imgSrc = '';
  if (category < 5) {
    imgSrc = '/markers/icon-red.svg';
  }

  if (category > 4 && category < 13) {
    imgSrc = '/markers/icon-blue.svg';
  }

  if (category > 12 && category < 20) {
    imgSrc = `/markers/icon-${category}.svg`;
  }

  if (category > 19) {
    imgSrc = `/markers/icon-${category}.svg`;
  }

  return (
    <>
      <div
        className={classes.icon}
        // onClick={onClick}
        // onMouseEnter={() => handleOnEnter(id)}
        // onMouseLeave={() => setCurrentPlaceId(null)}
        // onClick={() => handleClick(id)}
      >
        <img
          style={{
            width: `${Math.pow(zoom, 2.7) * 0.0015}rem`,
            height: `${Math.pow(zoom, 2.7) * 0.0015}rem`,
          }}
          className={classes.markerIcon}
          src={imgSrc}
        />
      </div>
      {/* <div onClick={onClick}>
        <Icon icon={renderIcon} className="location-icon" />
      </div> */}
    </>
  );
}

export default LocationMarker;
