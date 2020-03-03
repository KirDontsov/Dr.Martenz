import React from "react";
import { Map, Placemark } from "react-yandex-maps";

const MyMap = () => (
  <Map
    width="90vw"
    height="70vh"
    defaultState={{
      center: [56.791109, 60.640142],
      zoom: 14,
      controls: ["zoomControl", "fullscreenControl"]
    }}
    modules={["control.ZoomControl", "control.FullscreenControl"]}
    instanceRef={ref => {
      ref && ref.behaviors.disable("scrollZoom");
    }}
  >
    <Placemark
      geometry={[56.791109, 60.640142]}
      options={{ iconColor: "#ffe513" }}
    />
  </Map>
);

export default MyMap;
