const butten = document.querySelector(".contacts_button");
butten.addEventListener("click", () => alert("Open chat"));

const burgerIcon = document.querySelector(".burger"); // получаем кнопку бкргер
const links = document.querySelector(".header_links"); // получаем ссылки
burgerIcon.addEventListener("click", () => {
	// слушатель на клик
	links.classList.toggle("active"); // логика вкл/выкл класса active
});

const headerLinks = document.querySelectorAll(".header_links a"); // получаем массив ссылок
for (let i = 0; i < headerLinks.length; i++) {
	// бежим по массиву из ссылок
	const link = headerLinks[i]; // получаем i-й элемент (конкретную ссылку)
	link.addEventListener("click", () => {
		// вешаем на каждую i-ю ссылку обработчик клика, чтобы при нажатии на каждую ссылку срабатывала логика
		links.classList.remove("active"); // убираем класс, чтобы скрыть меню
		document.documentElement.classList.remove("hide"); // убираем класс, чтобы вернуть скролл
		burgerIcon.checked = false; // убираем состояние checked, чтобы вернуть бургер в исходное положение
	});
}
