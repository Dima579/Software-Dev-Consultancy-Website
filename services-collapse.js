//unique hash loader
window.addEventListener("DOMContentLoaded", () => 
  {
  const hash = window.location.hash;
  if (hash) 
    {
    const section = document.querySelector(hash);
    if (section) 
      {
      section.classList.remove("hidden");
      }
    }
  });


//Collapsable Sections Function
function collapseSec(button) 
{
    const index = button.getAttribute('data-target');
    const allCollapsibles = document.querySelectorAll('.scMainC');
    const icon = button.querySelector('.collapse-icon');
    
    if (allCollapsibles[index].classList.contains('hidden')) 
        {
        allCollapsibles[index].classList.remove('hidden');
        icon.classList.remove('fa-angle-up');
        icon.classList.add('fa-angle-down');
    } 

    else 
    {
        allCollapsibles[index].classList.add('hidden');
        icon.classList.remove('fa-angle-down');
        icon.classList.add('fa-angle-up');
    }
}