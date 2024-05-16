const passwordBox = document.getElementById('Password');
const lenght = 12;
const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const sympol = "@#$!*"
const allpassword = Uppercase + lowercase + number + sympol ;

function createAPassword () {
    let password = ' ' ;

    password += Uppercase [Math.floor(Math.random() * Uppercase.length) ];
    password += Uppercase [Math.floor(Math.random() * Uppercase.length) ];
    password += number [Math.floor(Math.random() * number.length) ];
    password += sympol [Math.floor(Math.random() * sympol.length) ];

    while(lenght > password.length){
        password += allpassword [Math.floor(Math.random() * allpassword.length) ];
    }



    passwordBox.value = password ;
}

function copypassword(){
    passwordBox.select();
    document.execCommand("copy");
    alert (" The Password Is Copied ")
}