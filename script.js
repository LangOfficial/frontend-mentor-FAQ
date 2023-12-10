const mainContainer = document.getElementById("main-container");

let answerSwitch1 = false;
let answerSwitch2 = false;
let answerSwitch3 = false;
let answerSwitch4 = false;
let openedNum = 0;

function openAnswer(answerText, num) {
  document.getElementById('plus-icon-' + num).src = "assets/images/icon-minus.svg";
  const ansPara = document.createElement("p");
  ansPara.innerText = answerText;
  ansPara.classList = "answer";
  document.getElementById('answer-' + num).appendChild(ansPara);
  openedNum++;
  stretchContainer(openedNum);
}

function closeAnswer(num) {
  document.getElementById('plus-icon-' + num).src = "assets/images/icon-plus.svg";
  
  document.getElementById('answer-' + num).innerHTML = "";
  compressContainer();
}

function stretchContainer(openedNum) {
  console.log(mainContainer.clientHeight);
  let containerHeight = 60 + 20 * openedNum;
  mainContainer.style.height = containerHeight + 'svh';
}

function compressContainer() {
  if (openedNum !== 0 ) {
    openedNum--;
  }
  let currHeight = Number(String(mainContainer.style.height).slice(0, -3));
  let containerHeight = currHeight - 20;
  console.log(containerHeight);
  mainContainer.style.height = containerHeight + 'svh';
  
}



document.getElementById('plus-icon-1').addEventListener('click', () => {
  if (!answerSwitch1) {
    openAnswer("Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.", 1);
    answerSwitch1 = true;
  }

  else {
    closeAnswer(1);
    answerSwitch1 = false;
  }
})

document.getElementById('plus-icon-2').addEventListener('click', () => {
  if (!answerSwitch2) {
    openAnswer("Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.", 2);
    answerSwitch2 = true;
  }

  else {
    closeAnswer(2);
    answerSwitch2 = false;
  }
})


document.getElementById('plus-icon-3').addEventListener('click', () => {
  if (!answerSwitch3) {
    openAnswer("Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!", 3);
    answerSwitch3 = true;
  }

  else {
    closeAnswer(3);
    answerSwitch3 = false;
  }
})

document.getElementById('plus-icon-4').addEventListener('click', () => {
  if (!answerSwitch4) {
    openAnswer("The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.", 4);
    answerSwitch4 = true;
  }

  else {
    closeAnswer(4);
    answerSwitch4 = false;
  }
})

function changeBgImg() {
  if (document.body.clientWidth >= 1440) {
    document.getElementById("background-image").src = "assets/images/background-pattern-desktop.svg";
  }
}

window.addEventListener('resize', changeBgImg);



