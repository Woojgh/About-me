'use strict';
//I need to make a five yes or no question game.
var cobalt = 'That\'s right! Colbalt was the color of James\' truck! You deserve MHANY KITTEHS!'
var cobalt2 = 'Well.... I guess if you rememberd that the truck was blue we can let it slide.'
var blueQuestion = prompt('Did you notce what color of blue was mentioed in the Bio?')
if (blueQuestion.toLowerCase() === 'yes' || blueQuestion.toLowerCase() === 'y') {
  console.log(cobalt);
  alert(cobalt)
}
else if (blueQuestion.toLowerCase() === 'no' || blueQuestion.toLowerCase() === 'n') {
  alert(cobalt2);
  console.log(cobalt2)
}
else {
  console.log('WHAT IS YOUR MALFUNCTION');
  alert('WHAT IS YOUR MALFUNCTION!')
};

var treeAlertYes = 'Many people like you and James have had a similar situation from having too much of a good thing.'
var treeAlertNo = 'You must have had a good mentor to show you how to approach certain situations so to not be overwhelmed.'
var treeQuestion = prompt('Did you ever have a hobby that was ruined for you?')
if (treeQuestion.toLowerCase() === 'yes' || treeQuestion.toLowerCase() === 'y') {
  alert(treeAlertYes)
  console.log(treeAlertYes)
}
else if (treeQuestion.toLowerCase() === 'no' || treeQuestion.toLowerCase() === 'n') {
  alert(treeAlertNo)
  console.log(treeAlertNo)
}
else {
  alert('WHY ARE YOU STILL MALFUNCTIONING!!!!')
  console.log('WHY ARE YOU STILL MALFUNCTIONING!!!')
};

var pictureAlert =
var pictureQuestion = prompt('Do you think the background picture of the webste is photoshopped?')
if (pictureQuestion.toLowerCase() === 'yes' || pictureQuestion.toLowerCase() === 'y') {
  alert('Well you Sir are mistaken! That is an actual plant that James helped grow.  For the past 6 years, James has been the grounds keeper as a side hustle for a very large event property in Woodinville, WA. ' )
}
else if (pictureQuestion.toLowerCase() === 'no' || pictureQuestion.toLowerCase() === 'n') {
  alert('Nice job! That is an actual plant that James helped grow.  For the past 6 years James has been the grounds keeper as a side hustle for a very large event property in Woodinville, WA. ')
}
else {
  alert('WHAT IS YOUR MALFUNCTION!')
};

var googleQuestion = prompt('It is no secret who James wants to work for, huh?')
if (googleQuestion.toLowerCase() === 'yes' || googleQuestion.toLowerCase() === 'y') {
  alert('At one point, James worked for Microsoft in their game testing department.  He even worked on Call of Duty: Black Op\'s 2 before it hit the shelves! But alas Google still seems to be that next hurtle!' )
}
else if (googleQuestion.toLowerCase() === 'no' || googleQuestion.toLowerCase() === 'n') {
  alert('There is a link to show what Google is all about. James sister actually worked in the Google Maps department but the first day she had to call James asking why her keyboard wasn\'t working.  Turns out her keyboard wasn\'t plugged in!')
}
else {
  alert('ok.... seriously..... how...can.. you ... not ....answer YES OR NO!!!!!!!!! MALFUNCTION!!!!')
};

var Question = prompt('Did you notce what color of blue was mentioed in the Bio?')
if (blueQuestion.toLowerCase() === 'yes' || blueQuestion.toLowerCase() === 'y') {
  alert('That\'s right! Colbalt was the color of James\' truck! You deserve MHANY KITTEHS!' )
}
else if (blueQuestion.toLowerCase() === 'no' || blueQuestion.toLowerCase() === 'n') {
  alert('Well.... I guess if you rememberd that the truck was blue we can let it slide.')
}
else {
  alert('WHAT IS YOUR MALFUNCTION!')
};
