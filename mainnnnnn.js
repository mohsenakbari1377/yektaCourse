let val;

// val= document.all[4];
// val= document.head;
// val=document.body;
// val=document.forms;
// val=document.links;
// val=document.scripts[ 4 ].getAttribute('src');
// val= document.scripts;
// val1 =  Array.from(val);
// va1.forEach(function(script)
// {
//     console.log(script);
// });




//  create element

let li = document.createElement('li');
li.className=" coll  ";
li.id="fff";
li.setAttribute('title', 'this is');
li.textContent="salal";
li.innerHTML='<i class="fas"></i>';
// let ssli=  li.children;
// ssli.innerHTML='<a  href="#">dodo </a>';
// ssli.appendChild(ssli);


let headi=document.createElement('h2');

headi.id="ddd";
let gg=document.querySelector('h2');
gg.textContent="salam";
headi.appendChild(gg)

console.log(headi);