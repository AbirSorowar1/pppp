import React, { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { v4 as uuid } from "uuid";

const Notes = () => {
    const [inputText, setInputText] = useState("");
    const [notes, setNotes] = useState([]);
    const [editId, setEditId] = useState(null);

    // Load notes from localStorage
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Notes"));
        if (data) setNotes(data);
    }, []);

    // Save notes to localStorage
    useEffect(() => {
        localStorage.setItem("Notes", JSON.stringify(notes));
    }, [notes]);

    // Save or Update
    const saveHandler = () => {
        if (inputText.trim() === "") return;

        if (editId) {
            setNotes((prev) =>
                prev.map((note) =>
                    note.id === editId ? { ...note, text: inputText } : note
                )
            );
            setEditId(null);
        } else {
            setNotes((prev) => [{ id: uuid(), text: inputText }, ...prev]);
        }

        setInputText("");
    };

    const deleteHandler = (id) => {
        setNotes((prev) => prev.filter((note) => note.id !== id));
    };

    const editHandler = (id, text) => {
        setInputText(text);
        setEditId(id);
    };

    return (
        <div className="flex flex-col gap-6 items-center">
            <CreateNote
                inputText={inputText}
                setInputText={setInputText}
                saveHandler={saveHandler}
                editId={editId}
            />

            <div className="flex flex-wrap gap-4 justify-center">
                {notes.map((note) => (
                    <Note
                        key={note.id}
                        id={note.id}
                        text={note.text}
                        onDelete={deleteHandler}
                        onEdit={editHandler}
                    />
                ))}
            </div>
        </div>
    );
};

export default Notes;
