import React from "react";

export default function PrimaryButton(props) {
  return (
    <button
      onClick={props.onClick}
      className="text-lg text-white font-semibold bg-purple-1000 px-5 py-2 shadow-white shadow-sm"
    >
      {props.name}
    </button>
  );
}
