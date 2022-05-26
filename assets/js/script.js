const sideNav = document.querySelectorAll('.sidenav')
M.Sidenav.init(sideNav, {
  inDuration: 650,
  outDuration: 500,
})

const slider = document.querySelectorAll('.slider')
M.Slider.init(slider, {
  indicators: true,
  transition: 600,
  interval: 3000,
})

const parallax = document.querySelectorAll('.parallax')
M.Parallax.init(parallax)

const materialbox = document.querySelectorAll('.materialboxed')
M.Materialbox.init(materialbox)

const scrollspy = document.querySelectorAll('.scrollspy')
M.ScrollSpy.init(scrollspy, {
  scrollOffset: 65,
})

const fixedActionBtn = document.querySelectorAll('.fixed-action-btn')
M.FloatingActionButton.init(fixedActionBtn, {
  toolbarEnabled: true,
})

const scrollEffect = () => {
  const items = document.querySelectorAll('.scale-transition')
  let screenPosition = window.innerHeight / 1.1
  for (i = 0; i < items.length; i++) {
    let itemsPosition = items[i].getBoundingClientRect().top
    if (itemsPosition < screenPosition) {
      items[i].classList.remove('scale-out')
    } else {
      items[i].classList.add('scale-out')
    }
  }
}

const scrollEffectBackToTop = () => {
  const backToTopBtn = document.querySelector('.custom-backtotop-btn')
  let homeSLiderPosition = document.getElementById('home').getBoundingClientRect().top
  let screenPosition = window.innerHeight / 1.1
  if (homeSLiderPosition < screenPosition) {
    backToTopBtn.classList.add('scale-in')
    backToTopBtn.classList.remove('scale-out')
  } else {
    backToTopBtn.classList.add('scale-out')
    backToTopBtn.classList.remove('scale-in')
  }
}

window.addEventListener('scroll', [scrollEffect, scrollEffectBackToTop])
