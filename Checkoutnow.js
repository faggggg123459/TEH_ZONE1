document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    
    // Simulate loading
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        document.body.style.overflow = 'auto';
    }, 1500);
    
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    
    themeToggle.addEventListener('click', () => {
        html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
        themeToggle.innerHTML = html.dataset.theme === 'dark' 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
    });
    
    // Mobile Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuToggle.innerHTML = mainNav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Ripple Effect for Buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Add animation classes to elements
    document.querySelectorAll('.order-progress .progress-step').forEach((step, index) => {
        step.style.animationDelay = `${index * 0.1}s`;
        step.classList.add('slide-in-up');
    });
    
    document.querySelectorAll('.form-group').forEach((group, index) => {
        group.style.animationDelay = `${index * 0.1 + 0.3}s`;
        group.classList.add('fade-in');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('order-form');
    const formSteps = document.querySelectorAll('.form-step');
    const progressSteps = document.querySelectorAll('.progress-step');
    const nextButtons = document.querySelectorAll('.btn-next');
    const prevButtons = document.querySelectorAll('.btn-prev');
    
    // Phone Mask
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
            e.target.value = !x[2] ? x[1] : '+380 (' + x[2] + ') ' + x[3] + (x[4] ? ' ' + x[4] : '') + (x[5] ? ' ' + x[5] : '');
        });
    }
    
    // Card Number Mask
    const cardNumberInput = document.getElementById('card-number');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] : '') + (x[4] ? ' ' + x[4] : '');
        });
    }
    
    // Card Expiry Mask
    const cardExpiryInput = document.getElementById('card-expiry');
    if (cardExpiryInput) {
        cardExpiryInput.addEventListener('input', function(e) {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})/);
            e.target.value = !x[2] ? x[1] : x[1] + '/' + x[2];
        });
    }
    
    // Delivery Options
    const deliveryOptions = document.querySelectorAll('.delivery-options input[type="radio"]');
    deliveryOptions.forEach(option => {
        option.addEventListener('change', function() {
            document.querySelectorAll('.delivery-options .option-card').forEach(card => {
                card.classList.remove('selected');
            });
            this.closest('.option-card').classList.add('selected');
        });
    });
    
    // Payment Options
    const paymentOptions = document.querySelectorAll('.payment-options input[type="radio"]');
    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            document.querySelectorAll('.payment-options .option-card').forEach(card => {
                card.classList.remove('selected');
            });
            this.closest('.option-card').classList.add('selected');
        });
    });
    
    // Next Button
    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentStep = document.querySelector('.form-step.active');
            const nextStepId = this.dataset.next;
            const nextStep = document.querySelector(`.form-step[data-step="${nextStepId}"]`);
            
            if (validateStep(currentStep)) {
                currentStep.classList.remove('active');
                nextStep.classList.add('active');
                updateProgress(nextStepId);
                
                // Scroll to top of form
                orderForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Animate next step
                nextStep.style.animation = 'none';
                setTimeout(() => {
                    nextStep.style.animation = 'fadeIn 0.5s ease';
                }, 10);
            }
        });
    });
    
    // Previous Button
    prevButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentStep = document.querySelector('.form-step.active');
            const prevStepId = this.dataset.prev;
            const prevStep = document.querySelector(`.form-step[data-step="${prevStepId}"]`);
            
            currentStep.classList.remove('active');
            prevStep.classList.add('active');
            updateProgress(prevStepId);
            
            // Scroll to top of form
            orderForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    
    // Form Submission
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateStep(document.querySelector('.form-step.active'))) {
            // Simulate form submission
            const submitBtn = document.querySelector('.btn-submit');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Обробка...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Show confirmation
                const currentStep = document.querySelector('.form-step.active');
                const confirmationStep = document.querySelector('.confirmation-step');
                
                currentStep.classList.remove('active');
                confirmationStep.classList.add('active');
                updateProgress('4');
                
                // Scroll to top of form
                orderForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Reset button
                submitBtn.innerHTML = 'Підтвердити замовлення <i class="fas fa-check"></i>';
                submitBtn.disabled = false;
            }, 2000);
        }
    });
    
    // Validate Step
    function validateStep(step) {
        let isValid = true;
        const requiredInputs = step.querySelectorAll('[required]');
        
        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                input.closest('.form-group').classList.add('error');
                isValid = false;
            } else {
                input.closest('.form-group').classList.remove('error');
            }
            
            // Special validation for email
            if (input.type === 'email' && input.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
                input.closest('.form-group').classList.add('error');
                isValid = false;
            }
        });
        
        if (!isValid) {
            const firstError = step.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
        
        return isValid;
    }
    
    // Update Progress
    function updateProgress(activeStep) {
        progressSteps.forEach(step => {
            step.classList.remove('active', 'completed');
            
            if (step.dataset.step === activeStep) {
                step.classList.add('active');
            } else if (parseInt(step.dataset.step) < parseInt(activeStep)) {
                step.classList.add('completed');
            }
        });
    }
    
    // Floating Labels
    const floatingLabels = document.querySelectorAll('.floating-label');
    floatingLabels.forEach(label => {
        const input = label.querySelector('input, select');
        
        if (input.value.trim()) {
            label.querySelector('label').classList.add('active');
        }
        
        input.addEventListener('focus', function() {
            label.querySelector('label').classList.add('active');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value.trim()) {
                label.querySelector('label').classList.remove('active');
            }
        });
    });
});
