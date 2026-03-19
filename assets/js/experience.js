AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
    {
    title: "Frontend Developer",
    cardImage: "assets/images/experience-page/faclon.png",
    place: "Faclon Labs",
    time: "(Jan 2025 - Present)",
    desp: "<li>Developed a robust Design System, defining re‑usable SCSS tokens and cross frameworks UI components using StencilJS. </li><li>Built a Linux System Gateway (LSG) UI enabling remote onboarding, monitoring and terminal access to on‑premise/VM assets via xterm.js and WebSockets, eliminating manual facility visits for application deployment, enabling remote application installation.</li><li> Resolved Chrome out‑of‑memory crashes by implementing API‑driven data downsampling for Highcharts, enabling stable rendering of long‑range time‑series datasets and improving experience for 20k+ active users.</li> <li>Cut device page load time by ~60% by optimizing auth‑guard routing with cached paginated data and a lightweight fallback API.</li><li>Delivered a React and Next.js based Trender Application to show trends and customizations between devices and its data.</li><li>Diagnosed and eliminated critical memory leaks using Chrome DevTools performance profiling, preventing UI freezes and improving long‑session application stability.</li><li>Collaborated with cross‑functional teams in an Agile environment to deliver end‑to‑end features and mentored junior developers on code quality and engineering best practices.</li><li> Technologies used ‑ Angular, React, TypeScript, RxJs, StencilJS, Material‑UI, Bootstrap, Git, GitLab and Clickup.</li>",
  },
  {
    title: "Software Engineer",
    cardImage: "assets/images/experience-page/digit_insurance.png",
    place: "Digit Insurance",
    time: "(June 2023 - Jan 2025)",
    desp: "<li>Owned implementation of Orphan Claims and Renewals, streamlining proposal and claims workflows for internal operations teams.</li><li>Improved initial rendering time by ~38% by modularizing Angular routing with lazy‑loaded modules and optimizing bundle size. </li><li> Contributed to Config‑Driven UI architecture for dynamic rendering of forms and pages, for better control and improved scalability.</li> <li>Designed pages based on Figma specifications and worked extensively with RxJs Observables, Services, and Pipes enhancing the portal’s interactivity and data handling capabilities.</li><li>Diagnosed and resolved high‑priority production issues affecting policy issuance, improving portal stability. Built pixel‑perfect UI components from Figma and leveraged RxJs Observables, Services, and Pipes to enhance portal interactivity and data handling</li><li> Technologies used - Angular, TypeScript, postgreSQL, Material-UI, Bootstrap, Git, BitBucket and Jira.</li>",
  },
  {
    title: "Student Developer",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "Google Summer Of Code",
    time: "(Mar - September, 2022)",
    desp: "<li>Implemented <B>Cuthill-Mckee Ordering Algorithm</B> by <B>Boost Graph C++ Library</B> to <B>pgRouting</B>.</li><li>Cuthill-Mckee Ordering algorithm is used to reduce the <B>Bandwidth</B> of the graphs. Applicable for undirected graphs.</li><li>Reducing the Bandwidth of the graph makes the various sparse matrix computations faster.</li><li>Technologies used - <B>C, C++, PostgreSQL, PostGIS, Sphinx</B>.</li>",
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
    title: "Google Summer Of Code 2023",
    cardImage: "assets/images/experience-page/gsoc.png",
    description:
      "Mentored a project and to guided the contributor for day to day task and progress made.",
  },
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
      <div class="blog-slider__item swiper-slide" style="display: flex">
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
