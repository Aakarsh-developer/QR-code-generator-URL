import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "write yourl URL :",
        name:"URL",
    }
  ])
  .then((answers) => {
    const url=(answers.URL);
    var svg = qr.image(url);
    svg.pipe(fs.createWriteStream('youtube.png'));
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });