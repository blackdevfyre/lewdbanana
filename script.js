var mylinks =document.getElementById("mylinks");
var main=document.getElementById("main");
var about =document.getElementById("Me");
var Melbl =document.getElementById("melbl");
var workslbl =document.getElementById("workslbl");
var contactlbl =document.getElementById("contactlbl");
var varworks =document.getElementById("Works");
var varcontact=document.getElementById("Contact")
function windowSize(){
    if (window.innerWidth<750){
        mylinks.style.display="none";
    }else{
        mylinks.style.display ="inline-block";
    }
}
windowSize();
hideworks();
hidecontact();

function hamburgerfunc(x){
    x.classList.toggle("change")
    if (mylinks.style.display =="inline-block"){
        mylinks.style.display ="none";;
    }else{
        mylinks.style.display ="inline-block";
    }
}
function hidetitle(){
    main.style.display="none";
}
function hideabout(){
    about.style.display="none";
}
function hidetitle(){
    main.style.display="none";
}
function hidetitle(){
    main.style.display="none";
}
function hideworks(){
    varworks.style.display="none";
}
function hidecontact(){
    varcontact.style.display="none"
}
function me(){
    hideworks();
    hidecontact();
    hidetitle();
    about.style.display="block";
    Melbl.classList.toggle("active");
    
}
function works(){
    hideabout();
    hidecontact();
    hidetitle();
    varworks.style.display="block";
    workslbl.classList.toggle("active")
}
function contact(){
    hideworks();
    hideabout();
    hidetitle();
    varcontact.style.display="block";
    contactlbl.classList.toggle("active")
}