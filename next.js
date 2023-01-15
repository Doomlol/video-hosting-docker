// // const fs = require('fs');
// // const path = require('path');

// // const directory = "/home/meet/Downloads/[ CourseBoat.com ] AlgoExpert - Blockchain Fundamentals/~Get Your Files Here !";

// // fs.readdir(directory, (err, files) => {
// //   if (err) {
// //     console.log("Error reading directory:", err);
// //     return;
// //   }

// //   for (const file of files) {
// //     if (path.extname(file) === ".mp4") {
// //       console.log(file);
// //     }
// //   }
// // });
// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const app = express();
// // const directory = "/home/meet/Downloads/[ CourseBoat.com ] AlgoExpert - Blockchain Fundamentals/~Get Your Files Here !";
// const directory =process.cwd() ;

// // app.get('/', (req, res) => {
// //   fs.readdir(directory, (err, files) => {
// //     if (err) {
// //       console.log("Error reading directory:", err);
// //       res.send("Error reading directory");
// //       return;
// //     }
// //     let videoList = '';
// //     for (const file of files) {
// //       if (path.extname(file) === ".mp4") {
// //         videoList += file+"<br>";
// //       }
// //     }
// //     res.send(videoList);
// //   });
// // });

// app.get('/', (req, res) => {
//     fs.readdir(directory, (err, files) => {
//       if (err) {
//         console.log("Error reading directory:", err);
//         res.send("Error reading directory");
//         return;
//       }
//       let videoList = '<div id="video-container">';
//       for (const file of files) {
//         if (path.extname(file) === ".mp4") {

//           videoList += `<video src="${.file}" controls></video>`;
//         }
//       }
//       videoList += '</div>'
//       res.send(videoList);
//     });
//   });
  

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const directory = process.cwd()+"/vide";

app.use('/videos', express.static(directory));

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
        videoList += file+"<br>";
        videoList += `<video src="/videos/${file}" controls></video>`;
      }
    }
    videoList += '</div>'
    res.send(videoList);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
