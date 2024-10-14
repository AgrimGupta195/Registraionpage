document.getElementById("check").addEventListener("change", function() {
    const passField = document.getElementById("password");
    if (this.checked) {
      passField.type = "text";
    } else {
      passField.type = "password";
    }
  });
//   let list =["!","@","#","$","%","^","&","*"];
var pass = document.getElementById("password");
var str = document.getElementById("strength");
pass.addEventListener("input", () => {
if (pass.value.length > 0) {
    str.style.display = "block";
  } else {
    str.style.display = "none";
  }
  let hasDigit = false;
  let hasAlpha = false;
  let hasSymbol = false;
  for (let i = 0; i < pass.value.length; i++) {
    const char = pass.value[i];
    if (isDigit(char)) {
      hasDigit = true;
    }
    if (isAlpha(char)) {
      hasAlpha = true;
    }
    if (isSymbol(char)) {
      hasSymbol = true;
    }
  }
  if (hasSymbol) {
    str.style.color = "darkgreen";
    str.innerHTML = "Password is Hard";
    pass.style.border="2px solid darkgreen"
    str.style.transform = "translateX(-112px)";
  } else if (hasAlpha && hasDigit) {
    str.style.color = "#fcba03";
    pass.style.border="2px solid #fcba03";
    str.innerHTML = "Password is Medium";
    str.style.transform = "translateX(-105px)";

  } else if (hasAlpha) {
    str.style.color = "#fc0335";
    pass.style.border="2px solid #fc0335";
    str.innerHTML = "Password is Easy";
    str.style.transform = "translateX(-115px)";
  }else if(pass.value.length==0){
    pass.style.border = "";
  } 
  else {
    str.style.color = "#fc0335";
    str.innerHTML = "Password is Weak";
  }
  
});
function isAlpha(char) {
  return char.toLowerCase() !== char.toUpperCase();
}
function isDigit(char) {
  return !isNaN(char) && char !== ' ';
}
function isSymbol(char) {
  const isDigit = !isNaN(char) && char !== ' ';
  const isAlpha = char.toLowerCase() !== char.toUpperCase();
  return !isDigit && !isAlpha && char !== ' ';
}
const starop = document.querySelectorAll(".star");

starop.forEach(op => {
    var stars =op.querySelectorAll('i');
    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        changecolor(stars, index);
      });
    });
});

function changecolor(stars, index) {
    for (let i = 0; i <= index; i++) {
      stars[i].style.color = "gold";
    }
    for (let i = index + 1; i < stars.length; i++) {
      stars[i].style.color = "#747474";
    }
}

