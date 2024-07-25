const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/posts', async (req, res) => {
   try {
       const posts = await Post.find();
       res.json(posts);
   } catch (error) {
       res.status(500).json({ message: error.message });
   }
});

router.post('/posts', async (req, res) => {
   const post = new Post(req.body);
   try {
       const newPost = await post.save();
       res.status(201).json(newPost);
   } catch (error) {
       res.status(400).json({ message: error.message });
   }
});

router.put('/posts/:id', async (req, res) => {
   try {
       const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
       res.json(post);
   } catch (error) {
       res.status(400).json({ message: error.message });
   }
});

router.delete('/posts/:id', async (req, res) => {
   try {
       await Post.findByIdAndDelete(req.params.id);
       res.json({ message: 'Post deleted' });
   } catch (error) {
       res.status(500).json({ message: error.message });
   }
});

module.exports = router;
