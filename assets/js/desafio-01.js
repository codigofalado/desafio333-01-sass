function startSlideShow(){document.body&&imageCount>0&&(document.getElementById("img-noticia").src=""+images[currentImage],AOS.init(),currentImage+=1,currentImage>imageCount-1&&(currentImage=0),setTimeout("startSlideShow()",1e4))}!function(){function e(){const e=new Date,i=e.getHours(),t=e.getMinutes();return i<10?h="0"+i:h=""+i,t<10?m=":0"+t:m=":"+t,h+m}function i(){relogio=document.getElementById("relogio"),relogio.innerHTML=e()}window.addEventListener("load",i)}();var imageCount=0,currentImage=0,images=new Array;images[0]="assets/img/noti-01.jpg",images[1]="assets/img/noti-02.jpg",images[2]="assets/img/noti-03.jpg";for(var preLoadImages=new Array,i=0;i<images.length&&""!=images[i];i++)preLoadImages[i]=new Image,preLoadImages[i].src=images[i],imageCount++;startSlideShow(),AOS.init();