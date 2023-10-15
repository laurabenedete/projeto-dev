const myImage = document.querySelector("img");

myImage.onclick = () => {
   const mySrc = myImage.getAttribute ("src");
    if(mySrc === "images/logo-preto.PNG") {
        myImage.setAttribute("src", "images/logo-preto2.PNG");
    }else{
        myImage.setAttribute("src", "images/logo-preto.PNG");
    };
};



//mensagem de boas vindas personalizada
let myButton = document.querySelector("button");
let myHeading = document.querySelector ("h1");

function setUserName(){
    let myName = prompt("Por favor, digite seu nome:")
    localStorage.setItem("name", myName);
    myHeading.textContent = `Você vai ser conquistado pelo mundo urbano, ${myName}`;
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = `Você vai ser conquistado pelo mundo urbano, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};