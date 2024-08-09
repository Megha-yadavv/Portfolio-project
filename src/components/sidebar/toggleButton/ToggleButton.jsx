import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion"

export default function ToggleButton(props) {
  const [bar, setBar] = useState(true);
  return (
    <div>
      {bar == true ? (
        <button
          onClick={() => {
            props.setOpen((prev) => !prev);
            setBar((prev) => !prev);
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      ) : (
        <button
          onClick={() => {
            props.setOpen((prev) => !prev);
            setBar((prev) => !prev);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      )}
    </div>
  );
}
