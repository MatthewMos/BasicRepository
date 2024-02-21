const butten=document.querySelector('.contacts_button')
butten.addEventListener('click',()=>alert('Open chat'))

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.home_link');
    const homeSection = document.querySelector('#home');
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращает перезагрузку страницы
        homeSection.scrollIntoView({behavior: "smooth"}); // Прокручивает страницу до блока с id "home"
    });
});

