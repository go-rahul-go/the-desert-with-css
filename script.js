let body=document.querySelector("body");
let moonSun=document.querySelector(".moon-sun");
let crators = document.querySelectorAll(".crator");
let stars=document.querySelector(".stars")
let sand=document.querySelector(".sand")
let sanddunes=document.querySelectorAll(".sand div")
let date=new Date();


let hour = date.getHours();




if(hour>=16 || hour<=24)
{
    body.style.backgroundColor="#0A1247";
    moonSun.style.backgroundColor="#E8EBF7"
    moonSun.style.boxShadow="0px 0px 20vh #E8EBF7"
    stars.style.display="block"
    stars.style.color="#FBFBFF"
    crators.forEach((item)=>{
        item.style.visibility="visible"
    })
    sand.style.backgroundColor="#785B2B"
    sanddunes.forEach((dunes)=>{
        dunes.style.borderBottom="100px solid #785B2B";
    })
}