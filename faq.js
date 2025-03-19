const questions = document.querySelectorAll('.faq-question h2');

function toggleFAQ(q) {
    const answer = q.parentNode.nextElementSibling; // Get the answer element
    answer.classList.toggle('active'); // Toggle the "active" class to expand or collapse the answer

    // Change the icon based on whether the answer is expanded or collapsed
    const currentSrc = q.nextElementSibling.src;
    const newSrc = currentSrc.includes('icon-plus') ? "assets/images/icon-minus.svg" : "assets/images/icon-plus.svg";
    q.nextElementSibling.src = newSrc;
}

questions.forEach(question => {
    question.addEventListener('click', () => {
        toggleFAQ(question);
    });
});