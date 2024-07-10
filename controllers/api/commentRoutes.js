// Import necessary models, dependencies, and auth helper
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all comments
router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      attributes: { exclude: ['password'] },
    });
    res.json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET comment by ID
router.get('/:id', async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      attributes: { exclude: ['password'] },
    });

    if (!commentData) {
      res.status(400).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Add comment to a post
router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body.contentComment)
    const newComment = await Comment.create({
      comment_body: req.body.comment_body,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    });
    console.log(newComment)

    res.status(200).json(newComment);
  } catch (err) {
    console.error(err)
    res.status(400).json(err);
  }
});

// DELETE comment by ID
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deleteComment = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!deleteComment) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(deleteComment);
  } catch (err) {
    console.error(err)
    res.status(500).json(err);
  }
});

module.exports = router;
