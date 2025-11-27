document.addEventListener('DOMContentLoaded', () => {
const greeting = document.getElementById('greeting');
if(greeting){
const hour = new Date().getHours();
greeting.textContent = hour < 12 ? 'Good morning!' : hour < 18 ? 'Good afternoon!' : 'Good evening!';
}


const form = document.getElementById('contactForm');
if(form){
form.addEventListener('submit', e => {
e.preventDefault();
document.getElementById('formMsg').textContent = 'Message sent! (demo)';
});
}
});