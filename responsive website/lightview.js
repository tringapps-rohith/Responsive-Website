const galleryItem=document.getElementsByClassName("gallery-item");
const lightBox=document.createElement("div");
const lightBoxContent=document.createElement("div");
const lightBoxImg=document.createElement("img");
const lightBoxClose=document.createElement("div");
lightBox.classList.add('lightbox');
lightBoxContent.classList.add('lightbox-content');
lightBoxClose.classList.add("fa","fa-window-close","lightbox-close");
lightBox.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxClose);
document.body.appendChild(lightBox);
let index;
function currentImage(){
  lightBox.style.display="block";
  let imageIndex=parseInt(this.getAttribute("data-index"));
  index=imageIndex;  
let imageLocation=galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src",imageLocation);
}
for(let value of galleryItem)
{
    value.addEventListener("click",currentImage);
}
function closeImage(event){
    if(this==event.target){
        lightBox.style.display="none"
    }
}
lightBoxClose.addEventListener("click",closeImage);

