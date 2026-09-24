
const txt='Rohit Khed';
let i=0;
function type(){
 if(i<txt.length){document.getElementById('typing').innerHTML+=txt.charAt(i);i++;setTimeout(type,120);}
}
type();
