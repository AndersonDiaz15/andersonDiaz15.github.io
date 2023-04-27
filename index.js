const yesBtn = document.querySelector('#yesBtn');

function yes() {
 

 
    alert("Sabia que dirias que si cara de peluche :)");
    
}

yesBtn.onclick = yes;



const noBtn = document.querySelector('#noBtn');

function no() {
    const randomX = parseInt(Math.random()*90);
    const randomY = parseInt(Math.random()*90);
    noBtn.style.setProperty("top",randomY+"%");
    noBtn.style.setProperty("left",randomX+"%");
    noBtn.style.setProperty("transform","translate(-${randomX}%,-${randomY}%)");
    
}

noBtn.onmouseover = no;
    
