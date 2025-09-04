import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  const defaults = {
    icon: props.defaults,
    color: props.color,
    size: props.size,
    animate: true,
  };

  return (
    <ReactAnimatedWeather
      icon={defaults.icon}
      color={defaults.color}
      size={defaults.size}
      animate={defaults.animate}
    />
  );
}
