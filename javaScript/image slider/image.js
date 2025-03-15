let images = [
    "https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW5zfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1676218968741-8179dd7e533f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW5zfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW5zfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1485160497022-3e09382fb310?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D"
];

let quotes = [
    "The mountains are calling, and I must go.",
    "Adventure awaits beyond the horizon.",
    "Climb mountains not so the world can see you, but so you can see the world.",
    "The best view comes after the hardest climb.",
    "Take only memories, leave only footprints.",
    "Breathe in the wild air."
];

let i = 0;
let img = document.getElementById("displayImage");
let quote=document.getElementById("quoteText")
function changeImg() {
    img.src = images[i];
    quote.textContent = quotes[i];  

    setInterval(() => {
        i = (i + 1) % images.length; 
        img.src = images[i];
        quote.textContent = quotes[i]; 
    }, 2000); 
}

window.onload = changeImg; 
