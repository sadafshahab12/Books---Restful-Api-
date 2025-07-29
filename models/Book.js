import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [2, "Title must be at least 2 characters long"],
      maxlength: [50, "Title must not be more than 50 characters long"],
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      trim: true,
    },
    year: {
      type: Number,
      min: [0, "Year must be greater than 0"],
      max: [new Date().getFullYear()],
    },
    genre: {
      type: String,
      enum: [
        "Fiction",
        "Non-Fiction",
        "Biography",
        "Islamic",
        "Science",
        "Other",
      ],
      default: "Other",
    },
    summary: {
      type: String,
      maxlength: [1000, "Summary must not be more than 1000 characters long"],
    },
    published: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      immutable: true, // This value can't be changed once set
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

bookSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

export const Book = mongoose.model("Book", bookSchema);
