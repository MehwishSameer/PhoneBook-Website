const express = require('express');
const router = express.Router();
const {Posts} = require('../models');

router.get("/", async (req, res) => {
    const listofPosts = await Posts.findAll();
    res.json(listofPosts);
});

router.get("/comment/:id", async(req, res) => {
    const id= req.params.id;
    const post =await Posts.findByPk(id);
    res.json(post);
})

router.post("/", async (req, res) => {
    const post= req.body;
    await Posts.create(post);
    res.json(post);
});

router.delete("/:postId", async (req, res) => {
    const postId = req.params.postId;
    await Posts.destroy({
      where: {
        id: postId,
      },
    });
  });

module.exports = router;