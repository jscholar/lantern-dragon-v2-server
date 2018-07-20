const express = require("express");
const Comment = require("../models/comment.model")

const router = express.Router();


router.get("", (req, res, next) => {
  Comment.find()
    .then(documents => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        comments: documents
      });
    });
});

router.delete("/:id", (req, res, next) => {
  console.log(req.params.id);
  Comment.deleteOne({_id: req.params.id})
    .then(result => {
      console.log(result);
      res.status(200).json({message: "Comment deleted"})
    })
});

router.post("", (req, res, next) => {
  const comment = new Comment({
    user: req.body.user,
    content: req.body.content,
    date: req.body.date
  });
  comment.save()
    .then(newComment => {
      console.log(newComment);
      res.status(201).json({
        message: 'Post added successfully',
        commentId: newComment.id
      });
    });
});

module.exports = router;
