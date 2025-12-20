
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
    text.textContent = "Activate A/C";

    border.style.animation = "spin 5s linear infinite";
    inner.style.animation = "spinReverse 8s linear infinite";

    
    document.getElementById("popDiv").style.display = "flex";

    isLoading = false; 
  }, 5000);
}



                function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; 

    document.getElementById("timeButton").textContent =
      `${hours}:${minutes}:${seconds} ${ampm}`;
  }

  updateTime();
  
  
  setInterval(updateTime, 1000);


function toggleRules() {
  const popup = document.getElementById("rulesPopup");
  popup.style.display = (popup.style.display === "flex") ? "none" : "flex";
}

function toggleAccount() {
  const popup = document.getElementById("accountPopup");
  popup.style.display = (popup.style.display === "flex") ? "none" : "flex";
}

function changeProfile(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("profileImg").src = e.target.result;


      document.getElementById("fileInput").style.display = "none";
    }
    reader.readAsDataURL(file);
  }
}
              


let visible = false;
function toggleToken() {
  const token = document.getElementById("token");
  visible = !visible;
  token.style.filter = visible ? "blur(0)" : "blur(6px)";
}

