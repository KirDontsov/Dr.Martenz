import React, { Fragment } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = props => {
  return (
    <Fragment>
      <LazyLoadImage
        alt={props.alt}
        src={props.image} // use normal <img> attributes as props
        effect="blur"
        className={props.className}
      />
    </Fragment>
  );
};

export default LazyImage;
