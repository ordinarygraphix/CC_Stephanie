//Stephanie Cen 
//Pokemon Data
//sketch shows the different types of pokemon by their color, but the sketch
//is broken right now.
//pokemon csv file found on https://www.kaggle.com/abcsds/pokemon

var table;
var type1 = [];
/*
var HP = []; 
var Attack = []; 
var Defense = []; 
var SpAttack = []; 
var SpDefense = []; 
var Speed = []; 
*/
function preload() {
  //csv file since table is comma separated & has a header
  table = loadTable("Pokemon.csv", "header");
}

function setup() {
  createCanvas(800, 800);
  //sets up arrayList for the pokemon data. 
  for (var i = 0; i < table.getRowCount(); i++) {
    type1[i] = table.getString(i, "Type 1");
   /* HP[i] = table.getNum(i, "HP");
    Attack[i] = table.getNum(i, "Attack");
    Defense[i] = table.getNum(i, "Dense");
    SpAttack[i] = table.getNum(i, "Sp. Atk");
    SpDefense[i] = table.getNum(i, "Sp. Def");
    Speed[i] = table.getNum(i, "Speed");
    */
     //console.log(type1);
  }
}

function draw() {


  //ellipse(x, y, 50, 50);
  
  for (var i = 0; i < type1.length; i++) {
    ///////////////////////////////////////////////////////////  
      var x = random(width);  //moved these two lines into the for loop
  var y = random(height);
  ////////////////////////////////////////////////////////////
    if (type1[i] == "Grass") {
      stroke(0, 255, 0); 
      fill(0, 255, 0); 
      ellipse(x, y, 50, 50);
    } else if (type1[i] == "Fire") {
      stroke(255, 0, 0);
      fill(255, 0, 0);
      ellipse(x, y, 50, 50);
    } else if (type1[i] == "Water") {
      stroke(0, 0, 255);
      fill(0, 0, 255);
      ellipse(x, y, 50, 50);
    } else if (type1[i] == "Bug") {
      stroke(217, 250, 10);
      fill(217, 250, 10);
      ellipse(x, y, 50, 50);
    } else if (type1[i] == "Normal") {
      stroke(227, 227, 227);
      fill(227, 227, 227);
      ellipse(x, y, 50, 50);
    } else if (type1[i] == "Poison") {
      stroke(206, 0, 229);
      fill(206, 0, 229);
      ellipse(x, y, 50, 50);
    } else if (type1[i] == "Electric") {
      stroke(249, 255, 77);
      fill(249, 255, 77);
      ellipse(x, y, 50, 50);
    } else if (type1[i] == "Ground") {
      stroke(188, 123, 0);
      fill(188, 123, 0);
      ellipse(x, y, 50, 50);
    } else if (type1[i] == "Fairy") {
      stroke(255, 214, 243);
      fill(255, 214, 243);
      ellipse(x, y, 50, 50);
    } else if (type1[i] == "Fighting") {
      stroke(255, 102, 0);
      fill(255, 102, 0);
      ellipse(x, y, 50, 50);
    } else if (type1[i] == "Physic") {
      stroke(255, 0, 192);
      fill(255, 0, 192);
      ellipse(x, y, 50, 50);
    } else if (type1[i] == "Rock") {
      stroke(211, 177, 2);
      fill(211, 177, 2);
      ellipse(x, y, 50, 50);
    } else if (type1[i] == "Ghost") {
      stroke(165, 2, 247);
      fill(165, 2, 247);
      ellipse(x, y, 50, 50);
    } else if (type1[i] == "Ice") {
      stroke(183, 252, 255);
      fill(183, 252, 255);
      ellipse(x, y, 50, 50);
    } else if (type1[i] == "Dragon") {
      stroke(202, 70, 255);
      fill(202, 70, 255);
      ellipse(x, y, 50, 50);
    } else if (type1[i] == "Dark") {
      stroke(0);
      fill(0);
      ellipse(x, y, 50, 50);
    } else if (type1[i] == "Steel") {
      stroke(209, 209, 209);
      fill(209, 209, 209);
      ellipse(x, y, 50, 50);
    } else if (type1[i] == "Flying") {
      stroke(191, 255, 255);
      fill(191, 255, 255);
      ellipse(x, y, 50, 50);
    }
    //console.log(type1);
  }
}