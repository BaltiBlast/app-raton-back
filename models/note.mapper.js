const CoreMapper = require("./core.mapper");
const noteSchema = require("../schemas/notes.schema");

class UserMapper extends CoreMapper {
  note = this.mongoose.model("Notes", noteSchema);

  async addNote(noteData) {
    const newNote = new this.note(noteData);
    return await newNote.save();
  }

  async updateNote(noteId, updatedNoteData) {
    return await this.note.findByIdAndUpdate(noteId, updatedNoteData, {
      new: true,
      runValidators: true,
    });
  }

  async getAllUserNotes(userId) {
    return await this.note.find({ user_id: userId }).select("-__v");
  }

  async deleteNoteById(noteId) {
    return await this.customer.findByIdAndDelete(noteId);
  }
}

module.exports = UserMapper;
