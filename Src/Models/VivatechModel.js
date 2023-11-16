const mongoose = require("mongoose");
const vivatechSchema = new mongoose.Schema(
  {
    title1: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const VivatechModel = mongoose.model("Vivatech", vivatechSchema);

module.exports = { VivatechModel };
