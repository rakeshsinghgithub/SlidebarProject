 const home=document.getElementById("home");
 const sidebar=document.getElementById("s");
 home.addEventListener("click",()=>{
   
    sidebar.style.transform="translateX(0) ";

 });
 document.addEventListener("mouseover",(e)=>{
if(!sidebar.contains(e.target)){
    sidebar.style.transform="translateX(-100%) ";
}
 });