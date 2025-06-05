const mongoose = require("mongoose");

const customersSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "L'ID utilisateur est obligatoire"],
      auto: true,
      description: "Customer owner",
    },

    customer_name: {
      type: String,
      required: [true, "Le nom du client est obligatoire"],
      trim: true,
      description: "Client's name",
    },

    customer_email: {
      type: String,
      required: [true, "L'email du client est obligatoire"],
      trim: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Veuillez entrer un email valide"],
      description: "Client's email",
    },

    customer_address: {
      street_number: { type: String, required: true },
      street_name: { type: String, required: true },
      postal_code: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true, default: "France" },
    },

    customer_phone: {
      type: String,
      required: false,
      description: "Client's phone",
    },

    customer_invoice_count: {
      type: Number,
      default: 0,
      description: "Last invoice number",
    },
  },
  {
    timestamps: {
      createdAt: "customer_created_at",
      updatedAt: "customer_updated_at",
    },
  }
);

module.exports = customersSchema;
