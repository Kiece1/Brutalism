console.log("Debut Programme");

// for (let index = 1; index <= idCardRect.length; index++) {
//   document.write(
//     `<div
//       id="idCardRect${index}"
//       class="cardRect colCenter"
//       onmousedown="clickCardTest[${index}] = true"
//       onmouseup="clickCardTest[${index}] = false"
//     >
//       <h2 id="idH2${index}"></h2>
//       <a id="idLink${index}" href="#" target="_blank">
//         <button>Click Me!</button>
//       </a>
//     </div>;`
//   );
// }

let pageX = document.getElementById("posX");
let pageY = document.getElementById("posY");
let w = window.innerWidth;
let h = window.innerHeight;
let bgColor = document.querySelector("body");
let card = document.querySelector(".card");
let cardH2 = document.querySelector(".card h2");
let idCardIcon = document.getElementById("idCardIcon1");

let NcardRect = 5;
let idCardRect = [];
let idCardRectH2 = [];
let idLink = [];

for (let index = 0; index <= NcardRect; index++) {
  idCardRect[index] = document.getElementById(`idCardRect${index + 1}`);
}

for (let index = 0; index <= idCardRect.length; index++) {
  idCardRectH2[index] = document.querySelector(`.cardRect #idH2${index + 1}`);
  idLink[index] = document.getElementById(`idLink${index + 1}`);
}

let cardRectBtn = document.querySelector(".cardRect button");
let cardWidth = card.offsetWidth;
let cardHeight = card.offsetHeight;
let cardRectWidth = [];
let cardRectHeight = [];

idCardRect.forEach((item) => {
  cardRectWidth = item.offsetWidth;
  cardRectHeight = item.offsetHeight;
  item.style.top = `${(h - cardRectHeight) / 2}px`;
  item.style.left = `${(w - cardRectWidth) / 2}px`;
});

idCardIcon.style.top = `${cardHeight / 2}px`;
idCardIcon.style.left = `${cardWidth / 2}px`;
card.style.top = `${(h - cardHeight) / 2}px`;
card.style.left = `${(w - cardWidth) / 2}px`;
cardH2.style.top = `${cardHeight / 2}px`;
cardH2.style.left = `${cardWidth / 2}px`;

iconColor = [`#0e76a8`, `#39569c`, `#00acee`, `#3f729b`, `#b2071d`, `#ee1d52`];
titleList = [
  "LinkedIn",
  "Facebook",
  "Twitter",
  "Instagram",
  "Youtube",
  "TikTok",
];
iconList = [
  `<i class="fa-brands fa-linkedin" style="color:${iconColor[0]}"></i>`,
  `<i class="fa-brands fa-facebook" style="color:${iconColor[1]}"></i>`,
  `<i class="fa-brands fa-twitter" style="color:${iconColor[2]}"></i>`,
  `<i class="fa-brands fa-instagram" style="color:${iconColor[3]}"></i>`,
  `<i class="fa-brands fa-youtube" style="color:${iconColor[4]}"></i>`,
  `<i class="fa-brands fa-tiktok" style="color:${iconColor[5]}"></i>`,
];
adressList = [
  `https://www.linkedin.com/`,
  `https://fr-fr.facebook.com/`,
  `https://twitter.com/`,
  `https://www.instagram.com/`,
  `https://www.youtube.com/`,
  `https://www.tiktok.com/fr/`,
];

// -------------------------------------------------
// fonction 1 - Rotation de l'icone flêche
// -------------------------------------------------

function conditions1(event) {
  let positionX = w / 2 - event.pageX;
  let positionY = h / 2 - event.pageY;
  let theta = -(180 / Math.PI) * Math.atan(positionX / positionY);

  if (event.pageY <= h / 2) {
    idCardIcon1.style.transform = `rotateZ(${theta}deg)`;
  } else {
    idCardIcon1.style.transform = `rotateZ(${180 + theta}deg)`;
  }
}

// -----------------------------------------------------------
// fonction 2 - Changement de Nom et adresse internet
// -----------------------------------------------------------

let clickCardTest = [];
let a = 1;

function conditions2(event) {
  for (let index = 0; index < idCardRect.length; index++) {
    if (clickCardTest[index] == true) {
      idCardRect[index].style.top = `${event.pageY - (a / 2) * cardWidth}px`;
      idCardRect[index].style.left = `${event.pageX - (a / 2) * cardHeight}px`;

      if (event.pageY <= h / 2) {
        if (event.pageX <= (1 / 3) * w) {
          cardH2.innerHTML = titleList[0];
          idCardRectH2[index].innerHTML = iconList[0] + titleList[0];
          cardRectBtn.style.background = bgColor.style.background;
          idLink[index].href = adressList[0];
        } else if (event.pageX < (2 / 3) * w) {
          cardH2.innerHTML = titleList[1];
          idCardRectH2[index].innerHTML = iconList[1] + titleList[1];
          cardRectBtn.style.background = bgColor.style.background;
          idLink[index].href = adressList[1];
        } else {
          cardH2.innerHTML = titleList[2];
          idCardRectH2[index].innerHTML = iconList[2] + titleList[2];
          cardRectBtn.style.background = bgColor.style.background;
          idLink[index].href = adressList[2];
        }
      } else {
        if (event.pageX <= (1 / 3) * w) {
          cardH2.innerHTML = titleList[3];
          idCardRectH2[index].innerHTML = iconList[3] + titleList[3];
          cardRectBtn.style.background = bgColor.style.background;
          idLink[index].href = adressList[3];
        } else if (event.pageX <= (2 / 3) * w) {
          cardH2.innerHTML = titleList[4];
          idCardRectH2[index].innerHTML = iconList[4] + titleList[4];
          cardRectBtn.style.background = bgColor.style.background;
          idLink[index].href = adressList[4];
        } else {
          cardH2.innerHTML = titleList[5];
          idCardRectH2[index].innerHTML = iconList[5] + titleList[5];
          cardRectBtn.style.background = bgColor.style.background;
          idLink[index].href = adressList[5];
        }
      }
    }
  }
}

function posMouse(event) {
  conditions1(event);
}

function grabCard(event) {
  conditions2(event);
}

window.addEventListener("mousemove", posMouse);
window.addEventListener("mousemove", grabCard);
