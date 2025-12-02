import React from "react";

const Note = ({ id, text, onDelete, onEdit }) => {
    return (
        <div className="p-4 bg-white/80 backdrop-blur-xl rounded-xl shadow-lg w-72 border border-gray-200">
            <div className="text-gray-800 font-medium">{text}</div>

            <div className="flex gap-3 mt-3">
                <button
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 text-sm rounded-lg shadow"
                    onClick={() => onDelete(id)}
                >
                    Delete
                </button>

                <button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 text-sm rounded-lg shadow"
                    onClick={() => onEdit(id, text)}
                >
                    Edit
                </button>
            </div>
        </div>
    );
};

export default Note;
