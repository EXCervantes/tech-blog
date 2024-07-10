// Import necessary models, dependencies, and auth helper
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET post by ID
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['username']
            }
          ],
        },
      ],
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with that id!' });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add a new post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      post_title: req.body.title,
      post_body: req.body.content,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.error(err)
    res.status(400).json(err);
  }
});

// Update a previous post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedPost = await Post.update({
      post_title: req.body.title,
      post_body: req.body.body
    }, {
      where: { id: req.params.id },
    });

    if (!updatedPost) {
      res.status(404).json({ message: 'No post found with that id!' });
      return;
    }
    res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err)
    res.status(500).json(err);
  }
});

// DELETE a post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    await Comment.destroy({
      where: {
        post_id: req.params.id
      }
    });

    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedPost) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json({ deletedPost });
  } catch (err) {
    console.error(err)
    res.status(500).json(err);
  }
});

module.exports = router;
