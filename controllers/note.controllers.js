const { NoteMapper } = require("../models/index.mapper");

const noteControllers = {
  // ----------------------------------------------------------------------------------------------------- //
  // Add new note to DB
  addNote: async (req, res) => {
    try {
      const { note_title, note_content } = req.body;
      const userId = req.session.user._id;

      const noteDate = {
        user_id: userId,
        note_title: note_title,
        note_content: note_content,
      };

      const newNote = await NoteMapper.addNote(noteDate);
      res.status(201).json({ success: true, data: newNote });
    } catch (error) {
      console.error("❌ Erreur création note:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  },

  // ----------------------------------------------------------------------------------------------------- //
  // Update note to DB
  updateNote: async (req, res) => {
    try {
      const noteId = req.params.noteId;
      const updatedNoteData = { ...req.body };

      delete updatedNoteData.user_id;

      const updateNote = await NoteMapper.updateNote(noteId, updatedNoteData);
      res.status(201).json({ success: true, data: updateNote });
    } catch (error) {
      console.error("❌ Erreur MAJ note:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  },

  // ----------------------------------------------------------------------------------------------------- //
  // Get all user's notes
  getUserNotes: () => {},

  // ----------------------------------------------------------------------------------------------------- //
  // Delete note to DB
  deleteNote: () => {},
};

module.exports = noteControllers;
