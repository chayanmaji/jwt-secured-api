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


app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name));
});

app.post('/login', (req, res) => {
    
    const user = { name : req.body.username  };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken });
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    if (authHeader === undefined || authHeader === null) return res.sendStatus(401);
    const token = authHeader && authHeader.split(' ')[1];

    if (token === null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });

}

const port = 3000;
app.listen(port , () => {
    console.log(`Listening on port ${port}...`);
});