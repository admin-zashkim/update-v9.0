const snowContainer = document.getElementById("snow-container");

function createSnow() {
    const snow = document.createElement("div");
    snow.className = "snow";

    const size = Math.random() * 6+3;
    snow.style.width = size + "px";
    snow.style.height = size + "px";
    snow.style.left  = Math.random() * window .innerWidth +"px";
    snow.style.background = ["#fff", "#ffd966", "#cfe2f3"] [Math.floor(Math.random()*3)];

    snow.style.animationDuration = Math.random() * 5 + 5 +"s";

    snowContainer.appendChild(snow);

    setTimeout( ()=>{
        snow.remove();
    }, 10000);

}

setInterval(createSnow, 150);



const values =  [
  "1.14", "6.83", "3.91", "1.72", "1.08", "4.33",
  "5.87", "6.44", "2.56", "3.12", "6.91", "1.48", 
  "5.22", "4.90", "6.31", "2.14", "3.78", "1.91", 
  "6.56", "6.73", "3.49", "2.80", "5.75", "6.18", 
  "1.64", "4.42"
];

let index = -1;
let isLoading = false;

function boostSpin() {
  if (isLoading) return; 
  isLoading = true;
  const border = document.getElementById("circleBorder");
  const inner = document.getElementById("circleInner");
  const text = document.getElementById("circleText");

  text.textContent = "Loading...";
  border.style.animation = "spin 0.5s linear infinite";
  inner.style.animation = "spinReverse 0.5s linear infinite";

  setTimeout(() => {
    index = (index + 1) % values.length;
    text.textContent = values[index] + `X`;
    border.style.animation = "spin 5s linear infinite";
    inner.style.animation = "spinReverse 8s linear infinite";
    isLoading = false;
  }, 1000);
}



// RESTORE DATA FROM LOCALSTORAGE
window.addEventListener("load", () => {
    const savedName = localStorage.getItem("userName");
    const savedImg = localStorage.getItem("userImg");

    const nameDisplay = document.getElementById("displayUserName");
    const imgDisplay = document.getElementById("preview");
    const placeholder = document.getElementById("placeholder");

    if (savedName) {
        nameDisplay.value = savedName;
    }
    if (savedImg) {
        imgDisplay.src = savedImg;
        imgDisplay.style.display = "block";
        if(placeholder) placeholder.style.display = "none";
    }
});

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    document.getElementById("timeButton").textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}
setInterval(updateTime, 1000);
updateTime();

function toggleRules() {
  const popup = document.getElementById("rulesPopup");
  popup.style.display = (popup.style.display === "flex") ? "none" : "flex";
}

function toggleAccount() {
  const popup = document.getElementById("accountPopup");
  popup.style.display = (popup.style.display === "flex") ? "none" : "flex";
}

window.addEventListener("load", () => {
    const savedName = localStorage.getItem("userName");
    const savedImg = localStorage.getItem("userImg");

    const nameDisplay = document.getElementById("displayUserName");
    const imgDisplay = document.getElementById("preview");
    const placeholder = document.getElementById("placeholder");

    if (savedName) {
        nameDisplay.value = savedName;
    }
    
    if (savedImg) {
        imgDisplay.src = savedImg;
        // FORCE the style here just in case CSS is being overridden
        imgDisplay.style.display = "block";
        imgDisplay.style.width = "100%";
        imgDisplay.style.height = "100%";
        imgDisplay.style.objectFit = "cover"; 
        
        if(placeholder) placeholder.style.display = "none";

    }

    
});
