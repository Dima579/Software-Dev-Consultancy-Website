//Hamburger menu
function toggleMenu()
    {
        const navlist = document.getElementById("navlist");
        navlist.classList.toggle("active");
    }

//Scroll animation for section titles
const observerSt = new IntersectionObserver((entries) => 
    {
        entries.forEach((entry) => 
            {    
                console.log(entry)
                if (entry.isIntersecting) 
                    {
                        entry.target.classList.add("show-st");
                    }
            });
    });

const hiddenStElements = document.querySelectorAll(".hidden-st");
hiddenStElements.forEach((el) => observerSt.observe(el));


//Scroll animation for main content

const observerMc = new IntersectionObserver((entries) => 
    {
        entries.forEach((entry) => 
            {    
                console.log(entry)
                if (entry.isIntersecting) 
                    {
                        entry.target.classList.add("show-mc");
                    }
            });
    });

const hiddenMcElements = document.querySelectorAll(".hidden-mc");
hiddenMcElements.forEach((el) => observerMc.observe(el));