

/* let form=document.getElementById('student-form');
form.addEventListner('submit',function(evnt){
    event.preventDefault();

    let nameEl =form.elements['fullName'];
    let emailEl =form.elements['email'];

    if(nameEl.value && emailEl.value){
        console.log('full name:' +nameEl.value);
        console.log('Email:' +emailEl.value);
        form.requestFullscreen();
    }
    
}); */



/* let value= document.getElementById('heading');
console.log(value); */

/* let headingEl =document.getElementById('heading');
let btnEl =document.querySelector('button');

btnEl.addEventListener('click',function(){
    headingEl.textContent='new content';
}); */

/*let divEl= document.getElementsByTagName('div')[0];

function show(){
    console .log(divEl);

}  */



let devEl =document.getElementById('my-div');

        devEl.addEventListener('mouseover',()=>{
            divEl.style.backgroundcolor='blue';
        });

        devEl.addEventListener('mouseout',()=>{
            divEl.style.backgroundcolor='red';
        });