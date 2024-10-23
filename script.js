
const aboutItems = document.querySelectorAll('.about-item h3');


aboutItems.forEach(item => {
    item.addEventListener('click', () => {
        
        const parent = item.parentElement;
        parent.classList.toggle('active');

        
        aboutItems.forEach(other => {
            if (other !== item && other.parentElement.classList.contains('active')) {
                other.parentElement.classList.remove('active');
            }
        });
    });
});
