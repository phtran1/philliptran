const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const container = document.querySelector("#container");
const a = document.querySelectorAll('a');
const floatleft = document.querySelector("float_left");
// const footer = document.querySelector("#footer");
// const footicon = document.getElementById("footicon");

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')) {
        // body.style.background = 'rgb(74, 118, 148)';
        // body.style.color = 'black';
        // body.style.transition = '1s';
        // container.style.background = 'rgb(74, 118, 148)';
        container.style.background = 'white';
        container.style.color = 'black';
        a[0].style.color = 'black';
        a[1].style.color = 'black';
        a[2].style.color = 'black';

        footer.style.background = 'rgb(15, 15, 15)';
        // footicon.style.color = 'white';

    } else {
        // body.style.background = 'black';
        // body.style.color = 'white';
        // body.style.transition = '1s';
        container.style.background = 'rgb(15, 15, 15)';
        container.style.color = 'white';
        a[0].style.color = 'white';
        a[1].style.color = 'white';
        a[2].style.color = 'white';

        footer.style.background = 'slategrey';
        // footicon.style.color = 'black';
    }
})