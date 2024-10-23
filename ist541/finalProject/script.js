// JavaScript Document
// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('lesson-plan-form');

    form.addEventListener('input', function (event) {
        const target = event.target;
        const feedback = document.getElementById(`${target.id}-feedback`);
        
        if (target.value.trim() === '') {
            feedback.textContent = 'This field is required.';
        } else {
            feedback.textContent = '';
        }
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let isValid = true;
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            const feedback = document.getElementById(`${input.id}-feedback`);
            if (input.value.trim() === '') {
                feedback.textContent = 'This field is required.';
                isValid = false;
            }
        });

        if (isValid) {
            alert('Your UDL lesson plan has been successfully created!');
            form.reset();
        }
    });
});
