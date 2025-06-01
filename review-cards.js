//Establishing data and variables

let revieweePic = document.getElementById("rCardImg");
let revieweeName = document.getElementById("rCardName");
let revieweeJob = document.getElementById("rCardTitle");
let revieweeReview = document.getElementById("rCardReview");
let stars = document.getElementById("rCardStars");

const reviewCard = document.getElementById("rcardFade");

let starIndex = 0;

class CustomerReviews
{
    constructor (profilePic, name, jobTitle, review, starsNum)
    {
        this.profilePic = profilePic;
        this.name = name;
        this.jobTitle = jobTitle;
        this.review = review;
        this.starsNum = starsNum;
    }
}

customer1 = new CustomerReviews ("images/review-cards/Customer 1.jpg", "Jane Darby", "CEO of Botanicy LTD", "Excellent service! They were quick to respond to my queries and were very communicative throughout.", 4.5);
customer2 = new CustomerReviews ("images/review-cards/Customer 2.jpg", "Lee Ferrel", "Manager at Clix LTD", "Top notch work, project met expectations and was compliant with all legal and accessibility requirements", 5);
customer3 = new CustomerReviews ("images/review-cards/Customer 3.jpg", "Samantha Blaire", "Owner of BCards4U", "fast, friendly and delievered on time, definitely going to contact them again!", 4);
customer4 = new CustomerReviews ("images/review-cards/Customer 4.jpg", "Stewart Herrington", "Managing Director at cape automotive", "Fantastic consultants, they worked in credibly well to meet the requirements of the company, would definitely recommend!", 5);
customer5 = new CustomerReviews ("images/review-cards/Customer 5.jpg", "Katy White", "Owner of Sweet&Savoury Delectables", "As someone who isn't tech Savy SoftSolutions, were fantastic! They were super helpful and patient with me the whole time, would 100% recommend!", 5);

let revList = [];
revList.push(customer1, customer2, customer3, customer4, customer5);

let revIndex = 0;

//Establishing data and variables

//methods

const clearDat = () =>
{
    revieweePic.src="";
    revieweeName.textContent="";
    revieweeJob.textContent="";
    revieweeReview.textContent="";
    stars.innerHTML="";
}

const initializeReviews = () => 
{
    const currentReview = revList[revIndex];
    clearDat();
    revieweePic.src = currentReview.profilePic;
    revieweeName.textContent = currentReview.name;
    revieweeJob.textContent = currentReview.jobTitle;
    revieweeReview.textContent = currentReview.review;
    initializeStars(currentReview.starsNum);

    // Add fade-in class
    reviewCard.classList.remove("rFadeIn");
    void reviewCard.offsetWidth;
    reviewCard.classList.add("rFadeIn");
};

const initializeStars = (starsNum) => 
{
    stars.innerHTML = "";
    
    if (typeof starsNum === "number" && starsNum % 1 !== 0)
    {
        //Half stars
        Math.floor(starsNum);

        for (let i=0.5; i < starsNum; i++)
        {
            const iStar = document.createElement("i");
            iStar.classList.add("fa", "fa-star");
            stars.appendChild(iStar);
        }

        const iHStar = document.createElement("i");
        iHStar.classList.add("fa", "fa-star-half");
        stars.appendChild(iHStar);

    }
    else
    {
        //Full stars
        for (let i=0; i < starsNum; i++)
        {
            const iStar = document.createElement("i");
            iStar.classList.add("fa", "fa-star");
            stars.appendChild(iStar);
        }
    }

}

//Next and prev

const rcNext = () =>
{
    if(revIndex === 4)
    {
        clearDat();
        revIndex = 0;
        initializeReviews();
    }
    else
    {
        clearDat();
        revIndex ++;
        initializeReviews();
    }
}

const rcPrev = () =>
{
    if(revIndex === 0)
    {
        clearDat();
        revIndex = 4;
        initializeReviews();
    }
    else
    {
        clearDat();
        revIndex --;
        initializeReviews();
    }
}

//Next and prev

//methods



//Startup and main

document.addEventListener('DOMContentLoaded', () =>
{
    initializeReviews();
    setInterval(rcNext, 10000);
});

//Startup and main