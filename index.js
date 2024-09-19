const myPhotos=["images/Bookish.jpg", "images/Mohin.jpg", "images/Pluviophile.jpg"];
let imgTag= document.querySelector("img");
let count =0;

function myNext(){
    count++;
    if(count>=myPhotos.length){
        count=0;
        imgTag.src=myPhotos[count];
    }else{
        imgTag.src=myPhotos[count];
    }
}

function myPrev(){
    count--;
    if(count<0){
        count=myPhotos.length-1;
        imgTag.src=myPhotos[count];
    }else{
        imgTag.src=myPhotos[count];
    }
}
