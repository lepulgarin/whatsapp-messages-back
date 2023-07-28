import 'dotenv/config';
import cors from 'cors';
import routes from './infrastructure/router';
const express = require('express');
const port = process.env.PORT || 3001;
const app = express();
const path = require('path');
const multer = require('multer');
const fs = require('fs');
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.static('tmp'));
app.use(`/`, routes);

const storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    cb(null, 'tmp');
  },
  filename: function (req: any, file: any, cb: any) {
    cb(null, 'imagen.jpg');
  },
});

const upload = multer({ storage: storage }).single('file');

app.post('/upload', (req: any, res: any) => {
  upload(req, res, (err: any) =>{
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
    
  })
});

app.get('/download', (req: any, res: any) => {
  const file = `./tmp/imagen.jpg`;
  const base64 = fs.readFileSync(file, 'base64');
  res.send(base64);
});

app.listen(port, () => console.log(`Ready...${port}`));
