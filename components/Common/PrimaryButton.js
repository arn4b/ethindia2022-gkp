import React from "react";

export default function PrimaryButton(props) {
  return (
    <button
      onClick={props.onClick}
      className="transition ease-in-out delay-50 bg-purple-800 hover:scale-105 hover:bg-purple-1000 hover:rounded-lg duration-300 rounded-md text-lg text-white font-semibold px-5 py-2 m-4 shadow-sm"
    >
      {props.name}
    </button>
  );
}
