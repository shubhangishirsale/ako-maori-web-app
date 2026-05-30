const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/test", (req, res) => {
  res.json({ message: "Test route working" });
});

app.get("/lessons", (req, res) => {
  db.query("SELECT * FROM lessons", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.get("/words", (req, res) => {
  db.query("SELECT * FROM words", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.get("/quizzes", (req, res) => {
  db.query("SELECT * FROM quizzes", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.get("/progress", (req, res) => {
  db.query("SELECT * FROM progress ORDER BY completed_at DESC", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.post("/progress", (req, res) => {
  const { user_name, lesson_id, score } = req.body;

  const sql = "INSERT INTO progress (user_name, lesson_id, score) VALUES (?, ?, ?)";
  db.query(sql, [user_name, lesson_id, score], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ message: "Progress saved successfully!" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});