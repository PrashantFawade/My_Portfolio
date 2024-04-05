
const typingText = document.querySelector('.roll');
const textArray = [ "MEAN Fullstack Developer", "Frontend Developer","UI/UX Designer", "Angular Developer", "React Developer" , "NodeJS Developer" , "Frontend Web Developer"]; 
let currentText = 0;
let charIndex = 0;

function typeWriter() {
    const currentString = textArray[currentText];
    if (charIndex < currentString.length) {
        typingText.textContent += currentString.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50);
    } else {
        setTimeout(() => {
            charIndex = 0;
            typingText.textContent = '';
            currentText = (currentText + 1) % textArray.length; 
            typeWriter();
        }, 1500); 
    }
}

typeWriter();


function scrollToSection(sectionId) {
            console.log(sectionId);
            const element = document.getElementById(sectionId);

            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({
                    top: elementPosition,
                    behavior: "smooth"
                });
            } else {
                console.error(`Element with ID "${sectionId}" not found.`);
            }
        }