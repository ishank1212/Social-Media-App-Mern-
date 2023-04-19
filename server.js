const express = require("express");
const connectDb = require('./config/dbConnect');
const authRouter = require('./routes/api/auth');
const postsRouter = require('./routes/api/posts');
const profileRouter = require('./routes/api/profile');
const usersRouter = require('./routes/api/users');


const app = express();
app.use(authRouter);
app.use(postsRouter);
app.use(profileRouter);
app.use(usersRouter);
app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
