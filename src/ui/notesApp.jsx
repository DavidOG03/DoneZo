import React, { useState } from "react";
import { Trash2, Plus, Search, Edit2, Check, X } from "lucide-react";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingTitle, setEditingTitle] = useState(false);
  const [tempTitle, setTempTitle] = useState("");

  const handleCreateNote = () => {
    const newNote = {
      id: Date.now(),
      title: "Untitled Note",
      content: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setNotes((notes) => [newNote, ...notes]);
    setSelectedNote(newNote);
  };

  const handleDeleteNote = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (!confirmed) return;

    setNotes((notes) => notes.filter((note) => note.id !== id));
    if (selectedNote?.id === id) {
      setSelectedNote(null);
    }
  };

  const handleUpdateContent = (content) => {
    if (!selectedNote) return;

    const updatedNote = {
      ...selectedNote,
      content,
      updatedAt: new Date().toISOString(),
    };

    setNotes((notes) =>
      notes.map((note) => (note.id === selectedNote.id ? updatedNote : note))
    );
    setSelectedNote(updatedNote);
  };

  const handleStartEditTitle = () => {
    setTempTitle(selectedNote.title);
    setEditingTitle(true);
  };

  const handleSaveTitle = () => {
    if (!tempTitle.trim()) {
      setEditingTitle(false);
      return;
    }

    const updatedNote = {
      ...selectedNote,
      title: tempTitle.trim(),
      updatedAt: new Date().toISOString(),
    };

    setNotes((notes) =>
      notes.map((note) => (note.id === selectedNote.id ? updatedNote : note))
    );
    setSelectedNote(updatedNote);
    setEditingTitle(false);
  };

  const handleCancelEdit = () => {
    setEditingTitle(false);
    setTempTitle("");
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="flex h-[calc(100vh-200px)] w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col">
        <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600">
          <button
            onClick={handleCreateNote}
            className="w-full bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
          >
            <Plus size={20} />
            New Note
          </button>
        </div>

        <div className="p-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredNotes.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              {searchQuery ? "No notes found" : "No notes yet"}
            </div>
          ) : (
            filteredNotes.map((note) => (
              <div
                key={note.id}
                onClick={() => setSelectedNote(note)}
                className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors ${
                  selectedNote?.id === note.id ? "bg-purple-50" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 truncate">
                      {note.title}
                    </h3>
                    <p className="text-sm text-gray-500 truncate mt-1">
                      {note.content || "No content"}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {formatDate(note.updatedAt)}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteNote(note.id);
                    }}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t border-gray-200 bg-gray-100">
          <p className="text-xs text-gray-500 text-center">
            {notes.length} {notes.length === 1 ? "note" : "notes"} total
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        {selectedNote ? (
          <>
            <div className="p-6 border-b border-gray-200 bg-gray-50">
              {editingTitle ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={tempTitle}
                    onChange={(e) => setTempTitle(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") handleSaveTitle();
                      if (e.key === "Escape") handleCancelEdit();
                    }}
                    className="flex-1 text-2xl font-bold border-b-2 border-purple-500 focus:outline-none bg-transparent"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveTitle}
                    className="text-green-600 hover:text-green-700"
                  >
                    <Check size={24} />
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="text-red-600 hover:text-red-700"
                  >
                    <X size={24} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-gray-800 flex-1">
                    {selectedNote.title}
                  </h2>
                  <button
                    onClick={handleStartEditTitle}
                    className="text-gray-500 hover:text-purple-600"
                  >
                    <Edit2 size={20} />
                  </button>
                </div>
              )}
              <p className="text-sm text-gray-500 mt-2">
                Last edited: {formatDate(selectedNote.updatedAt)}
              </p>
            </div>

            <div className="flex-1 p-6">
              <textarea
                value={selectedNote.content}
                onChange={(e) => handleUpdateContent(e.target.value)}
                placeholder="Start writing your note..."
                className="w-full h-full resize-none focus:outline-none text-gray-700 leading-relaxed"
              />
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            <div className="text-center">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-xl font-semibold">No note selected</p>
              <p className="text-sm mt-2">
                Create a new note or select one from the list
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesApp;
