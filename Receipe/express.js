const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

router.get('/', async (req, res) => {
   try {
       const recipes = await Recipe.find();
       res.json(recipes);
   } catch (error) {
       res.status(500).json({ message: error.message });
   }
});

module.exports = router;
