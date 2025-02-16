// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";



//*======================= EMAIL JS =============*//
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
   e.preventDefault()

	 // serviceID - templateID - #form - publicKey 
	 emailjs
			.sendForm(
				'service_j02pkik',
				'template_pnsqi35',
				'#contact-form',
				'08BwaBNofwvNRHTUB'
			)
			.then(
				() => {
					// show message
					contactMessage.textContent = 'Сообщение отправлено!'

					// Remove message after 5 seconds
					setTimeout(() => {
						contactMessage.textContent = ''
					}, 5000)

					// Clear form
					contactForm.reset()
				},
				() => {
					// Show error message
					contactMessage.textContent = 'Ошибка при отправке сообщения!'
				}
			)
}

contactForm.addEventListener('submit', sendEmail)