
const linkBtns = document.querySelectorAll('#links__responsive')
const hamburgerBtn = document.getElementById('nav__button')

hamburgerBtn.addEventListener('click', (e) => {
  console.log('something')
  e.preventDefault()
  linkBtns.forEach(btns => {
   return btns.classList.toggle('toggle')
  })
})




// <<<<<<<<<<<<<<<<<<<<<<< USES FUNCTIONALITY >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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


// <<<<<<<<<<<<<<<<<<<<<<<<<< TEMPLATE FUNCTIONALITY >>>>>>>>>>>>>>>>>>>>>>>>>>>>
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



// <<<<<<<<<<<<<<<<<<<<<<<<<<<< DEMO FUNCTIONALITY >>>>>>>>>>>>>>>>>>>>>>>>>>>>
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

// <<<<<<<<<<<<<<<<<<<<< VOIVEOVER FUNCTIONALITY >>>>>>>>>>>>>>>>>>>>>
const languageBtns= document.querySelectorAll('.language__btn');
const languageBtnContainer= document.querySelector('.voiceover__videos');
const languageVideos = document.querySelectorAll('.language__video')


languageBtnContainer.addEventListener('click', function(e) {
  const btnsClicked = e.target.closest('.language__btn');

  if(!btnsClicked) return;

  // Remove active classes
  languageBtns.forEach(btn => btn.classList.remove('language__btn--active'));
  languageVideos.forEach(lang => lang.classList.remove('language__video--active'));

  btnsClicked.classList.add('language__btn--active');

  document.querySelector(`.language__video--${btnsClicked.dataset.tab}`).classList.add('language__video--active')
})


// <<<<<<<<<<<<<<<<<<<<<<<<<<< FAQS FUNCTIONALITY >>>>>>>>>>>>>>>>>>>>>>>>>>>
document.addEventListener('DOMContentLoaded',function() {
  const faqsTab = document.querySelectorAll('.faqs__flex--item')

  faqsTab.forEach(item => {
    const faqsQuestion = item.querySelector('.question');
    const faqsAnswer = item.querySelector('.answer');
    const faqsIcon = item.querySelector('.faqs__arrow--icon');

    faqsQuestion.addEventListener('click', () => {
      const open = faqsAnswer.style.display ==='block';

      //close all question

      document.querySelectorAll('.answer').forEach(ans => ans.style.display= 'none')

      document.querySelectorAll('.faqs__arrow--icon').forEach(icon => icon.style.transform = 'rotate(0deg)');

      if (open) {
        faqsAnswer.style.display = 'none';
        faqsIcon.style.transform = 'rotate(0deg)';

      } else  {
        faqsAnswer.style.display ='block';
        faqsIcon.style.transform= 'rotate(-90deg)';
      }
    })
  })
})

