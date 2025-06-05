const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "L'ID utilisateur est obligatoire"],
      description: "Note owner",
    },

    note_title: {
      type: String,
      required: [true, "Le titre de la note est obligatoire"],
      description: "Note's name",
    },

    note_content: {
      type: String,
      required: [true, "Le contenu de la note est obligatoire"],
      description: "Note content",
    },
  },
  {
    timestamps: {
      createdAt: "note_created_at",
      updatedAt: "note_updated_at",
    },
  }
);

module.exports = notesSchema;
