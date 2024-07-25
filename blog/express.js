const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true });

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);

app.get('/posts', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

app.post('/posts', async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    res.json(post);
});

app.put('/posts/:id', async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(post);
});

app.delete('/posts/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
