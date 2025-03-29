document.addEventListener('DOMContentLoaded', function() {
    // Обработчики для заголовков секций
    const headers = document.querySelectorAll('.directions-header');
    headers.forEach((header, index) => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const arrow = this.querySelector('.arrow');
            
            // Анимация стрелки
            arrow.style.transform = content.style.display === 'none' ? 'rotate(180deg)' : 'rotate(0)';
            
            // Показ/скрытие контента
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
            
            // Добавляем класс active для анимации
            this.classList.toggle('active');
        });
    });

    // Обработчики для кнопок в секции Vocabulary
    const vocabButtons = document.querySelectorAll('.vocab-btn');
    vocabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            const words = document.querySelectorAll('.vocabulary-list li');
            
            words.forEach(word => {
                switch(action) {
                    case 'hide-words':
                        word.classList.add('hide-word');
                        break;
                    case 'hide-definitions':
                        word.classList.add('hide-definition');
                        break;
                    case 'show-all':
                        word.classList.remove('hide-word', 'hide-definition');
                        break;
                }
            });
        });
    });

    // Обработчики для кнопок в секции Questions
    const questionsButtons = document.querySelectorAll('.questions-btn');
    questionsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            const answers = document.querySelectorAll('.question-item .answer');
            
            answers.forEach(answer => {
                if (action === 'show-answers') {
                    answer.classList.add('show');
                } else if (action === 'hide-answers') {
                    answer.classList.remove('show');
                }
            });
        });
    });

    // Обработчики для кнопок в секции Grammar
    const grammarButtons = document.querySelectorAll('.grammar-btn');
    grammarButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            const answers = document.querySelectorAll('.grammar-item .answer');
            
            answers.forEach(answer => {
                if (action === 'show-answers') {
                    answer.classList.add('show');
                } else if (action === 'hide-answers') {
                    answer.classList.remove('show');
                }
            });
        });
    });

    // Обработчики для кнопок в секции Sentence Building
    const sentenceButtons = document.querySelectorAll('.sentence-btn');
    sentenceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            const answer = this.closest('.sentence-item').querySelector('.answer');
            
            if (action === 'show') {
                answer.classList.add('show');
            } else if (action === 'hide') {
                answer.classList.remove('show');
            }
        });
    });

    // Анимация для элементов при загрузке
    const elements = document.querySelectorAll('.lesson-text > *');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
            element.style.transition = 'all 0.5s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}); 