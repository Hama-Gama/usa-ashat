// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";



//*======================= EMAIL JS =============*//
// const contactForm = document.getElementById('contact-form'),
//       contactMessage = document.getElementById('contact-message')

// const sendEmail = (e) => {
//    e.preventDefault()

// 	 // serviceID - templateID - #form - publicKey 
// 	 emailjs
// 			.sendForm(
// 				'service_j02pkik',
// 				'template_pnsqi35',
// 				'#contact-form',
// 				'08BwaBNofwvNRHTUB'
// 			)
// 			.then(
// 				() => {
// 					// show message
// 					contactMessage.textContent = 'Сообщение отправлено!'

// 					// Remove message after 5 seconds
// 					setTimeout(() => {
// 						contactMessage.textContent = ''
// 					}, 5000)

// 					// Clear form
// 					contactForm.reset()
// 				},
// 				() => {
// 					// Show error message
// 					contactMessage.textContent = 'Ошибка при отправке сообщения!'
// 				}
// 			)
// }



// contactForm.addEventListener('submit', sendEmail)
const contactForm = document.getElementById('contact-form'),
	contactMessage = document.getElementById('contact-message')

const sendEmail = e => {
	e.preventDefault()

	// serviceID - templateID - #form - publicKey
	emailjs
		.sendForm(
			'service_yv7rrbk',
			'template_k7nb7ba',
			'#contact-form',
			'VvEPes-_PTFG83sCb'
		)
		.then(
			() => {
				// Success message
				Swal.fire({
					title: 'Success!',
					text: 'Message sent successfully!',
					icon: 'success',
				})

				// Remove message after five seconds
				setTimeout(() => {
					contactMessage.textContent = ''
				}, 5000)

				// Clear input fields
				contactForm.reset()
			},
			() => {
				// Show error message
				contactMessage.textContent = 'Error, message not sent!'
			}
		)
}

contactForm.addEventListener('submit', sendEmail)
