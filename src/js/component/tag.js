import * as React from "react";

function Tag(props) {
  return (
    <div className={props.checked ? 'tags checked' : 'tags'} onClick={props.onClick}>
        {props.name}
    </div>
  );
}

export default Tag;

