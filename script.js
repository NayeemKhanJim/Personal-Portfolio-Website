const skillsContent = document.querySelectorAll('.skills-content');
const skillsHeader = document.getElementsByClassName('.skills-header');
skillsHeader.addEventlistener('click', () => {
    skillsContent[2].classList.add('skill-show')
})