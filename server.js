import express from "express";
import jwt from "jsonwebtoken";
import 'dotenv/config'

const app = express();
app.use(express.json());

const posts = [{
    username: 'chayan',
    title: 'Title 1'
},{
    username: 'souvik',
    title: 'Title 2'
}];


app.get('/posts', (req, res) => {
    res.json(posts);
});

app.post('/login', (req, res) => {
    
    const user = { name : req.body.username  };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken });
})

const port = 3000;
app.listen(port , () => {
    console.log(`Listening on port ${port}...`);
});