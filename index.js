let screen = document.getElementById("screen");
btn = document.querySelectorAll("button");
let screenValue = '';
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == 'X') {
            btntext = '*';
            screenValue += btntext;
            screen.value=screenValue;
        }

        else if(btntext == 'C'){

            screenValue = "";
            screen.value=screenValue;
        }
else if(btntext== '='){
    screen.value=eval(screenValue);
}

else if(btntext == "del"){
    var a = screenValue.length - 1;
    screenValue = screenValue.slice(0,a);
    screen.value = screenValue;
}
else{   
    
    screenValue += btntext;
    screen.value=screenValue;
    

}

    })

}

