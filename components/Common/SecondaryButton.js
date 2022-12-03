import React from "react";

export default function SecondaryButton(props) {
return (
    <button
    onClick={props.onClick}
    className="transition ease-in-out delay-50 bg-white hover:scale-105 hover:bg-purple-100 hover:rounded-lg duration-300 rounded-md text-lg text-purple-800 font-semibold px-5 py-2 m-4 shadow-sm"
    {...props}
    >
    {props.name}
    </button>
);
}
