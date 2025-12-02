import React from "react";

const CreateNote = ({ inputText, setInputText, saveHandler, editId }) => {
    const charLimit = 100 - inputText.length;

    return (
        <div className="p-4 bg-white/70 backdrop-blur-md rounded-xl shadow-md w-64">
            <textarea
                rows={5}
                placeholder="Type..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                maxLength={100}
                className="w-full p-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <div className="flex justify-between items-center mt-2 text-sm text-gray-700">
                <span>{charLimit} Left</span>
                <button
                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 text-sm rounded-md"
                    onClick={saveHandler}
                >
                    {editId ? "Update" : "Save"}
                </button>
            </div>
        </div>
    );
};

export default CreateNote;
