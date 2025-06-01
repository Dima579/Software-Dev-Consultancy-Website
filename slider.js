//Variable declarations

let imgIndex = 0;
let dotIndex = 0;

let imgL = [];
imgL[0] = document.getElementById('sImg0');
imgL[1] = document.getElementById('sImg1');
imgL[2] = document.getElementById('sImg2');

let dotL = [];
dotL[0] = document.getElementById('dot0');
dotL[1] = document.getElementById('dot1');
dotL[2] = document.getElementById('dot2');


document.addEventListener('DOMContentLoaded', () =>
{
    setInterval(nextSlide, 10000);
});


// left and right button code

const prevSlide = () =>
    {
        if (imgIndex === 0)
            {
                clearCurrent();
                imgIndex = 2;
                imgL[imgIndex].classList.remove('slider-child-hidden');
                imgL[imgIndex].classList.add('slider-child');

                dotL[dotIndex].classList.remove('dot-activated');
                dotIndex = 2;
                dotL[dotIndex].classList.add('dot-activated');
            }
            else
            {
                clearCurrent();
                imgIndex --;
                imgL[imgIndex].classList.remove('slider-child-hidden');
                imgL[imgIndex].classList.add('slider-child');
                
                dotL[dotIndex].classList.remove('dot-activated');
                dotIndex --;
                dotL[dotIndex].classList.add('dot-activated');
            }
    }

const nextSlide = () =>
    {
        if (imgIndex === 2)
        {
            clearCurrent();
            imgIndex = 0;
            imgL[imgIndex].classList.remove('slider-child-hidden');
            imgL[imgIndex].classList.add('slider-child');

            dotL[dotIndex].classList.remove('dot-activated');
            dotIndex = 0;
            dotL[dotIndex].classList.add('dot-activated');
        }
        else
        {
            clearCurrent();
            imgIndex ++;
            imgL[imgIndex].classList.remove('slider-child-hidden');
            imgL[imgIndex].classList.add('slider-child');

            dotL[dotIndex].classList.remove('dot-activated');
            dotIndex ++;
            dotL[dotIndex].classList.add('dot-activated');
        }
        
    }

const clearCurrent = removeCurrentIndex = () =>
{
    imgL[imgIndex].classList.remove('slider-child');
    imgL[imgIndex].classList.add('slider-child-hidden');
}


//dot data

const slideSelect = (dotId) =>
    {
        switch (dotId)
        {
            case 0:
                dotIndex = 0;
                dotL[1].classList.remove('dot-activated');
                dotL[2].classList.remove('dot-activated');
                dotL[0].classList.add('dot-activated');
                
                clearCurrent();
                imgIndex = 0;
                imgL[imgIndex].classList.remove('slider-child-hidden');
                imgL[imgIndex].classList.add('slider-child');
                break;
    
            case 1:
                dotIndex = 1;
                dotL[0].classList.remove('dot-activated');
                dotL[2].classList.remove('dot-activated');
                dotL[1].classList.add('dot-activated');
                
                clearCurrent();
                imgIndex = 1;
                imgL[imgIndex].classList.remove('slider-child-hidden');
                imgL[imgIndex].classList.add('slider-child');
                break;
    
            case 2:
                dotIndex = 2;
                dotL[0].classList.remove('dot-activated');
                dotL[1].classList.remove('dot-activated');
                dotL[2].classList.add('dot-activated');
                

                clearCurrent();
                imgIndex = 2;
                imgL[imgIndex].classList.remove('slider-child-hidden');
                imgL[imgIndex].classList.add('slider-child');
                break;
        }
    }