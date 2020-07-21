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


promptUser()
  .then(function(data){
     
    let lyrics = data.name+'\nThe Project is developed in '+ data.location+
    '\n\nIndex:\n1.Description\n2.Installation Instructions\n3.Contribution Guidelines\n4.Usage Information\n5.Test Instructions\n6.GitHub username\n7.Questions'
    +'\n\nDescription:\n'+data.description+'\n\nInstallation Instructions:\n'+data.installation+'\n\nContribution Guidelines:\n'+data.contribution+
    '\n\nUsage Information:\n'+data.usage+'\n\nTest Instructions:\n'+data.test+'\n\nGitHub:\n'+data.github+'\n\nQuestions:\n'+'How to reach me with additional questions:'+data.email
    +"\n\n\n\n"+data.license+':\n'+data.LicenseDescription;

    fs.writeFile('ReadMe.md', lyrics, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
  
      // success case, the file was saved
      console.log('Lyric saved!');
    });
  });