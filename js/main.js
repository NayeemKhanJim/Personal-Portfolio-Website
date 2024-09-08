/*====================================SKILLS==========================================*/
const skillsContent = document.getElementsByClassName('.skills_content');
const skillsHeader = document.querySelectorAll('.skills_header');
function toggleSkills() {
	let itemClass = this.parentNode.getElementsByClassName
	for (i = 0; i < skillsContent.length; i++) {
		skillsContent[i].className = 'skills_content skills_close'
	}
	if (itemClass === 'skills_content skills_close') {
		this.parentNode.className = 'skills_content skills_open'
	}
}
skillsHeader.forEach((e) => {
	e.addEventListener('click', toggleSkills)
})