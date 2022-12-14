const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
const db = require('./models');

const postRouter = require('./routes/Posts');
app.use('/posts', postRouter);
const commentRouter = require('./routes/Comments');
app.use('/comments', commentRouter);

db.sequelize.sync().then(() => {
app.listen(3002, () => {
    console.log(`Server started on port 3002`);
});
});