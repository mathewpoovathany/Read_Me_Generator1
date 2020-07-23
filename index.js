const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
 {
     type: "input",
     name: "name",
     message: "what is the name of your project?"
 },
 {
     type: "input",
     name: "location",
     message: "where it is developed?"
 },
////////
 {
  type: "input",
  name: "description",
  message: "what is your description about the project?"
}, 

{
  type: "input",
  name: "installation",
  message: "what is your installation instructions about the project?"
}, 

{
  type: "input",
  name: "contribution",
  message: "what is your contribution guidelines about the project?"
}, 

{
  type: "input",
  name: "usage",
  message: "what is your usage information about the project?"
}, 

{
  type: "input",
  name: "test",
  message: "what is your test instructions about the project?"
},
/////////////////////// licence

{
  type: 'list',
  name: 'license',
  message: 'what is your license type:',
  choices: [ 'Free Version', 'Gold Plan', 'Platinum Plan' ],
  default: 'Free'
},
{
  type: "input",
  name: "LicenseDescription",
  message: "what is your license description?"
},
////////////////
{
    type: "input",
    name: "github",
    message: "what is your github name?"
}, 
{
    type: "input",
    name: "email",
    message: "what is your Email ID?" 
}, 

    
  ]);
}



function generateHTML(answers) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4" style="text-align: center;"> ${answers.name}</h1>
    <p class="lead" style="text-align: center;">The Project is developed in ${answers.location}.</p>
    <h3>Index</span></h3>
    <ul class="list-group"><li class="list-group-item"><a href="#Description">1.Description</a></li>
    <li class="list-group-item"><a href="#Installation">2.Installation Instructions</a></li>
    <li class="list-group-item"><a href="#Contribution">3.Contribution Guidelines</a></li>
    <li class="list-group-item"><a href="#Usage">4.Usage Information</a></li>
    <li class="list-group-item"><a href="#Test">5.Test Instructions</a></li>
    <li class="list-group-item"><a href="#GitHub">6.GitHub username </a></li>
    <li class="list-group-item"><a href="#Questions">7.Questions</a></li>
    </ul>
    <h3>Read Me <span class="badge badge-secondary">${answers.license}</span></h3>
    <ul class="list-group">
    <li class="list-group-item" id="Description"><h6>License Description:</h6>${answers.LicenseDescription}</li>
      <li class="list-group-item" id="Description"><h6>Description:</h6>${answers.description}</li>
      <li class="list-group-item" id="Installation"><h6>Installation Instructions:</h6>${answers.installation}</li>
      <li class="list-group-item" id="Contribution"><h6>Contribution Guidelines:</h6>${answers.contribution}</li>
      <li class="list-group-item" id="Usage"><h6>Usage Information:</h6>${answers.usage}</li>
      <li class="list-group-item" id="Test"><h6>Test Instructions:</h6>${answers.test}</li>
      <li class="list-group-item" id="GitHub"><h6>GitHub:</h6>My GitHub username is<a href="https://github.com/${answers.github}"><b> ${answers.github}</b></a></li>
      <li class="list-group-item" id="Questions"><h6>Questions:</h6>How to reach me with additional questions:<b> ${answers.email}</b></li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

promptUser()
  .then(function(data){
      const htmlText= generateHTML(data);
      writeFileAsync("index.html", htmlText);
     console.log(htmlText);
    console.log(data.city, data.location)
  })
  .then(function (){
    console.log("successfully wrote to index.html");
  })
  .catch(function (err){
      console.log(err);
  });
