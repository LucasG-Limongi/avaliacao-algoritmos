function forEachbutton(params) {
    params.buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(`Button ${button.textContent} clicked`);
        });
    });
    
}
