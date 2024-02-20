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

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.about_me_link');
    const homeSection = document.querySelector('#about_me');
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращает перезагрузку страницы
        homeSection.scrollIntoView({behavior: "smooth"}); // Прокручивает страницу до блока с id "home"
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.skills_link');
    const homeSection = document.querySelector('#skills');
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращает перезагрузку страницы
        homeSection.scrollIntoView({behavior: "smooth"}); // Прокручивает страницу до блока с id "home"
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.portfolio_link');
    const homeSection = document.querySelector('#portfolio');
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращает перезагрузку страницы
        homeSection.scrollIntoView({behavior: "smooth"}); // Прокручивает страницу до блока с id "home"
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.contacts_link');
    const homeSection = document.querySelector('#contacts');
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращает перезагрузку страницы
        homeSection.scrollIntoView({behavior: "smooth"}); // Прокручивает страницу до блока с id "home"
    });
});