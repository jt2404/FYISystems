const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // create this folder if it doesn't exist
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });
router.get("/", authMiddleware.protect, userController.getAllUsers);
router.get("/:id", authMiddleware.protect, userController.getUserById);
// router.put("/:id", authMiddleware.protect, userController.updateUser);
router.delete("/:id", authMiddleware.protect, userController.deleteUser);
router.put(
  "/:id",
  authMiddleware.protect,
  upload.single("profile"),
  userController.updateUserProfile
);

module.exports = router;
