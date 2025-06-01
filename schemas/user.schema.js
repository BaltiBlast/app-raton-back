const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user_email: {
      type: String,
      required: [true, "L'email est obligatoire"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Le mot de passe est obligatoire"],
      minlength: [8, "Le mot de passe doit faire au moins 8 caractères"],
      validate: [
        {
          validator: function (password) {
            return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(password);
          },
          message: "Le mot de passe doit contenir au moins un caractère spécial (!@#$%^&*...)",
        },
      ],
    },
    user_firstname: {
      type: String,
      required: [true, "Le prénom est obligatoire"],
      trim: true,
    },
    user_lastname: {
      type: String,
      required: [true, "Le nom est obligatoire"],
      trim: true,
    },
    user_address: {
      street_number: { type: String, required: true },
      street_name: { type: String, required: true },
      postal_code: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true, default: "France" },
    },
    user_phone: {
      type: String,
      required: [true, "Le téléphone est obligatoire"],
      trim: true,
    },
    user_invoice_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = userSchema;
