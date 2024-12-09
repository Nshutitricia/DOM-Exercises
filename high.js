
const paragraph = document.getElementById('name');
function highlighted(){
    
const words = paragraph.textContent.split(' ');  
const update = words.map(word =>  word.length > 8 ? `<span class="highlight" style = "background-color: yellow;">${word}</span>` : word
).join(' ');  
console.log(update)
return paragraph.innerHTML = update;  

}

highlighted();


