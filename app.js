const scrollTracker = document.querySelector('.scroll-tracker');

let body = document.body;
let html = document.documentElement;

window.addEventListener('DOMContentLoaded', () => {
    adjustScrollTracker();
})


window.addEventListener('resize', () => {
   adjustScrollTracker();
})


const adjustScrollTracker = () => {
    let totalDocHeight = Math.max(
        body.scrollHeight, html.scrollHeight,
        body.offsetHeight, html.offsetHeight,
        body.clientHeight, html.clientHeight
      );
    let clientHeight = html.clientHeight;
    heightToScroll = totalDocHeight - clientHeight;

    window.addEventListener('scroll', () => {
        let scrolledFromTop = html.scrollTop;
        let heightLeftToScroll = heightToScroll - scrolledFromTop;
        
        let rawScrolledPercentage = 100 - ((heightLeftToScroll/heightToScroll)*100);
        let ceiledScrollPercentage = Math.round(rawScrolledPercentage);
      
        scrollTracker.style.width=`${ceiledScrollPercentage}%`
    });
}