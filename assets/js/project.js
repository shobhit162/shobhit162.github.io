AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Food Shop",
    cardImage: "assets/images/project-page/food-shop.png",
    description: "Created a Food Shop app using Angular where the user can get the recipes of different dishes.",
    tagimg: "assets/images/project-page/mern.png",
    Previewlink: "https://ng-angular-food.web.app/auth",
    Githublink: "https://github.com/shobhit162/Shop-Food-Angular-App",
  },
  {
    title: "Job Finder",
    cardImage: "assets/images/project-page/job-finder.png",
    description: "Created a Job Finder app using Angular where the user can get the job links of different jobs.",
    tagimg: "assets/images/project-page/mern.png",
    Previewlink: "https://job-finder-9b1f0.web.app/home",
    Githublink: "https://github.com/shobhit162/Job-Finder",
  },
  {
    title: "Instagram Clone",
    cardImage: "assets/images/project-page/insta.png",
    description: "A clone of Instagram built using MERN stack. It is having basic functionality of Like, Comment, Post, Follow, etc",
    tagimg: "assets/images/project-page/mern.png",
    Previewlink: "https://insta-clone-24-m31j.onrender.com/signin",
    Githublink: "https://github.com/shobhit162/MERN-instagram-clone",
  },
  {
    title: "Binary Calculator",
    cardImage: "assets/images/project-page/bitcalcy.png",
    description: "A Binary Calculator made using HTMl, CSS and JavaScript. It calculates Booth, Division and Multiplication.",
    tagimg: "assets/images/project-page/htmlcssjs.png",
    Previewlink: "BitCalcy/homepage.html",
    Githublink: "https://github.com/shobhit162/BitCalcy",
  },
  {
    title: "Piano Flutter App",
    cardImage: "assets/images/project-page/piano.png",
    description: "A basic flutter app that plays music when clicked on moving tiles",
    tagimg: "assets/images/project-page/flutter.jpg",
    Previewlink: "#",
    Githublink: "https://github.com/shobhit162/piano-game",
  },
  {
    title: "Dicee Flutter App",
    cardImage: "assets/images/project-page/dicee.png",
    description: "A basic flutter app that rolls two dicee and show random numbers",
    tagimg: "assets/images/project-page/flutter.jpg",
    Previewlink: "#",
    Githublink: "https://github.com/shobhit162/rolling_Dice",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title">${title}</a></h1>
                </div>
                <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
