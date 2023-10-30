const router = require('express').Router();
const Book = require('../models/books');

router.get('/',async (req, res) => {
  try {
      const books = await Book.find().lean();
      res.json(books);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

router.get('/:id',async (req, res) => {
  try {
      const books = await Book.findById(req.params.id).lean();
      res.json(books);
  } catch (err) {
      res.status(500).json({ message: "Not found" });
  }
});

router.post('/', async (req, res) => {
  try {
    const checkExistence = await Book.find().lean();
    for(const data of checkExistence){
      if(req.body.title===data.title){
        throw new Error("Book already exists")
      }
    }

      const saveObject = {
        title:req.body.title,
        author:req.body.author,
        summary:req.body.summary
      }
      const newBook = await Book.create(saveObject);
      res.status(201).json({message:"Data saved"});
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

router.delete('/:title',async (req, res) => {
  try {
      const title = req.params.title
      const books = await Book.deleteOne({title}).lean();
      if(books.deletedCount===0){
        throw new Error("Book not found")
      }else{
        res.status(201).json({message:"Book deleted"});
      }
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

module.exports = router;
