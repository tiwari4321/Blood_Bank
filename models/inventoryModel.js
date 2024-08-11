const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
<<<<<<< HEAD
  {
    inventoryType: {
      type: String,
      required: [true, "inventory type require"],
      enum: ["in", "out"],
    },
    bloodGroup: {
      type: String,
      required: [true, "blood group is require"],
      enum: ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"],
    },
    quantity: {
      type: Number,
      require: [true, "blood quanity is require"],
    },
    email: {
      type: String,
      required: [true, "Donar Email is Required"],
    },
    organisation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "organisation is require"],
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "out";
      },
    },
    donar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "in";
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inventory", inventorySchema);
=======
    {
        inventoryType: {
            type: String,
            required: [true, "inventory type require"],
            enum: ["in", "out"],
        },
        bloodGroup: {
            type: String,
            required: [true, "blood group is require"],
            enum: ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"],
        },
        quantity: {
            type: Number,
            require: [true, "blood quanity is require"],
        },
        email: {
            type: String,
            required: [true, "Donar Email is Required"],
        },
        organisation: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: [true, "organisation is require"],
        },
        hospital: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: function () {
                return this.inventoryType === "out";
            },
        },
        donar: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: function () {
                return this.inventoryType === "in";
            },
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Inventory", inventorySchema);
>>>>>>> 41e7e2de5b40969e6aa470a3b1a12afc3bbc4fc3
