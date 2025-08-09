
document.addEventListener('DOMContentLoaded', function(){
  // Smooth active nav highlight (simple)
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(a => a.addEventListener('click', ()=> {
    // nothing for now, native smooth scroll enabled
  }));
});
