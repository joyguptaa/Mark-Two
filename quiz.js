var readlineSync = require("readline-sync");
const chalk = require("chalk");
var rankholders = [{Name : "Joy",
                    Score : 11}] // Scoreboard
var friends = ["Joy"]; //Friends List
var score = 0;
var difficulty = 0;

var name = readlineSync.question("What is your name? \n\n"); //Players Name

//Just to sort rankholders based on their score
function compare(a, b){
  //Checking Score
  if (a.Score > b.Score){
    return -11;
  }
  else if(a.Score < b.Score){
    return 1;
  }
  else{
    return
  }
}

//Fucntion to display scoreboard
function scoreboard(rankholders){
  rankholders.sort(compare); //Sort the score board
  console.log("Scoreboard\n");

  for(var x = 0; x < rankholders.length; x++){
    console.log(rankholders[x].Name,"     ", rankholders[x].Score, "\n");
  }
  console.log("Now send me the screenshot!!!") // To update scoreboard and friend list/array
}

//QnA begins from here
function askyourfriend(qsn, options, ans, iteration){
  difficulty++;
  console.log(chalk.bgGreen.bold.black("Question No ", iteration, "\n"))
  console.log(chalk.bgWhite.bold.red(qsn));  // Question
  var index = readlineSync.keyInSelect(options, "What do you think? ") //User Answer

  if(index == -1){ //Cancel Feature
    console.log(chalk.bgWhite.bold.blue("Dude got no chill!! \n"))
  }
  
  //Validating user's answer
  else if(index === ans){
    console.log(chalk.bold.blue("You are right ", name));
    score++;
    console.log(chalk.bgWhite.bold.blue("Score : ", score));
  }

  //If the answer isn't correct
  else{
    console.log(chalk.bold.red("No worries you can still do better!! \n"));
    console.log(chalk.bgWhite.bold.red("Score : ", score, "\n"))
  }
  if(difficulty % 5 == 0){
    console.log("\n\n",chalk.bgBlue.bold.white("              Hurray!!! Level UP!!       🎉✨ "), "\n\n");
  }
}

//Driver Code

function main(){
  
  // One can not play this came again n again
  if(friends.includes(name)){
    console.log(chalk.bgBlack.bold.yellow("Sorry! ",name, ". You can't play it twice."))
    return; //Returning nothing, pass the control back to function call
  }
  console.log(chalk.bgYellow.bold.white("Joy and Neogcamp welcome you to HMTL CSS Quiz "), "\n\n");
  // Top-Secret
  var myself = [
    {
      question : "What does HTML stand for? ",
      options : ["Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Markup Language"],
      answer : 2
    },
    {
      question : "Who is making the Web standards? ",
      options : ["Microsoft", "Mozilla", "Google", "The WWW Consortium"],
      answer : 3
    },
    {
      question : "Choose the correct HTML element for the largest heading: ",
      options : ["<h1>", "<heading>", "<head>", "<h6>"],
      answer : 0
    },
    {
      question : "What is the correct HTML element for inserting a line break? ",
      options : ["<lb>", "<break", "<br>"],
      answer : 2
    },
    {
      question : "What is the correct HTML for adding a background color? ",
      options : ["<body bg=\"yellow\">",
                  "<background>yellow</background>",
                  "<body style = \"background-color:yellow;\">"],
              
      answer : 2
    },
    {
    question : "Which character is used to indicate an end tag? ",
    options : ["/", "*", "^", "<"],
    asnwer : 3
    },
    {
      question : "What does CSS stand for? ",
      options : ["Computer Sytle Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
      answer : 0
    },
    {
      question : "Where in an HTML document is the correct place to refer to an external style sheet? ",
      options : ["At the end of the document", "In the <head> section", "In the <body> section"],
      answer : 1
    },
    {
      question : "Which HTML tag is used to define an internal style sheet? ",
      options : ["<css>", "<style>", "<script"],
      answer : 1
    },
    {
      question : "How do you insert a comment in a CSS file?",
      options : ["'comment", "/*comment*/", "//comment", "#comment"],
      answer : 1
    },
    {
      question : "Which property is used to change the background color? ",
      options : ["background-color", "bgcolor", "color"],
      answer : 0
    },
    {
      question : "Which CSS property controls the text size? ",
      options : ["font-size", "text-style", "text-size", "font-style"],
      answer : 0
    },
    {
      question : "What is the correct CSS syntax for making all the <p> elements bold? ",
      options : ["<p style = \"font-size:bold;\">",
                 "<p style = \"text-size:bold;\">",
                 "p {font-weight:bold;}",
                 "p {text-size:bold;}"],
      answer : 2
    },
    {
      question : "Which property is used to change the left margin of an element? ",
      options : ["padding-left", "margin-left", "indent"],
      answer : 1,
    },
    {
      question : "When using the padding property; are you allowed to use negative values?",
      options : ["Yes", "No"],
      answer : 1
    }
  ];

  //Iterating over each QnA and passing it to the function "askyourfriend"
  for (var x = 1; x <= myself.length; x ++){
    askyourfriend(myself[x -1].question, myself[x -1].options, myself[x-1].answer, x)
  }

  //Clear all the previous code
  console.clear();

  //After successfull QnA session, Now append the user's name into the list
  friends.push(name);

  // Along with his/her name ans score
  rankholders.push({Name : name,
                    Score  : score});
  scoreboard(rankholders) //It's Display time
}

// Exectuion begins from here
main()