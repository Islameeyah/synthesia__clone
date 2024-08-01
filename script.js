// const mobileMenu = document.getElementById('mobile-menu');
// const navbarMenu = document.querySelector('.navbar-menu');

// mobileMenu.addEventListener('click', () => {
//     navbarMenu.classList.toggle('active');
// });

// //  // script to convert data-autoplay to autoplay as video plays in designer otherwise
//  (function() {
//     var grandparentVideo = document.currentScript.parentElement.parentElement;
//     if (grandparentVideo && grandparentVideo.getAttribute('data-autoplay') === 'true') {
//         grandparentVideo.setAttribute('autoplay', '');
//     }
// })();
// // </script></div></video></div><div class="hero-video-script w-embed w-script"><script>
// // Hero html Video
// let videoContainer = document.querySelector("#hero-html-video");
// let htmlVideo = document.querySelector("#hero-html-video video");
// let playButton = document.querySelector(".video-button");
// htmlVideo.muted = true;

// videoContainer.addEventListener("click", handleVideoContainer);

// function handleVideoContainer() {
//   if (htmlVideo.muted === true) {
//       htmlVideo.loop = false;
//     htmlVideo.muted = false;
//     htmlVideo.currentTime = 0.1;
//     playButton.setAttribute("active", "true");
//   } else {
//     htmlVideo.muted = true;
//     playButton.setAttribute("active", "false");
//   }
// }

// // Reset video-button to initial state when video ends
// htmlVideo.addEventListener("ended", (event) => {
//   htmlVideo.muted = true;
//   playButton.setAttribute("active", "false");
//   // Log to ensure the event is triggered
//   console.log("Video ended. Resetting playButton and replaying the video.");
//   htmlVideo.play();
// });

// // Log to verify the play method is called
// htmlVideo.addEventListener("play", (event) => {
//   console.log("Video is playing.");
// });
// </script></div></div></div>

// <video src=""></video>

// const navLinks = document.querySelectorAll('.navbar__list');
// navLinks.forEach((link) => {
//   link.addEventListener('click', () => {
//     const icon =link.querySelectorAll('navbar--icon');
//     icon.classList.add('rotate');
//   })
// })

// Tabbed component

const tabs = document.querySelectorAll('.uses__tab');
const tabsContainer = document.querySelector('.uses__tab-container');
const tabsContent = document.querySelectorAll('.uses__card');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.uses__tab');
  console.log(clicked);

  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('uses--active'));
  tabsContent.forEach(c => c.classList.remove('uses__card--active'));

  clicked.classList.add('uses--active')

  document.querySelector(`.uses__card--${clicked.dataset.tab}`).classList.add('uses__card--active')

})

const template = document.querySelectorAll('.template__tab');
const templateContainer = document.querySelector('.template__tab--container');
const templateContent = document.querySelectorAll('.template__video');

templateContainer.addEventListener('click', function (e) {
  const clicked =  e.target.closest('.template__tab');

  if(!clicked) return;

  template.forEach(t => t.classList.remove('template__tab--active'));
  templateContent.forEach(c => c.classList.remove('template__video--active'));
  
  clicked.classList.add('template__tab--active')

  document.querySelector(`.template__video--${clicked.dataset.tab}`).classList.add('template__video--active')
})


const demoTabs = document.querySelectorAll('.demo__tab');
const demoFlexBtn = document.querySelector('.demo--flex-btn')
const demoTableContent = document.querySelectorAll('.table__content')
const demoImage = document.querySelectorAll('.demo__img')

demoFlexBtn.addEventListener('click', function (e) {
  const tabClicked = e.target.closest('.demo__tab');
  console.log(tabClicked); 

  if(!tabClicked) return;

  demoImage.forEach(img => img.classList.remove('demo__img--active'))
  demoTableContent.forEach(c => c.classList.remove('table__content--active'))
  demoTabs.forEach(t => t.classList.remove('demo__tab--active'));
  tabClicked.classList.add('demo__tab--active');

  document.querySelector(`.table__content--${tabClicked.dataset.tab}`).classList.add('table__content--active')
  document.querySelector(`.demo__img--${tabClicked.dataset.tab}`).classList.add('demo__img--active')

})