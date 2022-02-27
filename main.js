'use strict';
const collapse=document.querySelectorAll('.collapse');
collapse.forEach((item)=>
item.addEventListener("click",function(){
    this.classList.toggle("collapse--expanded");
}))