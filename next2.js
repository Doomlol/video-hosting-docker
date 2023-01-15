const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const directory = process.cwd()+"/vide";

app.use('/videos', express.static(directory));
app.use(express.static(__dirname+'public'))

app.get('/', (req, res) => {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.log("Error reading directory:", err);
      res.send("Error reading directory");
      return;
    }
    let videoList = '<div id="video-container">';
    for (const file of files) {
      if (path.extname(file) === ".mp4") {
        videoList += "<h1>"+file+"</h1>";
        videoList += `<video src="/videos/${file}" controls></video>`;
      }
    }
    videoList += '</div>'
    res.send(`
    <html>
    <head>
        <style>
        #video-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          
          video {
            width: 480px;
            height: 270px;
            margin: 100px;
          }
          
        </style>
    </head>
    <body>
    <h1>blockchain</h1>
    <hr>
        ${videoList}
    </body>
    </html>
    `);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
