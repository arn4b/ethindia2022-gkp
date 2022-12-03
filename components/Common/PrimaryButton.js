import React from "react";

export default function PrimaryButton(props) {
  return (
    <button
      onClick={props.onClick}
      className="transition ease-in-out delay-50 bg-purple-800 hover:-translate-y-1 hover:scale-110 hover:bg-purple-1000 duration-300 rounded-md text-lg text-white font-semibold px-5 py-2 shadow-sm"
    >
      {props.name}
    </button>
  );
}
