import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    console.log("get request working...");
    return res.json({
        success: true,
        message: 'Get request working fine...'
    });
});

app.post("/post", (req, res) => {
    console.log("Post request working...");
    return res.json({
        success: true,
        message: 'Post request working fine...'
    });
})

app.listen(PORT, () => console.log(`Server listening at port: ${PORT}`));