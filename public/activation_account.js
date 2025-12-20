const buyDiv = document.getElementById("buyDiv");
const groupDiv = document.getElementById("groupDiv");
const adminDiv = document.getElementById("adminDiv");
const accountPopup = document.getElementById("accountPopup");
const activateBtn = document.getElementById("activateBtn");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const imageInput = document.getElementById("image");
const errorP = document.getElementById("errorP");
const activation = document.querySelector(".activation");
const loaderContainer = document.getElementById("loaderContainer");
const displayName = document.getElementById("displayName");
const displayImage = document.getElementById("displayImage");
const closePopAccount = document.getElementById("closePopAccount");
const loadingxxx = document.getElementById("loadingxxx");
const logoMainImg = document.getElementById("logoMainImg");
const showPackage = document.getElementById("showPackage");
 const vaultBox =document.getElementById("vaultBox")

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidName(name) {
    const nameRegex = /^[a-zA-Z]+\s+[a-zA-Z]+/;
    return nameRegex.test(name.trim());
}

function checkValidation() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    errorP.innerText = "";
    activateBtn.style.backgroundColor = "";
    activateBtn.style.color = "";

    if (nameValue === "" || emailValue === "") {
        errorP.innerText = "Fields cannot be empty";
        return false;
    } 
    if (!isValidName(nameValue)) {
        errorP.innerText = "Please enter your full name (First and Last)";
        return false;
    } 
    if (!isValidEmail(emailValue)) {
        errorP.innerText = "Please enter a valid email address";
        return false;
    }
    if (imageInput.files.length === 0) {
        errorP.innerText = "Please select a profile image";
        return false;
    }
    activateBtn.style.backgroundColor = "red";
    activateBtn.style.color = "white";
    return true;
}

nameInput.addEventListener("input", checkValidation);
emailInput.addEventListener("input", checkValidation);
imageInput.addEventListener("change", checkValidation);

activateBtn.addEventListener("click", () => {
    if (checkValidation()) {
        displayName.value = nameInput.value;
        if (imageInput.files && imageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                displayImage.src = e.target.result;
                // SAVE FOR NEXT PAGE
                localStorage.setItem("userImg", e.target.result);
                localStorage.setItem("userName", nameInput.value);
            };
            reader.readAsDataURL(imageInput.files[0]);
        }
        activation.style.display = "none";
        loaderContainer.style.display = `inline-flex`;
        logoMainImg.style.display =`block`;
        setTimeout(() => {
            accountPopup.style.display = "flex";
            loaderContainer.style.display = `none`;
        }, 7000);
    } else {
        errorP.style.color = "white";
        errorP.style.backgroundColor = "black";
    }
});

closePopAccount.addEventListener("click", () => {
    accountPopup.style.display = "none";
    loaderContainer.style.display = `flex`;
    loadingxxx.textContent = `Registering Account for ${displayName.value} `;
    activation.style.display = "none";
    setTimeout(() => {
        const xxxx = document.getElementsByClassName("xxxx");
        xxxx.textContent = `${displayName.value} Helo`;
        vaultBox.style.display = `block`;
        groupDiv.style.display = `block`;
        adminDiv.style.display = `block`;
        logoMainImg.style.top =`14%`;
        logoMainImg.style.height =`100px`;
         logoMainImg.style.width =`100px`;
        buyDiv.style.display = `block`;
        loadingxxx.textContent = ``;
        loaderContainer.style.display = `none`;
    }, 4000);
});

const entryField = document.getElementById("passEntry");
const actionBtn = document.getElementById("verifyAction");
const noticeDisplay = document.getElementById("alertNotice");
actionBtn.addEventListener("click", () => {
    const userValue = entryField.value.trim(); // Trim here to simplify the IF check
    
    // UI State: Loading
    actionBtn.disabled = true; 
    actionBtn.innerHTML = '<div class="btn-spinner"></div> Verifying...';
    noticeDisplay.innerText = "Connecting to server...";
    noticeDisplay.style.color = "yellow";
    noticeDisplay.style.backgroundColor = "transparent"; // Reset background if it was red before

    
            setTimeout( ()=>{
                // UI State: Error
            noticeDisplay.style.color = "white"; 
            noticeDisplay.style.backgroundColor = "red";
            entryField.value = ""; 
            entryField.focus(); // Put cursor back in field for the user
            noticeDisplay.innerText = "WRONG CODE - TRY AGAIN";
            actionBtn.innerText = "Verify Account";
            }, 4000)

              actionBtn.disabled = false; 
        
});


const redirectVaultBox = document.getElementById("redirectVaultBox");

redirectVaultBox.addEventListener("click", ()=>{

    logoMainImg.style.display =`flex`;

    activation.style.display =`none`;
    loaderContainer.style.display =`inline-flex`;
    loadingxxx.textContent =`Redirecting to Enter Activation code`;
    setTimeout( ()=>{
         /////////////////////////////////////////////////////////////////////////////////
        vaultBox.style.display =`block`;
        logoMainImg.style.height =`100px`;
        logoMainImg.style.width =`100px`;
        loaderContainer.style.display =`none`;
        loadingxxx.textContent =``;
        buyDiv.style.display = `block`;
        adminDiv.style.display = `block`;
        groupDiv.style.display = `block`;
    }, 4000)
})
 
 const cancleBtnMain =document.getElementById("cancleBtnMain");

buyDiv.addEventListener("click", ()=>{
   
     loaderContainer.style.display =`inline-flex`;
    loadingxxx.textContent =`Loading Prices please wait...`;
     vaultBox.style.display =`none`;
         buyDiv.style.display = `none`;
        adminDiv.style.display = `none`;
         groupDiv.style.display = `none`;
        setTimeout( ()=>{

            showPackage.style.display = `block`;
            cancleBtnMain.style.display = `block`;
             loaderContainer.style.display =`none`;
            loadingxxx.textContent =`none`;
             logoMainImg.style.height =`60px`;
            logoMainImg.style.width =`60px`;

           
            
        }, 3000)

});



cancleBtnMain.addEventListener("click", ()=>{
     showPackage.style.display = `none`;
     vaultBox.style.display =`block`;
         cancleBtnMain.style.display = `none`;
          buyDiv.style.display = `block`;
        adminDiv.style.display = `block`;
        groupDiv.style.display = `block`;
})

adminDiv.addEventListener("click", ()=>{
    window.open(`https://wa.me/254796182560`, '_blank');
})

groupDiv.addEventListener("click", ()=> {
    window.open(`https://chat.whatsapp.com/ICuHNh1Oi6PBeCq5KhiNMu`, '_blank');
})

