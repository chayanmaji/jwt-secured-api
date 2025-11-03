import express from "express";
const app = express();

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

const port = 3000;
app.listen(port , () => {
    console.log(`Listening on port ${port}...`);
});