import React from "react";

const CreateNote = ({ inputText, setInputText, saveHandler, editId }) => {
    const charLimit = 100 - inputText.length;

    return (
        <div className="p-4 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg w-72 border border-gray-200">
            <textarea
                rows={5}
                placeholder="Type..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                maxLength={100}
                className="w-full p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 
               focus:ring-indigo-500 bg-white/70"
            />

            <div className="flex justify-between items-center mt-3 text-sm text-gray-700">
                <span className="font-semibold">{charLimit} Left</span>

                <button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 text-sm rounded-lg shadow"
                    onClick={saveHandler}
                >
                    {editId ? "Update" : "Save"}
                </button>
            </div>
        </div>
    );
};

export default CreateNote;
