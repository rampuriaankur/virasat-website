(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  if(btn && nav){
    btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
    nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}});
  }
  var yr=document.getElementById('yr');
  if(yr) yr.textContent=new Date().getFullYear();

  var form=document.getElementById('enquiry'),msg=document.getElementById('form-msg');
  if(!form) return;
  var email=form.elements.email,phone=form.elements.phone;
  function validateContact(){
    var phoneValue=phone.value.trim(),digitCount=phoneValue.replace(/\D/g,'').length;
    email.setCustomValidity(!email.value.trim() && !phoneValue ? 'Enter an email address or phone number.' : '');
    phone.setCustomValidity(phoneValue && (digitCount<7 || digitCount>15) ? 'Enter a phone number containing 7 to 15 digits.' : '');
  }
  email.addEventListener('input',validateContact);
  phone.addEventListener('input',validateContact);
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var d=new FormData(form);
    if(d.get('_gotcha')) return;
    validateContact();
    if(!form.reportValidity()) return;
    if(form.action.indexOf('YOUR_FORM_ID')>-1){
      if(msg) msg.textContent='The enquiry form is not connected yet. Please email or WhatsApp us directly.';
      return;
    }
    if(msg) msg.textContent='Sending your enquiry…';
    fetch(form.action,{method:'POST',body:d,headers:{Accept:'application/json'}})
      .then(function(r){
        if(!r.ok){
          if(msg) msg.textContent='We could not send your enquiry. Please try again or email or WhatsApp us directly.';
          return;
        }
        form.reset();
        if(msg) msg.textContent='Thank you! We will get back to you shortly.';
      })
      .catch(function(){if(msg) msg.textContent='A connection error prevented sending. Please try again or email or WhatsApp us directly.'});
  });
})();
