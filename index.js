const hamburger = document.querySelector(".hamburger-icon")
const popchoice = document.querySelector(".popchoice")
const navigationbar = document.querySelector(".navigation-class")
const close = document.querySelector(".close-icon")


/*option choose*/
const option1 = document.querySelector(".option1")
const option2 = document.querySelector(".option2")
const option3 = document.querySelector(".option3")


const choice1 = document.querySelector(".choice1")
const choice2 = document.querySelector(".choice2")
const choice3 = document.querySelector(".choice3")


const line1 = document.querySelector(".choice-line1")
const line2 = document.querySelector(".choice-line2")
const line3 = document.querySelector(".choice-line3")
/*option choose*/




/*arrow icon*/
const first_question = document.querySelector(".question1")
const second_question = document.querySelector(".question2")
const third_question = document.querySelector(".question3")
const fourth_question = document.querySelector(".question4")

const arrow1 = document.querySelectorAll(".arrow-icon")[0]
const arrow2 = document.querySelectorAll(".arrow-icon")[1]
const arrow3 = document.querySelectorAll(".arrow-icon")[2]
const arrow4 = document.querySelectorAll(".arrow-icon")[3]

/*arrow icon*/


/*answer question*/
const answer1 = document.querySelector(".question1-answer")
const answer2 = document.querySelector(".question2-answer")
const answer3 = document.querySelector(".question3-answer")
const answer4 = document.querySelector(".question4-answer")

/*answer question*/



/*navigation bar*/
hamburger.addEventListener("click", function() {
  navigationbar.classList.add("notshowed")
  popchoice.classList.remove("notshowed")
  popchoice.classList.add("showed")
})

close.addEventListener("click", function() {
  navigationbar.classList.remove("notshowed")
  popchoice.classList.add("notshowed")
  popchoice.classList.remove("showed")
})
/*navigation bar*/


/*section change*/
option1.addEventListener("click", function(){
  choice1.classList.remove("notshowed")
  choice1.classList.add("flexing")

  choice2.classList.add("notshowed")
  choice2.classList.remove("flexing")

  choice3.classList.add("notshowed")
  choice3.classList.remove("flexing")

  line1.classList.remove("notshowed")
  line2.classList.add("notshowed")
  line3.classList.add("notshowed")
})

option2.addEventListener("click", function(){
  choice2.classList.remove("notshowed")
  choice2.classList.add("flexing")

  choice1.classList.add("notshowed")
  choice1.classList.remove("flexing")

  choice3.classList.add("notshowed")
  choice3.classList.remove("flexing")

  line2.classList.remove("notshowed")
  line1.classList.add("notshowed")
  line3.classList.add("notshowed")
})

option3.addEventListener("click", function(){
  choice3.classList.remove("notshowed")
  choice3.classList.add("flexing")

  choice1.classList.add("notshowed")
  choice1.classList.remove("flexing")

  choice2.classList.add("notshowed")
  choice2.classList.remove("flexing")

  line3.classList.remove("notshowed")
  line1.classList.add("notshowed")
  line2.classList.add("notshowed")
})
/*section change*/



/*arrow and question*/

first_question.addEventListener("click", function() {
  if (arrow1.classList.contains("up")) {
    arrow1.src="./images/icon-arrow-orange.svg";
    arrow1.classList.add("down")
    arrow1.classList.remove("up")
    answer1.classList.remove("notshowed")
  } else {
    arrow1.src="./images/icon-arrow.svg";
    arrow1.classList.remove("down")
    arrow1.classList.add("up")
    answer1.classList.add("notshowed")
  }
})

second_question.addEventListener("click", function() {
  if (arrow2.classList.contains("up")) {
    arrow2.src="./images/icon-arrow-orange.svg";
    arrow2.classList.add("down")
    arrow2.classList.remove("up")
    answer2.classList.remove("notshowed")
  } else {
    arrow2.src="./images/icon-arrow.svg";
    arrow2.classList.remove("down")
    arrow2.classList.add("up")
    answer2.classList.add("notshowed")
  }
})

third_question.addEventListener("click", function() {
  if (arrow3.classList.contains("up")) {
    arrow3.src="./images/icon-arrow-orange.svg";
    arrow3.classList.add("down")
    arrow3.classList.remove("up")
    answer3.classList.remove("notshowed")
  } else {
    arrow3.src="./images/icon-arrow.svg";
    arrow3.classList.remove("down")
    arrow3.classList.add("up")
    answer3.classList.add("notshowed")
  }
})

fourth_question.addEventListener("click", function() {
  if (arrow4.classList.contains("up")) {
    arrow4.src="./images/icon-arrow-orange.svg";
    arrow4.classList.add("down")
    arrow4.classList.remove("up")
    answer4.classList.remove("notshowed")
  } else {
    arrow4.src="./images/icon-arrow.svg";
    arrow4.classList.remove("down")
    arrow4.classList.add("up")
    answer4.classList.add("notshowed")
  }
})
