const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

// GET all people
router.get('/', async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new person
router.post('/', async (req, res) => {
  const person = new Person({
    name: req.body.name,
    last: req.body.last,
    image: req.body.image,
    isFavorite: req.body.isFavorite,
  });

  try {
    const newPerson = await person.save();
    res.status(201).json(newPerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH (Update) a person by ID
router.patch('/:id', async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) return res.status(404).json({ message: 'Person not found' });

    if (req.body.name) person.name = req.body.name;
    if (req.body.last) person.last = req.body.last;
    if (req.body.image) person.image = req.body.image;
    if (req.body.isFavorite !== undefined) person.isFavorite = req.body.isFavorite;

    const updatedPerson = await person.save();
    res.json(updatedPerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a person by ID
router.delete('/:id', async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) return res.status(404).json({ message: 'Person not found' });

    await person.remove();
    res.json({ message: 'Person deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
