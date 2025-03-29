document.addEventListener('DOMContentLoaded', function() {
    // Функция для управления стрелками в разделах
    function setupSectionArrows() {
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            const header = section.querySelector('.section-header');
            const content = section.querySelector('.section-content');
            const arrow = section.querySelector('.arrow');
            
            if (header && content && arrow) {
                header.addEventListener('click', () => {
                    content.classList.toggle('show');
                    arrow.style.transform = content.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
                });
            }
        });
    }

    // Функция для управления стрелками в направлениях
    function setupDirectionsArrows() {
        const directionsHeaders = document.querySelectorAll('.directions-header');
        
        directionsHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const arrow = header.querySelector('.arrow');
                
                if (content && arrow) {
                    content.classList.toggle('show');
                    arrow.style.transform = content.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
                }
            });
        });
    }

    // Функция для управления стрелками в словаре
    function setupVocabularyArrows() {
        const vocabularyHeaders = document.querySelectorAll('.vocabulary-header');
        
        vocabularyHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const arrow = header.querySelector('.arrow');
                
                if (content && arrow) {
                    content.classList.toggle('show');
                    arrow.style.transform = content.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
                }
            });
        });
    }

    // Функция для управления стрелками в вопросах
    function setupQuestionsArrows() {
        const questionsHeaders = document.querySelectorAll('.questions-header');
        
        questionsHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const arrow = header.querySelector('.arrow');
                
                if (content && arrow) {
                    content.classList.toggle('show');
                    arrow.style.transform = content.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
                }
            });
        });
    }

    // Функция для управления стрелками в грамматике
    function setupGrammarArrows() {
        const grammarHeaders = document.querySelectorAll('.grammar-header');
        
        grammarHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const arrow = header.querySelector('.arrow');
                
                if (content && arrow) {
                    content.classList.toggle('show');
                    arrow.style.transform = content.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
                }
            });
        });
    }

    // Функция для управления стрелками в построении предложений
    function setupSentenceBuildingArrows() {
        const sentenceHeaders = document.querySelectorAll('.sentence-building-header');
        
        sentenceHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const arrow = header.querySelector('.arrow');
                
                if (content && arrow) {
                    content.classList.toggle('show');
                    arrow.style.transform = content.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
                }
            });
        });
    }

    // Функция для управления стрелками в обсуждении
    function setupDiscussionArrows() {
        const discussionHeaders = document.querySelectorAll('.discussion-header');
        
        discussionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const arrow = header.querySelector('.arrow');
                
                if (content && arrow) {
                    content.classList.toggle('show');
                    arrow.style.transform = content.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
                }
            });
        });
    }

    // Функция для управления стрелками в скрипте
    function setupScriptArrows() {
        const scriptHeaders = document.querySelectorAll('.script-header');
        
        scriptHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const arrow = header.querySelector('.arrow');
                
                if (content && arrow) {
                    content.classList.toggle('show');
                    arrow.style.transform = content.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
                }
            });
        });
    }

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

    // Инициализация всех стрелок при загрузке страницы
    setupSectionArrows();
    setupDirectionsArrows();
    setupVocabularyArrows();
    setupQuestionsArrows();
    setupGrammarArrows();
    setupSentenceBuildingArrows();
    setupDiscussionArrows();
    setupScriptArrows();
}); 