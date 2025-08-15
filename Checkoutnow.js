document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        if(preloader){ preloader.style.opacity='0'; setTimeout(()=>preloader.style.display='none',500);}
    },3000);

    const form = document.getElementById('order-form');
    const steps = Array.from(form.querySelectorAll('.form-step'));
    const progressSteps = Array.from(document.querySelectorAll('.progress-step'));
    const progressLine = document.querySelector('.progress-line span');
    let currentStep = 1;

    function showStep(step){
        steps.forEach(s=>s.classList.remove('active'));
        progressSteps.forEach(p=>p.classList.remove('active','completed'));
        for(let i=0;i<progressSteps.length;i++){
            if(i+1<step) progressSteps[i].classList.add('completed');
            if(i+1===step) progressSteps[i].classList.add('active');
        }
        progressLine.style.width=((step-1)/(steps.length-1))*100+'%';
        const stepSection = steps.find(s=>+s.dataset.step===step);
        if(stepSection) stepSection.classList.add('active');
    }

    function validateStep(step){
        const stepSection=steps.find(s=>+s.dataset.step===step);
        if(!stepSection) return false;
        const inputs=stepSection.querySelectorAll('input[required]');
        for(const input of inputs){
            if(input.type==='checkbox' && !input.checked) return false;
            if(input.type!=='checkbox' && !input.value.trim()) return false;
        }
        return true;
    }

    form.addEventListener('click', e=>{
        if(e.target.closest('.btn-next')){
            if(validateStep(currentStep)){ currentStep++; if(currentStep>steps.length) currentStep=steps.length; showStep(currentStep);}
            else alert('Будь ласка, заповніть всі обов’язкові поля на цьому кроці.');
        }
        if(e.target.closest('.btn-prev')){ currentStep--; if(currentStep<1) currentStep=1; showStep(currentStep);}
    });

    form.addEventListener('submit', e=>{
        e.preventDefault();
        if(!validateStep(currentStep)){ alert('Будь ласка, заповніть всі обов’язкові поля.'); return; }
        currentStep++; if(currentStep>steps.length) currentStep=steps.length; showStep(currentStep);
    });

    showStep(currentStep);

    // Delivery
    const deliveryOptions = form.querySelectorAll('input[name="delivery"]');
    deliveryOptions.forEach(option=>{
        option.addEventListener('change', ()=>{
            form.querySelectorAll('label.option-card').forEach(card=>card.classList.remove('selected'));
            option.closest('label.option-card').classList.add('selected');
            const city=document.getElementById('city'), address=document.getElementById('address'), postOffice=document.getElementById('post-office');
            const fieldCity=document.getElementById('field-city'), fieldAddress=document.getElementById('field-address'), fieldPostOffice=document.getElementById('field-postoffice');
            if(option.value==='nova-poshta'){ fieldCity.style.display='none'; fieldAddress.style.display='none'; fieldPostOffice.style.display='block'; postOffice.required=true; city.required=false; address.required=false; }
            else if(option.value==='courier'){ fieldCity.style.display='block'; fieldAddress.style.display='block'; fieldPostOffice.style.display='none'; city.required=true; address.required=true; postOffice.required=false; }
            else { fieldCity.style.display='none'; fieldAddress.style.display='none'; fieldPostOffice.style.display='none'; city.required=false; address.required=false; postOffice.required=false; }
        });
    });

    // Payment
    const paymentOptions = form.querySelectorAll('input[name="payment"]');
    const cardBlock = document.getElementById('card-block');
    paymentOptions.forEach(option=>{
        option.addEventListener('change', ()=>{
            form.querySelectorAll('label.option-card').forEach(card=>{if(card.closest('[data-step="3"]')) card.classList.remove('selected');});
            option.closest('label.option-card').classList.add('selected');
            if(option.value==='card'){ cardBlock.style.display='grid'; cardBlock.querySelectorAll('input').forEach(i=>i.required=true); }
            else{ cardBlock.style.display='none'; cardBlock.querySelectorAll('input').forEach(i=>i.required=false); }
        });
    });

    deliveryOptions.forEach(opt=>{ if(opt.checked) opt.dispatchEvent(new Event('change')); });
    paymentOptions.forEach(opt=>{ if(opt.checked) opt.dispatchEvent(new Event('change')); });

    // Back to top
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', ()=>{ if(window.scrollY>300) backToTopBtn.classList.add('visible'); else backToTopBtn.classList.remove('visible'); });
    backToTopBtn.addEventListener('click', ()=>{ window.scrollTo({top:0,behavior:'smooth'}); });

    // Year
    const yearSpan = document.getElementById('year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();
});
