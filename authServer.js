import express from "express";
import jwt from "jsonwebtoken";
import 'dotenv/config'

const app = express();
app.use(express.json());





app.post('/login', (req, res) => {    
    const user = { name : req.body.username  };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' });
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    res.json({ accessToken, refreshToken });
})





const port = 4000;
app.listen(port , () => {
    console.log(`Listening on port ${port}...`);
});