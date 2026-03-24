function showSection(id){
document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
document.getElementById(id).classList.add('active');
}

function addCommission(gridId){
let title = prompt("Title");
let artist = prompt("Artist");
let price = prompt("Price");
let image = prompt("Image URL") || "https://picsum.photos/300";

let card = `
<div class="commission-card">
<img src="${image}">
<h3>${title}</h3>
<p>${artist}</p>
<p>$${price}</p>
</div>';

document.getElementById(gridId).innerHTML += card;
}