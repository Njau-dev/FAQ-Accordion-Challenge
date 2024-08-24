
document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.question');
  
  questions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const plusIcon = this.querySelector('.plus-icon');
      const minusIcon = this.querySelector('.minus-icon');
      
      // Toggle answer visibility
      answer.classList.toggle('hidden');
      
      // Toggle icon visibility
      plusIcon.classList.toggle('hidden');
      minusIcon.classList.toggle('hidden');
      
      // Close other open questions, I added this just cause I can
      questions.forEach(otherQuestion => {
        if (otherQuestion !== this) {
          const otherAnswer = otherQuestion.nextElementSibling;
          const otherPlusIcon = otherQuestion.querySelector('.plus-icon');
          const otherMinusIcon = otherQuestion.querySelector('.minus-icon');
          
          otherAnswer.classList.add('hidden');
          otherPlusIcon.classList.remove('hidden');
          otherMinusIcon.classList.add('hidden');
        }
      });
    });
  });
});






