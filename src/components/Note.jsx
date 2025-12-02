import React from "react";

const Note = ({ id, text, onDelete, onEdit }) => {
    return (
        <div className="p-2 bg-white/70 backdrop-blur-md rounded shadow-md w-64 flex flex-col gap-2">
            <div>{text}</div>

            <div className="flex gap-2">
                <button
                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 text-sm rounded-md"
                    onClick={() => onDelete(id)}
                >
                    Delete
                </button>

                <button
                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 text-sm rounded-md"
                    onClick={() => onEdit(id, text)}
                >
                    Edit
                </button>
            </div>
        </div>
    );
};

export default Note;
