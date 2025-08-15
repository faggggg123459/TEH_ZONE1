document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');

    // Прелоадер 3 секунди
    setTimeout(() => {
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.pointerEvents = 'none';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 3000);

    // Форми і кроки
    const form = document.getElementById('order-form');
    const steps = Array.from(form.querySelectorAll('.form-step'));
    const progressSteps = Array.from(document.querySelectorAll('.progress-step'));
    const progressLine = document.querySelector('.progress-line span');

    let currentStep = 1;

    function showStep(step) {
        steps.forEach(s => s.classList.remove('active'));
        progressSteps.forEach(p => p.classList.remove('active', 'completed'));

        for(let i=0; i < progressSteps.length; i++) {
            if (i+1 < step) {
                progressSteps[i].classList.add('completed');
            }
            if (i+1 === step) {
                progressSteps[i].classList.add('active');
            }
        }

        progressLine.style.width = ((step - 1) / (steps.length - 1)) * 100 + '%';

        const stepSection = steps.find(s => +s.dataset.step === step);
        if(stepSection) stepSection.classList.add('active');
    }

    function validateStep(step) {
        const stepSection = steps.find(s => +s.dataset.step === step);
        if (!stepSection) return false;
        const inputs = stepSection.querySelectorAll('input[required]');
        for(const input of inputs) {
            if (input.type === 'checkbox' && !input.checked) return false;
            if (input.type !== 'checkbox' && !input.value.trim()) return false;
        }
        return true;
    }

    // Обробка натискань кнопок Далі та Назад
    form.addEventListener('click', e => {
        if(e.target.closest('.btn-next')) {
            if(validateStep(currentStep)) {
                currentStep++;
                if (currentStep > steps.length) currentStep = steps.length;
                showStep(currentStep);
            } else {
                alert('Будь ласка, заповніть всі обов’язкові поля на цьому кроці.');
            }
        }
        if(e.target.closest('.btn-prev')) {
            currentStep--;
            if (currentStep < 1) currentStep = 1;
            showStep(currentStep);
        }
    });

    // Обробка відправки форми (підтвердження замовлення)
    form.addEventListener('submit', e => {
        e.preventDefault();
        if(!validateStep(currentStep)) {
            alert('Будь ласка, заповніть всі обов’язкові поля.');
            return;
        }
        currentStep++;
        if (currentStep > steps.length) currentStep = steps.length;
        showStep(currentStep);
    });

    showStep(currentStep);

    // Виділення вибраної опції доставки
    const deliveryOptions = form.querySelectorAll('input[name="delivery"]');
    deliveryOptions.forEach(option => {
        option.addEventListener('change', () => {
            const cards = form.querySelectorAll('label.option-card');
            cards.forEach(card => card.classList.remove('selected'));
            option.closest('label.option-card').classList.add('selected');

            // Показ/приховання полів доставки в залежності від вибору
            const city = document.getElementById('city');
            const address = document.getElementById('address');
            const postOffice = document.getElementById('post-office');
            const fieldCity = document.getElementById('field-city');
            const fieldAddress = document.getElementById('field-address');
            const fieldPostOffice = document.getElementById('field-postoffice');

            if(option.value === 'nova-poshta') {
                fieldCity.style.display = 'none';
                fieldAddress.style.display = 'none';
                fieldPostOffice.style.display = 'block';
                postOffice.required = true;
                city.required = false;
                address.required = false;
            } else if(option.value === 'courier') {
                fieldCity.style.display = 'block';
                fieldAddress.style.display = 'block';
                fieldPostOffice.style.display = 'none';
                city.required = true;
                address.required = true;
                postOffice.required = false;
            } else if(option.value === 'pickup') {
                fieldCity.style.display = 'none';
                fieldAddress.style.display = 'none';
                fieldPostOffice.style.display = 'none';
                city.required = false;
                address.required = false;
                postOffice.required = false;
            }
        });
    });

    // Виділення вибраної опції оплати
    const paymentOptions = form.querySelectorAll('input[name="payment"]');
    const cardBlock = document.getElementById('card-block');

    paymentOptions.forEach(option => {
        option.addEventListener('change', () => {
            const cards = form.querySelectorAll('label.option-card');
            cards.forEach(card => {
                // Якщо картка в межах блоку оплати (data-step=3), знімаємо selected
                if(card.closest('[data-step="3"]')) card.classList.remove('selected');
            });
            option.closest('label.option-card').classList.add('selected');

            if(option.value === 'card') {
                cardBlock.style.display = 'grid';
                // Встановити required для полів картки
                cardBlock.querySelectorAll('input').forEach(input => input.required = true);
            } else {
                cardBlock.style.display = 'none';
                // Зняти required для полів картки
                cardBlock.querySelectorAll('input').forEach(input => input.required = false);
            }
        });
    });

    // Ініціалізуємо початковий стан для доставки та оплати
    deliveryOptions.forEach(opt => {
        if (opt.checked) opt.dispatchEvent(new Event('change'));
    });
    paymentOptions.forEach(opt => {
        if (opt.checked) opt.dispatchEvent(new Event('change'));
    });

    // Кнопка "Назад до початку"
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // Вставка поточного року в футер
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
