const toggle = document.getElementById('check');
const body = document.querySelector('body');
const container = document.querySelector("#container");
const a = document.querySelectorAll('a');
const floatleft = document.querySelector("float_left");


// const footer = document.querySelector("#footer");
// const footicon = document.getElementById("footicon");

// if (localStorage.getItem('darkMode')===null){
//     localStorage.setItem('darkMode', "false");
// }

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')) {
        container.style.background = 'white';
        container.style.color = 'black';
        a[0].style.color = 'black';
        a[1].style.color = 'black';
        a[2].style.color = 'black';

        footer.style.background = 'rgb(15, 15, 15)';

    } else {
        container.style.background = 'rgb(15, 15, 15)';
        container.style.color = 'white';
        a[0].style.color = 'white';
        a[1].style.color = 'white';
        a[2].style.color = 'white';

        footer.style.background = 'slategrey';

    }
})

// const link = document.createElement('link');
// link.rel = 'stylesheet';
// document.getElementsByTagName('HEAD')[0].appendChild(link);

// //Or we can create the tag in the HTML and later reference in our code
// //const link=document.getElementsByTagName("link");  

// //checkStatus is only called one time in the program, when you reload the page
// //It gives the page it's default look, depening on waht darkMode is set to it will load one css or another
// checkStatus()

// function checkStatus(){
//     if (localStorage.getItem('darkMode')==="true"){
//         check.checked = true;                           //the checkbox is checked (if you load the page by default it isn’t)
//         link.href = './css/dark.css';                   //since it's true we load the dark theme CSS
//     }else{
//         this.classList.toggle('bi-brightness-high-fill')
//         check.checked = false;                          //the checkbox is unchecked
//         link.href = '';
//     }
// }

// function changeStatus(){                                //This function gets called every time the checkbox is clicked
//     if (localStorage.getItem('darkMode')==="true"){     //if darkMode was active and this function is called it means the user now wants light
//         localStorage.setItem('darkMode', "false");      //so we set it to false, to indicate we are in light mode
//         link.href = '';
//     } else{
//         localStorage.setItem('darkMode', "true");       //same code but adapted for dark theme
//         link.href = './css/dark.css';
//     }
// }