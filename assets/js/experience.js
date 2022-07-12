AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Student Developer",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "Google Summer Of Code",
    time: "(Mar - September, 2022)",
    desp: "<li>Implementing <B>Cuthill-Mckee Ordering Algorithm</B> by <B>Boost Graph Library</B> to <B>pgRouting</B>.</li><li>Cuthill-Mckee Ordering algorithm is used to reduce the <B>Bandwidth</B> of the graphs. Applicable for undirected graphs.</li><li>Reducing the Bandwidth of the graph makes the various sparse matrix computations faster.</li><li>Technologies used - <B>C, C++, PostgreSQL, PostGIS, Sphinx</B>.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2022",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Mentored some students to guide them how to start their first contribution.",
  },
  {
    title: "Hacktoberfest 2020",
    cardImage: "assets/images/experience-page/hacktoberfest-logo.png",
    description:
      "Contributed in Tathastu DSA repo to add more interviews questions and their solutions.",
  },
  {
    title: "Open Force 2022",
    cardImage: "assets/images/experience-page/openforce.jpg",
    description:
      "Mentored some students and won awesome T-shirt after contributions",
  },
  {
    title: "ns-3",
    cardImage: "assets/images/experience-page/ns-3-logo.png",
    description:
      "Made a PR for improving the start and stop time attributes following the OOPS concept",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Codedecode Hackathon",
    subtitle: "Secured Third Rank among 100+ participants",
    image: "assets/images/experience-page/sharda.jpg",
    desp: "Organised by the college society of Hindustan College of Science and Technology. It was a 2 hour Hackathon based on Comptetive programming questions and some SQL queries.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div> 
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
