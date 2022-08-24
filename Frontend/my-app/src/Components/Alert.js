import React from "react";

export default function Alert(props) {

  const captilize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);}

  return (
    props.alert&&<div id ="alert" className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{captilize(props.alert.type)}</strong>:{props.alert.message}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}