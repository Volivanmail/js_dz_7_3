const tab = document.querySelectorAll('.tab');
const content = document.querySelectorAll('.tab__content');


function closeTabAndContent() {
    content.forEach((item) => {
        item.classList.remove('tab__content_active');
    })
    tab.forEach((item) => {
        item.classList.remove('tab_active');
    })
}

tab.forEach((item, index) => {
    item.addEventListener('click', function() {
        closeTabAndContent();
        item.classList.add('tab_active');
        parent = item.closest('.tabs');
        const tabContent = parent.querySelectorAll('.tab__content');
        console.log(tabContent);
        tabContent[index].classList.add('tab__content_active');
    })
})