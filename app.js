const scrollTracker = document.querySelector('.scroll-tracker');

let body = document.body;
let html = document.documentElement;
let totalDocHeight = Math.max(
  body.scrollHeight, html.scrollHeight,
  body.offsetHeight, html.offsetHeight,
  body.clientHeight, html.clientHeight
);
const clientHeight = html.clientHeight;
let heightToScroll = totalDocHeight - clientHeight;

window.addEventListener('scroll', () => {
  let scrolledFromTop = html.scrollTop;
  let yetToScroll = heightToScroll - scrolledFromTop;
  
  let rawScrolledPercentage = 100 - ((yetToScroll/heightToScroll)*100);
  let ceiledScrollPercentage = Math.round(rawScrolledPercentage);

  scrollTracker.style.width=`${ceiledScrollPercentage}%`
});
