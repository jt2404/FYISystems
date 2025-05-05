const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "uploads");

    // Check if the folder exists, if not, create it
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
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
  upload.single("profilePhoto"),
  userController.updateUserProfile
);

module.exports = router;
