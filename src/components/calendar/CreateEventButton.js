import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import add from '../../assets/plus.png'

export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="create border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
      ➕
      {/* <img src={add} alt="create_event" className="w-7 h-7"/> */}
      <span className="pl-3 pr-7"> Create</span>
    </button>
  );
}
