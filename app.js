const scrollTracker = document.querySelector('.scroll-tracker');

window.addEventListener('scroll', () => {
    handleScroll();
})


const handleScroll = () => {
    let body = document.body;
    let html = document.documentElement;

    let totalDocHeight = Math.max(
      body.scrollHeight, html.scrollHeight,
      body.offsetHeight, html.offsetHeight,
      body.clientHeight, html.clientHeight
    );

    let scrolledFromTop = window.scrollY;
    let windowHeight = window.innerHeight;
    let heightToScroll = totalDocHeight - windowHeight;
    
    let rawScrollPercentage = (scrolledFromTop / heightToScroll) * 100;
    let roundedScrollPercentage = Math.round(rawScrollPercentage);
    scrollTracker.style.width=`${roundedScrollPercentage}%`;
}