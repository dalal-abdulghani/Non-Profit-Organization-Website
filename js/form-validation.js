document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form form');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value.trim();
      
      resetErrors();
      
      let isValid = true;
      
      if (!name) {
        showError('name', 'الاسم الكامل مطلوب');
        isValid = false;
      } else if (name.length < 3) {
        showError('name', 'الاسم يجب أن يكون أكثر من 3 أحرف');
        isValid = false;
      }
      
      if (!email) {
        showError('email', 'البريد الإلكتروني مطلوب');
        isValid = false;
      } else if (!validateEmail(email)) {
        showError('email', 'البريد الإلكتروني غير صالح');
        isValid = false;
      }
      
      if (phone && !validatePhone(phone)) {
        showError('phone', 'رقم الهاتف غير صالح');
        isValid = false;
      }
      
      if (!message) {
        showError('message', 'الرسالة مطلوبة');
        isValid = false;
      } else if (message.length < 10) {
        showError('message', 'الرسالة يجب أن تكون أكثر من 10 أحرف');
        isValid = false;
      }
      
      if (isValid) {
        alert('تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.');
        form.reset();
      }
    });
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  function validatePhone(phone) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(phone);
  }
  
  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const formGroup = field.closest('.form-group');
    
    let errorElement = formGroup.querySelector('.error-message');
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.className = 'error-message';
      formGroup.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    field.classList.add('error');
  }
  
  function resetErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(el => el.remove());
    
    const errorFields = document.querySelectorAll('.error');
    errorFields.forEach(el => el.classList.remove('error'));
  }
  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');
  
  if (nameInput) nameInput.addEventListener('input', () => resetFieldError('name'));
  if (emailInput) emailInput.addEventListener('input', () => resetFieldError('email'));
  if (phoneInput) phoneInput.addEventListener('input', () => resetFieldError('phone'));
  if (messageInput) messageInput.addEventListener('input', () => resetFieldError('message'));
  
  function resetFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    if (errorElement) {
      errorElement.remove();
      field.classList.remove('error');
    }
  }
});