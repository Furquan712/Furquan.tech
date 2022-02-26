AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Managed Netword Expert",
    cardImage: "https://sm.pcmag.com/pcmag_in/cover/c/chegg/chegg_3tp5.png",
    place: "Chegg India",
    time: "(Mar 2022 - present)",
    desp: "<li>Authoring Solutions for advanced questions from Computer Science Engineering textbooks</li><li>Online answering of CSE questions posted by students abroad.</li><li>Quality review of solutions given by external answers</li><li>Content feedback and online tutoring Video Content Reviews, Work on domain specific, Ad-hoc Projects</li>",
  },
  {
    title: "Research Intern",
    cardImage: "https://media.glassdoor.com/sqll/540401/jamia-millia-islamia-squarelogo-1463577650514.png",
    place: "Jamia Millia Islamia",
    time: "(Mar 2022 - present)",
    desp: "<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  },
  {
    title: "Software Development Intern",
    cardImage: "https://www.mdeez.in/img/logo.ico",
    place: "Mdeez E-Commerce ",
    time: "(Dec 2021 - present)",
    desp: "<li> Worked on multiple project </li> <li>Made changes in the current progressive web app of MSA Quran Acadmey  to react to different actions performed  </li> <li>Created a Web App called “Valuation-Drive” which provide daily stock market updates</li><li>worked on Frontend part of product based company RC infinty with multiple Js Libraries</li>",
  },
  {
    title: "Frontend Developer",
    cardImage: "formura.png",
    place: "Formura Adgitm",
    time: "(June - July, 2021)",
    desp: "<li>Worked on a Blog website with Html, CSS, JS</li> ",
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
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:" "
  },
  {
    title: "Bitcoin Summer of Code ",
    cardImage: " https://softr-prod.imgix.net/applications/5abf9a13-d06f-44d6-b50c-187328a34a81/assets/c0e483e6-b0e0-4557-9b15-7188a3709d46.svg",
    description:" "
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
    title: "Girl Script summer of code ",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
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
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
