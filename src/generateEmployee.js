const Employee = require("../lib/Employee");
const fs = require('fs');

function generateCards(teamList) {
  const joined = teamList.join("")
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Document</title>
</head>
<header>
    <div class="jumbotron text-center bg-danger p-3">
    <h1 class="display-4">My Team</h1>
    </div>
</header>
<body>
  <div class="d-flex flex-row justify-content-center">
    ${joined}
  </div>
</body>
</html>`;
}

function writeFile(TeamList) {
  fs.writeFile('index.html', TeamList, (error) => error ? console.error(error) : console.log("success"))
}

module.exports = {
  generateCards,
  writeFile
}
