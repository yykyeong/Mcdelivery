// 탭
const tabSwitches = document.querySelectorAll('.tab-switch');
const tabContents = document.querySelectorAll('.order-notice');

tabSwitches.forEach((tabSwitch, index) => {
  tabSwitch.addEventListener('click', (e) => {
    e.preventDefault();

    tabSwitches.forEach((switchItem) => {
      switchItem.classList.remove('is-active');
    })
    tabSwitch.classList.add('is-active');

    tabContents.forEach((content, contentIndex) => {
      if (contentIndex === index) {
        content.classList.remove('hidden');
      } else {
        content.classList.add('hidden');
      }
    })
  })
})

// 메뉴카테고리
const categoryTabs = document.querySelectorAll('.category-tab');

categoryTabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault()

    categoryTabs.forEach((tabItem) => {
      tabItem.classList.remove('is-active')
    })
    tab.classList.add('is-active')
  })
})

//탑버튼
const goToTopButton = document.querySelector('.go-to-top');

goToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

// 메뉴리스트
const btnToggle = document.querySelectorAll('.btn-toggle');
const toggleMenuList = (e) => {
  e.currentTarget.closest('.menu-list-group').classList.toggle('is-closed');
};

btnToggle.forEach((e) => {
  e.addEventListener('click', toggleMenuList);
});



