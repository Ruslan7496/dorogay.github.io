// Многоязычный контент
const content = {
    ru: {
        title: "Даша, прости меня",
        messages: [
            "Я долго думал о наших отношениях и о том, как я себя вёл.",
            "Теперь я осознал свои ошибки и понимаю, как сильно обидел тебя.",
            "Ты - самый дорогой человек в моей жизни, и я не хочу терять тебя.",
            "Я обещаю меняться и работать над собой:"
        ],
        promises: [
            "Буду внимательнее к твоим чувствам",
            "Научусь лучше слушать тебя",
            "Буду более терпеливым",
            "Сделаю всё для твоего счастья"
        ],
        signature: "С любовью,"
    },
    en: {
        title: "Dasha, please forgive me",
        messages: [
            "I've been thinking a lot about our relationship and how I've behaved.",
            "Now I realize my mistakes and understand how much I've hurt you.",
            "You are the most precious person in my life, and I don't want to lose you.",
            "I promise to change and work on myself:"
        ],
        promises: [
            "I'll be more attentive to your feelings",
            "I'll learn to listen to you better",
            "I'll be more patient",
            "I'll do everything for your happiness"
        ],
        signature: "With love,"
    }
};

// Установка имени
document.getElementById('myName').textContent = 'Руслан';

// Смена языка
function changeLanguage(lang) {
    const data = content[lang];
    document.getElementById('title').textContent = data.title;
    
    const messageElements = document.querySelectorAll('.message');
    data.messages.forEach((msg, i) => {
        if (messageElements[i]) messageElements[i].textContent = msg;
    });
    
    const promiseElements = document.querySelectorAll('.promise-list li');
    data.promises.forEach((promise, i) => {
        if (promiseElements[i]) promiseElements[i].textContent = promise;
    });
    
    document.getElementById('signature-text').textContent = data.signature;
}

// Создание летающих сердечек
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤';
    heart.className = 'heart';
    
    // Случайные свойства
    const size = Math.random() * 30 + 20;
    const posX = Math.random() * window.innerWidth;
    const duration = Math.random() * 4 + 3;
    const color = ['#e91e63', '#ff4081', '#f50057', '#ff80ab'][Math.floor(Math.random() * 4)];
    
    heart.style.left = `${posX}px`;
    heart.style.bottom = `-50px`;
    heart.style.fontSize = `${size}px`;
    heart.style.color = color;
    heart.style.animationDuration = `${duration}s`;
    
    document.body.appendChild(heart);
    
    // Удаление сердечка после анимации
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Создаем сердечки каждые 300мс
    setInterval(createHeart, 300);
    
    // Обработчик клика для взрыва сердечек
    document.addEventListener('click', (e) => {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '❤';
                heart.style.position = 'absolute';
                heart.style.left = `${e.clientX}px`;
                heart.style.top = `${e.clientY}px`;
                heart.style.fontSize = '25px';
                heart.style.color = '#e91e63';
                heart.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`;
                heart.style.transition = 'all 1s ease-out';
                heart.style.opacity = '1';
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    heart.style.opacity = '0';
                    heart.style.transform += ` scale(2)`;
                    setTimeout(() => heart.remove(), 1000);
                }, 10);
            }, i * 100);
        }
    });
});