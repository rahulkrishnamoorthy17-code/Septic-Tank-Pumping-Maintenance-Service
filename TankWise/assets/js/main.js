(()=>{'use strict';const CFG={brand:'TankWise Septic Services',city:'Coimbatore',phone:'+914224502820',emergency:'+919876543210',whatsapp:'919876543210',email:'bookings@tankwise.example',areas:['RS Puram','Peelamedu','Saravanampatti','Singanallur','Ganapathy','Saibaba Colony','Avinashi Road','Sulur']};const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];const current=location.pathname.split('/').pop()||'index.html';const links=[['Services','services.html'],['Pricing','pricing.html'],['Maintenance Guide','maintenance-guide.html'],['About','about.html'],['Blog','blog.html'],['Contact','contact.html']];function icon(n){const p=n==='theme-day'?'<circle cx="12" cy="12" r="5.5" fill="currentColor" fill-opacity=".18"/><circle cx="12" cy="12" r="3.1"/><path d="M12 1.75v2M12 20.25v2M1.75 12h2M20.25 12h2M4.8 4.8l1.4 1.4m11.6 11.6 1.4 1.4M19.2 4.8l-1.4 1.4M6.2 17.8l-1.4 1.4"/>':n==='theme-night'?'<path d="M20.3 15.4A8.4 8.4 0 0 1 8.6 3.7a8.6 8.6 0 1 0 11.7 11.7Z" fill="currentColor" fill-opacity=".18"/><path d="m17.4 3 .6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6.6-1.6ZM21 8l.3.9.9.3-.9.3-.3.9-.3-.9-.9-.3.9-.3L21 8Z"/>':n==='sun'?'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4 4l2 2m12 12 2 2M4 20l2-2m12-12 2-2"/>':n==='moon'?'<path d="M20 16A8 8 0 0 1 8 4a8 8 0 1 0 12 12Z"/>':n==='menu'?'<path d="M4 6h16M4 12h16M4 18h16"/>':'<path d="M5 5l14 14M19 5 5 19"/>';return '<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">'+p+'</svg>'}function homeDropdown(){const active=current==='index.html'||current==='home-emergency.html';return `<div class="nav-home" data-home-wrap><button type="button" class="home-trigger" data-home-trigger aria-expanded="false" aria-haspopup="true" aria-controls="home-pages" ${active?'aria-current="page"':''}>Home <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button><div class="home-pages" id="home-pages"><a href="index.html" ${current==='index.html'?'aria-current="page"':''}>Pumping &amp; Maintenance</a><a href="home-emergency.html" ${current==='home-emergency.html'?'aria-current="page"':''}>Emergency &amp; Monsoon Care</a></div></div>`}function header(){return `<header class="site-header" id="site-header"><div class="container head-inner"><a href="index.html" class="brand" aria-label="TankWise home"><span class="brand-mark"><img src="assets/icons/tankwise-brand-mark.svg" width="44" height="44" alt="" aria-hidden="true"></span><span class="brand-copy"><strong data-brand>TankWise</strong><small>SEPTIC SERVICES</small></span></a><nav class="nav" id="main-nav" aria-label="Main navigation">${homeDropdown()}${links.map(([t,h])=>`<a href="${h}" ${current===h?'aria-current="page"':''}>${t}</a>`).join('')}<div class="mobile-nav-cta"><a class="btn mobile-nav-book" href="contact.html">Book Service</a></div><div class="mobile-nav-auth" id="mobile-nav-auth"></div></nav><div class="header-tools"><button class="icon-btn" type="button" data-theme aria-label="Switch colour theme">${icon('theme-night')}</button><button class="icon-btn" type="button" data-dir aria-label="Switch text direction">RTL</button><div class="auth-header-slot" id="auth-header-slot"></div><a class="btn btn-sm header-book" href="contact.html">Book Service</a><button class="icon-btn mobile-toggle" type="button" data-menu aria-expanded="false" aria-controls="main-nav" aria-label="Open menu">${icon('menu')}</button></div></div></header>`}const group=[['Explore',['Pumping & Maintenance','index.html'],['Emergency & Monsoon Care','home-emergency.html'],...links],['Services',['Tank pumping','service-details.html'],['Camera inspection','services.html?filter=Inspection'],['Emergency backup','services.html?filter=Emergency'],['Drain field','services.html?filter=Inspection']],['Support',['Book service','contact.html'],['Maintenance guide','maintenance-guide.html'],['Warning signs','index.html#warning-signs'],['FAQ','index.html#faq']]];function footer(){return `<footer class="site-footer"><div class="container"><div class="footer-grid"><div class="footer-brand-col"><a class="brand footer-brand-inline" href="index.html" aria-label="TankWise home"><span class="brand-mark"><img src="assets/icons/tankwise-brand-mark.svg" width="44" height="44" alt="" aria-hidden="true"></span><span class="brand-copy"><strong data-brand>TankWise</strong><small>SEPTIC SERVICES</small></span></a><p class="footer-brand-desc">Mechanized septic pumping and inspection services in Coimbatore. Safe, licensed, non-entry operations.</p><div class="footer-social-links" aria-label="Follow TankWise on social media"><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="footer-social-icon instagram" aria-label="Follow TankWise on Instagram" title="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="footer-social-icon facebook" aria-label="Follow TankWise on Facebook" title="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="footer-social-icon twitter" aria-label="Follow TankWise on Twitter / X" title="Twitter / X"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a><a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" class="footer-social-icon whatsapp" aria-label="Chat with TankWise on WhatsApp" title="WhatsApp"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.676.15-.2.301-.776.979-.951 1.18-.175.2-.351.226-.652.076-.3-.15-1.268-.468-2.416-1.491-.893-.797-1.496-1.78-1.672-2.081-.175-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.176.201-.301.301-.502.101-.2.05-.376-.025-.526-.075-.151-.676-1.631-.926-2.233-.244-.587-.492-.507-.677-.516l-.577-.01c-.2 0-.526.075-.802.376s-1.053 1.028-1.053 2.508 1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.634.721.23 1.378.197 1.897.12.578-.087 1.78-.727 2.031-1.43.251-.702.251-1.303.176-1.43-.075-.126-.276-.201-.577-.351zM12.05 2C6.527 2 2.042 6.485 2.042 12.008c0 1.942.553 3.754 1.516 5.29L2 22l4.839-1.515c1.48.887 3.209 1.393 5.211 1.393 5.523 0 10.008-4.485 10.008-10.008C22.058 6.485 17.573 2 12.05 2zm0 18.008c-1.764 0-3.398-.535-4.757-1.453l-.341-.231-2.855.894.908-2.784-.224-.356A8.005 8.005 0 0 1 4.05 12.008C4.05 7.59 7.632 4.008 12.05 4.008c4.418 0 8 3.582 8 8s-3.582 8-8 8z"/></svg></a></div></div><div class="footer-nav-col"><h3>Navigation</h3><a href="index.html">Home</a><a href="services.html">Services</a><a href="pricing.html">Pricing Plans</a><a href="maintenance-guide.html">Maintenance Guide</a><a href="about.html">About TankWise</a><a href="blog.html">Field Blog</a><a href="contact.html">Contact Us</a></div><div class="footer-nav-col"><h3>Our Services</h3><a href="service-details.html?service=tank-pumping">Tank Pumping</a><a href="service-details.html?service=camera-inspection">Camera Inspection</a><a href="service-details.html?service=routine-maintenance">Maintenance Plan</a><a href="service-details.html?service=emergency-backup">Emergency Backup</a><a href="service-details.html?service=drain-field">Drain Field Care</a><a href="services.html?filter=Commercial">Commercial Pumping</a><a href="services.html?filter=Inspection">Warning Signs Audit</a></div><div class="footer-contact-col"><h3>24/7 Support &amp; Depot</h3><div class="footer-contact-item"><span class="footer-contact-label">24/7 Emergency Line</span><a class="footer-emergency-link" href="tel:${CFG.emergency}">${CFG.emergency}</a></div><div class="footer-contact-item"><span class="footer-contact-label">Office &amp; Bookings</span><a class="footer-contact-link" href="tel:${CFG.phone}">${CFG.phone}</a></div><div class="footer-contact-item"><span class="footer-contact-label">WhatsApp Dispatch</span><a class="footer-contact-link" href="https://wa.me/${CFG.whatsapp}" target="_blank" rel="noopener">+91 98765 43210</a></div><div class="footer-contact-item"><span class="footer-contact-label">Depot Facility</span><address class="footer-contact-address">Avinashi Rd, Peelamedu, CBE</address></div></div></div><div class="footer-newsletter"><div class="footer-newsletter-text"><strong class="footer-newsletter-title">Stay Updated</strong><span class="footer-newsletter-desc">Seasonal septic maintenance alerts &amp; tips.</span></div><form class="footer-newsletter-form" id="footer-newsletter-form" novalidate><div class="footer-newsletter-input-wrap"><input type="email" id="footer-newsletter-email" name="email" class="footer-newsletter-input" placeholder="Enter email address" required aria-label="Enter your email address" autocomplete="email"><button type="submit" class="btn footer-newsletter-btn" id="footer-newsletter-btn">Subscribe</button></div><div class="footer-newsletter-msg" id="footer-newsletter-msg" role="status" aria-live="polite"></div></form></div><div class="footer-bottom"><span>&copy; <span id="year"></span> TankWise Septic Services &bull; Coimbatore, TN &bull; <a href="privacy.html" class="footer-legal-link">Privacy Policy</a> &bull; <a href="terms.html" class="footer-legal-link">Terms of Service</a></span><span>Mechanized operations only. Never enter a septic tank.</span></div></div></footer>`}function toast(t){
  let box=$('.toast-container');
  if(!box){
    box=document.createElement('div');
    box.className='toast-container';
    box.setAttribute('role','alert');
    box.setAttribute('aria-live','assertive');
    document.body.append(box);
  }
  const n=document.createElement('div');
  n.className='toast auth-popup-toast';
  n.innerHTML=`<div class="toast-icon">✓</div><div class="toast-body"><strong>${t}</strong></div><button type="button" class="toast-close" aria-label="Close notification">&times;</button>`;
  n.querySelector('.toast-close')?.addEventListener('click',()=>n.remove());
  box.prepend(n);
  setTimeout(()=>{
    n.classList.add('fade-out');
    setTimeout(()=>n.remove(),350);
  },4200);
}function settings(){const dark=localStorage.getItem('tw-dark')==='1',rtl=localStorage.getItem('tw-rtl')==='1';document.documentElement.classList.toggle('dark',dark);document.documentElement.dir=rtl?'rtl':'ltr';$('[data-theme]')?.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');$('[data-theme]')?.setAttribute('title',dark?'Light mode':'Dark mode');$('[data-theme]')?.setAttribute('aria-pressed',String(dark));if($('[data-theme]'))$('[data-theme]').innerHTML=dark?icon('theme-day'):icon('theme-night');$$('[data-dir]').forEach(el=>{el.textContent=rtl?'LTR':'RTL';el.setAttribute('aria-label',rtl?'Switch to left-to-right layout':'Switch to right-to-left layout');el.setAttribute('title',rtl?'Switch to LTR':'Switch to RTL')});}function bind(){document.addEventListener('click',e=>{if(e.target.closest('[data-theme]')){localStorage.setItem('tw-dark',document.documentElement.classList.contains('dark')?'0':'1');settings()}if(e.target.closest('[data-dir]')){localStorage.setItem('tw-rtl',document.documentElement.dir==='rtl'?'0':'1');settings()}if(e.target.closest('[data-menu]')){const nav=$('#main-nav'),open=nav.classList.toggle('open');$('[data-menu]').setAttribute('aria-expanded',String(open));$('[data-menu]').innerHTML=open?icon('close'):icon('menu')}if(e.target.closest('[data-home-trigger]')){const wrap=e.target.closest('[data-home-wrap]');const open=wrap.classList.toggle('is-open');wrap.querySelector('[data-home-trigger]').setAttribute('aria-expanded',String(open))}else if(!e.target.closest('[data-home-wrap]')){document.querySelectorAll('[data-home-wrap]').forEach(w=>{w.classList.remove('is-open');w.querySelector('[data-home-trigger]').setAttribute('aria-expanded','false')})}if(e.target.closest('.nav a')){$('#main-nav')?.classList.remove('open');$('[data-menu]')?.setAttribute('aria-expanded','false');if($('[data-menu]'))$('[data-menu]').innerHTML=icon('menu')}});document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('[data-home-wrap]').forEach(w=>{w.classList.remove('is-open');w.querySelector('[data-home-trigger]').setAttribute('aria-expanded','false')})});window.addEventListener('scroll',()=>$('#site-header')?.classList.toggle('shrink',scrollY>35),{passive:true});$$('[data-accordion] .faq-trigger').forEach(b=>b.addEventListener('click',()=>{const a=b.nextElementSibling,open=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!open));a.hidden=open}));$$('[data-counter]').forEach(n=>{const final=Number(n.dataset.counter);if(!('IntersectionObserver'in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){n.textContent=final.toLocaleString('en-IN');return}const o=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){let st=performance.now();const tick=now=>{let p=Math.min(1,(now-st)/1200);n.textContent=Math.round(final*(1-(1-p)**3)).toLocaleString('en-IN');if(p<1)requestAnimationFrame(tick)};requestAnimationFrame(tick);o.disconnect()}});o.observe(n)});if('IntersectionObserver'in window){const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');ob.unobserve(e.target)}}),{threshold:.08});$$('.reveal').forEach(n=>ob.observe(n))}else $$('.reveal').forEach(n=>n.classList.add('show'));$$('[data-filter-group]').forEach(gr=>{const id=gr.dataset.filterGroup;const cards=$$(`[data-filter-item="${id}"]`);const query=$(`[data-search="${id}"]`);const run=()=>{const filter=$('.filter.active',gr)?.dataset.value||'All';let shown=0;cards.forEach(c=>{const ok=(filter==='All'||(c.dataset.category||'').includes(filter))&&(!query||c.textContent.toLowerCase().includes(query.value.toLowerCase().trim()));c.hidden=!ok;if(ok)shown++});const status=$(`[data-results="${id}"]`);if(status)status.textContent=`${shown} result${shown===1?'':'s'} shown`};$$('.filter',gr).forEach(b=>b.onclick=()=>{$$('.filter',gr).forEach(x=>x.classList.remove('active'));b.classList.add('active');run()});query?.addEventListener('input',run);const preferred=new URLSearchParams(location.search).get('filter');if(preferred){const x=$$('.filter',gr).find(b=>b.dataset.value===preferred);x?.click()}else run()});$$('[data-flip]').forEach(n=>{const toggle=()=>{n.classList.toggle('is-open');n.setAttribute('aria-pressed',n.classList.contains('is-open')?'true':'false')};n.addEventListener('click',toggle);n.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle()}})});const nForm=$('#footer-newsletter-form');if(nForm){const nInput=$('#footer-newsletter-email',nForm),nBtn=$('#footer-newsletter-btn',nForm),nMsg=$('#footer-newsletter-msg',nForm);nInput?.addEventListener('input',()=>{nInput.classList.remove('has-error');nInput.removeAttribute('aria-invalid');if(nMsg?.classList.contains('is-error')){nMsg.textContent='';nMsg.className='footer-newsletter-msg'}});nForm.addEventListener('submit',e=>{e.preventDefault();const val=(nInput?.value||'').trim();const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;if(!val){nInput?.classList.add('has-error');nInput?.setAttribute('aria-invalid','true');if(nMsg){nMsg.className='footer-newsletter-msg is-error';nMsg.textContent='Please enter your email address.'}nInput?.focus();return}if(!emailRegex.test(val)){nInput?.classList.add('has-error');nInput?.setAttribute('aria-invalid','true');if(nMsg){nMsg.className='footer-newsletter-msg is-error';nMsg.textContent='Please enter a valid email address (e.g., name@example.com).'}nInput?.focus();return}if(nBtn&&nInput){nBtn.disabled=true;nInput.disabled=true;const orig=nBtn.textContent;nBtn.textContent='Subscribing...';if(nMsg){nMsg.className='footer-newsletter-msg';nMsg.textContent=''}setTimeout(()=>{try{const subs=JSON.parse(localStorage.getItem('tw-newsletter-subscribers')||'[]');if(!subs.includes(val)){subs.push(val);localStorage.setItem('tw-newsletter-subscribers',JSON.stringify(subs))}}catch(_){}if(nMsg){nMsg.className='footer-newsletter-msg is-success';nMsg.innerHTML='<span aria-hidden="true">✓</span> Thank you for subscribing! You will receive our latest updates, news, and announcements.'}nInput.value='';nInput.disabled=false;nBtn.disabled=false;nBtn.textContent=orig},400)}})}}/* ========================================================
   Authentication & Social Sign-In Module
   ======================================================== */
const AUTH = (() => {
  const STORAGE_KEY = 'tw_auth_user';

  function getUser() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch (_) {
      return null;
    }
  }

  function setUser(user) {
    try {
      if (user) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (_) {}
    renderHeaderSlot();
  }

  // Escape profile data before inserting it into dynamic HTML.
  function safeText(value) {return String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
  function getInitials(name) {
    if (!name) return 'U';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function renderHeaderSlot() {
    const user = getUser();
    const desktopSlot = document.getElementById('auth-header-slot');
    const mobileSlot = document.getElementById('mobile-nav-auth');

    const signedOutHtml = `
      <a href="signin.html" class="btn btn-sm auth-signin-btn" aria-label="Go to the Sign In page">
        <svg class="auth-user-ico" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span class="auth-btn-text">Sign In</span>
      </a>
    `;

    const signedInHtml = user ? `
      <div class="auth-user-chip-wrap" data-user-chip-wrap>
        <button type="button" class="auth-user-chip" data-user-chip-trigger aria-expanded="false" aria-haspopup="true">
          <span class="auth-chip-avatar">${safeText(getInitials(user.name))}</span>
          <span class="auth-chip-name">${safeText(user.displayName || user.name.split(' ')[0])}</span>
          <svg class="auth-chip-caret" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div class="auth-user-dropdown" id="auth-user-dropdown">
          <div class="auth-dropdown-header">
            <strong>${safeText(user.name)}</strong>
            <small>${safeText(user.email)}</small>
            <span class="auth-provider-tag">${safeText(user.provider ? 'Signed in with ' + user.provider : 'Verified Member')}</span>
          </div>
          <div class="auth-dropdown-links">
            <a href="contact.html?service=Routine%20Maintenance%20Plan" class="auth-dropdown-link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              My Service Bookings
            </a>
            <a href="pricing.html" class="auth-dropdown-link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Annual Maintenance Plan
            </a>
            <a href="maintenance-guide.html" class="auth-dropdown-link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              Septic Owner's Guide
            </a>
          </div>
          <div class="auth-dropdown-footer">
            <button type="button" class="auth-signout-btn" data-auth-signout>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    ` : signedOutHtml;

    if (desktopSlot) desktopSlot.innerHTML = signedInHtml;
    if (mobileSlot) mobileSlot.innerHTML = signedInHtml;
  }

  function ensureModal() {
    if (document.getElementById('auth-modal')) return;

    const modalHtml = `
      <div class="auth-modal-backdrop" id="auth-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
        <div class="auth-modal-card">
          <div class="auth-modal-top-bar">
            <a href="index.html" class="auth-modal-back" data-auth-close aria-label="Back to website">
              <svg class="auth-back-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to website</span>
            </a>
            <button type="button" class="auth-modal-close" data-auth-close aria-label="Close dialog">&times;</button>
          </div>
          
          <div class="auth-modal-header">
            <a href="index.html" class="auth-modal-brand" aria-label="TankWise Home">
              <span class="brand-mark"><img src="assets/icons/tankwise-brand-mark.svg" width="36" height="36" alt="" aria-hidden="true"></span>
              <strong>TankWise</strong>
            </a>

            <!-- Tab Switcher between Sign In and Sign Up -->
            <div class="auth-nav-tabs" role="tablist">
              <button type="button" class="auth-nav-tab active" data-auth-tab="signin" role="tab" aria-selected="true" id="tab-signin">Sign In</button>
              <button type="button" class="auth-nav-tab" data-auth-tab="signup" role="tab" aria-selected="false" id="tab-signup">Create Account</button>
            </div>
          </div>

          <!-- PANEL 1: SIGN IN -->
          <div class="auth-tab-panel active" id="auth-panel-signin" role="tabpanel" aria-labelledby="tab-signin">
            <div class="auth-panel-head">
              <h2 id="auth-modal-title">Sign in to your account</h2>
              <p class="auth-modal-desc">Access your property service records, schedule reminder alerts, and view certified inspection reports.</p>
            </div>

            <!-- Social Sign-in Options with High-Res Official Icons -->
            <div class="auth-social-list" aria-label="Sign in with social providers">
              <button type="button" class="auth-social-btn google-btn" data-social-provider="Google">
                <svg class="social-svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Continue with Google</span>
              </button>

              <button type="button" class="auth-social-btn apple-btn" data-social-provider="Apple">
                <svg class="social-svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.74-.96 2.76 1.02.08 2.06-.51 2.68-1.26z"/>
                </svg>
                <span>Continue with Apple</span>
              </button>

              <button type="button" class="auth-social-btn facebook-btn" data-social-provider="Facebook">
                <svg class="social-svg" viewBox="0 0 24 24" width="20" height="20" fill="#1877F2" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Continue with Facebook</span>
              </button>

              <button type="button" class="auth-social-btn microsoft-btn" data-social-provider="Microsoft">
                <svg class="social-svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="#f25022" d="M1 1h10v10H1z"/>
                  <path fill="#00a4ef" d="M1 13h10v10H1z"/>
                  <path fill="#7fba00" d="M13 1h10v10H13z"/>
                  <path fill="#ffb900" d="M13 13h10v10H13z"/>
                </svg>
                <span>Continue with Microsoft</span>
              </button>
            </div>

            <div class="auth-divider">
              <span>or sign in with email</span>
            </div>

            <!-- Email Login Form -->
            <form class="auth-form" id="auth-login-form" novalidate>
              <div class="auth-field">
                <label for="auth-email">Email address</label>
                <input type="email" id="auth-email" class="auth-input" placeholder="name@example.com" required autocomplete="email">
              </div>

              <div class="auth-field">
                <div class="auth-field-header">
                  <label for="auth-password">Password</label>
                  <a href="#" class="auth-link-sm" data-auth-forgot>Forgot password?</a>
                </div>
                <div class="auth-input-pw-wrap">
                  <input type="password" id="auth-password" class="auth-input" placeholder="Enter password" required autocomplete="current-password">
                  <button type="button" class="auth-pw-toggle" aria-label="Toggle password visibility">
                    <svg class="eye-open" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    <svg class="eye-closed" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none"><path d="m1 1 22 22M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/></svg>
                  </button>
                </div>
              </div>

              <button type="submit" class="btn auth-submit-btn" id="auth-submit-btn">Sign In to TankWise</button>
            </form>

            <div class="auth-switch-prompt">
              <span>Don't have an account?</span>
              <button type="button" class="auth-switch-btn" data-auth-switch="signup">Create an account</button>
            </div>
          </div>

          <!-- PANEL 2: CREATE NEW ACCOUNT / SIGN UP -->
          <div class="auth-tab-panel" id="auth-panel-signup" role="tabpanel" aria-labelledby="tab-signup" style="display:none;">
            <div class="auth-panel-head">
              <h2>Create your TankWise account</h2>
              <p class="auth-modal-desc">Register for automatic service reminders, digital desludging logs, and prioritized monsoon dispatch.</p>
            </div>

            <!-- Social Registration with Icons -->
            <div class="auth-social-list" aria-label="Sign up with social providers">
              <button type="button" class="auth-social-btn google-btn" data-social-provider="Google">
                <svg class="social-svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Sign up with Google</span>
              </button>

              <button type="button" class="auth-social-btn apple-btn" data-social-provider="Apple">
                <svg class="social-svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.74-.96 2.76 1.02.08 2.06-.51 2.68-1.26z"/>
                </svg>
                <span>Sign up with Apple</span>
              </button>
            </div>

            <div class="auth-divider">
              <span>or create with email</span>
            </div>

            <!-- Email Registration Form -->
            <form class="auth-form" id="auth-signup-form" novalidate>
              <div class="auth-field">
                <label for="signup-name">Full name</label>
                <input type="text" id="signup-name" class="auth-input" placeholder="e.g. Anand Natarajan" required autocomplete="name">
              </div>

              <div class="auth-field-grid">
                <div class="auth-field">
                  <label for="signup-email">Email address</label>
                  <input type="email" id="signup-email" class="auth-input" placeholder="name@example.com" required autocomplete="email">
                </div>
                <div class="auth-field">
                  <label for="signup-phone">Phone number</label>
                  <input type="tel" id="signup-phone" name="phone" class="auth-input" placeholder="10-digit mobile number" maxlength="10" inputmode="numeric" pattern="[0-9]{10}" required autocomplete="tel">
                </div>
              </div>

              <div class="auth-field-grid">
                <div class="auth-field">
                  <label for="signup-password">Password</label>
                  <div class="auth-input-pw-wrap">
                    <input type="password" id="signup-password" class="auth-input" placeholder="Min. 6 chars" required autocomplete="new-password">
                    <button type="button" class="auth-pw-toggle" aria-label="Toggle password visibility">
                      <svg class="eye-open" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      <svg class="eye-closed" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none"><path d="m1 1 22 22M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/></svg>
                    </button>
                  </div>
                </div>
                <div class="auth-field">
                  <label for="signup-confirm">Confirm password</label>
                  <input type="password" id="signup-confirm" class="auth-input" placeholder="Repeat password" required autocomplete="new-password">
                </div>
              </div>

              <button type="submit" class="btn auth-submit-btn" id="auth-signup-btn">Create Free Account</button>
            </form>

            <div class="auth-switch-prompt">
              <span>Already have an account?</span>
              <button type="button" class="auth-switch-btn" data-auth-switch="signin">Sign In</button>
            </div>
          </div>

          <div class="auth-modal-footer">
            <span class="auth-security-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Encrypted 256-bit secure session
            </span>
            <p class="auth-terms-note">By signing in or registering, you agree to our <a href="terms.html">Terms of Service</a> &amp; <a href="privacy.html">Privacy Policy</a>.</p>
            <div class="auth-modal-back-footer">
              <a href="index.html" class="auth-back-to-site" data-auth-close aria-label="Back to website">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span>Back to website</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    bindModalEvents();
  }

  function openModal() {
    ensureModal();
    const modal = document.getElementById('auth-modal');
    if (!modal) return;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('auth-modal-open');
    setTimeout(() => {
      document.getElementById('auth-email')?.focus();
    }, 100);
  }

  function closeModal() {
    const modal = document.getElementById('auth-modal');
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('auth-modal-open');
  }

  function bindModalEvents() {
    const modal = document.getElementById('auth-modal');
    if (!modal || modal.dataset.bound) return;
    modal.dataset.bound = 'true';

    function switchTab(tabId) {
      const isSignIn = tabId === 'signin';
      modal.querySelectorAll('.auth-nav-tab').forEach(t => {
        const active = t.dataset.authTab === tabId;
        t.classList.toggle('active', active);
        t.setAttribute('aria-selected', String(active));
      });
      const pSignIn = document.getElementById('auth-panel-signin');
      const pSignUp = document.getElementById('auth-panel-signup');
      if (pSignIn && pSignUp) {
        pSignIn.style.display = isSignIn ? 'block' : 'none';
        pSignUp.style.display = isSignIn ? 'none' : 'block';
        if (isSignIn) {
          document.getElementById('auth-email')?.focus();
        } else {
          document.getElementById('signup-name')?.focus();
        }
      }
    }

    modal.addEventListener('click', (e) => {
      // Brand name click -> redirect to home page
      const brand = e.target.closest('.auth-modal-brand');
      if (brand) {
        closeModal();
        const isHome = current === 'index.html' || location.pathname === '/' || location.pathname.endsWith('/index.html');
        if (isHome) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.location.href = 'index.html';
        }
        return;
      }

      // Back to website click -> return to home page / website
      const backLink = e.target.closest('.auth-modal-back, .auth-back-to-site');
      if (backLink) {
        closeModal();
        const isHome = current === 'index.html' || location.pathname === '/' || location.pathname.endsWith('/index.html');
        if (isHome) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.location.href = 'index.html';
        }
        return;
      }

      if (e.target.closest('[data-auth-close]') || e.target === modal) {
        closeModal();
      }

      // Tab switcher clicks
      const tabBtn = e.target.closest('[data-auth-tab]');
      if (tabBtn) {
        switchTab(tabBtn.dataset.authTab);
      }

      // Switch links inside panels
      const switchBtn = e.target.closest('[data-auth-switch]');
      if (switchBtn) {
        switchTab(switchBtn.dataset.authSwitch);
      }

      // Social Providers
      const socialBtn = e.target.closest('[data-social-provider]');
      if (socialBtn) {
        const provider = socialBtn.dataset.socialProvider;
        handleSocialLogin(provider, socialBtn);
      }

      // Password Toggle
      const pwToggle = e.target.closest('.auth-pw-toggle');
      if (pwToggle) {
        const wrap = pwToggle.closest('.auth-input-pw-wrap');
        const input = wrap.querySelector('input');
        const eyeOpen = wrap.querySelector('.eye-open');
        const eyeClosed = wrap.querySelector('.eye-closed');
        const isPw = input.type === 'password';
        input.type = isPw ? 'text' : 'password';
        if (eyeOpen) eyeOpen.style.display = isPw ? 'none' : 'block';
        if (eyeClosed) eyeClosed.style.display = isPw ? 'block' : 'none';
      }

      // Forgot Password demo toast
      if (e.target.closest('[data-auth-forgot]')) {
        e.preventDefault();
        window.TankWise?.toast('A password reset link has been dispatched to your email.');
      }
    });

    // Form submit: Sign In
    const loginForm = document.getElementById('auth-login-form');
    loginForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('auth-email');
      const email = emailInput?.value.trim();
      if (!email || !email.includes('@')) {
        emailInput?.focus();
        window.TankWise?.toast('Please enter a valid email address.');
        return;
      }
      const displayName = email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const submitBtn = document.getElementById('auth-submit-btn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Signing in...';
      }
      setTimeout(() => {
        setUser({
          name: displayName,
          email: email,
          provider: 'Email',
          loginTime: new Date().toISOString()
        });
        closeModal();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Sign In to TankWise';
        }
        window.TankWise?.toast('Successfully signed in!');
      }, 450);
    });

    // Form submit: Sign Up / Create Account
    const signupForm = document.getElementById('auth-signup-form');
    signupForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('signup-name');
      const emailInput = document.getElementById('signup-email');
      const phoneInput = document.getElementById('signup-phone');
      const pwInput = document.getElementById('signup-password');
      const confirmInput = document.getElementById('signup-confirm');

      const name = nameInput?.value.trim();
      const email = emailInput?.value.trim();
      const phone = phoneInput?.value.trim();
      const pw = pwInput?.value || '';
      const confirmPw = confirmInput?.value || '';

      if (!name) {
        nameInput?.focus();
        window.TankWise?.toast('Please enter your full name.');
        return;
      }
      if (!email || !email.includes('@')) {
        emailInput?.focus();
        window.TankWise?.toast('Please enter a valid email address.');
        return;
      }
      if (!phone || !/^\d{10}$/.test(phone)) {
        phoneInput?.focus();
        window.TankWise?.toast('Please enter a valid 10-digit mobile number.');
        return;
      }
      if (pw.length < 6) {
        pwInput?.focus();
        window.TankWise?.toast('Password must contain at least 6 characters.');
        return;
      }
      if (pw !== confirmPw) {
        confirmInput?.focus();
        window.TankWise?.toast('Passwords do not match. Please re-enter.');
        return;
      }

      const signupBtn = document.getElementById('auth-signup-btn');
      if (signupBtn) {
        signupBtn.disabled = true;
        signupBtn.textContent = 'Creating account...';
      }

      setTimeout(() => {
        setUser({
          name: name,
          email: email,
          phone: phone,
          provider: 'Verified Account',
          loginTime: new Date().toISOString()
        });
        closeModal();
        if (signupBtn) {
          signupBtn.disabled = false;
          signupBtn.textContent = 'Create Free Account';
        }
        window.TankWise?.toast('Successfully signed in!');
      }, 500);
    });
  }

  function handleSocialLogin(provider, button) {
    const origHtml = button.innerHTML;
    button.disabled = true;
    button.classList.add('is-loading');

    setTimeout(() => {
      setUser({
        name: `${provider}`,
        displayName: `${provider}`,
        email: `${provider.toLowerCase()}@authenticated.user`,
        provider: provider,
        loginTime: new Date().toISOString()
      });
      button.disabled = false;
      button.classList.remove('is-loading');
      button.innerHTML = origHtml;
      closeModal();
      window.TankWise?.toast(`Successfully signed in by using ${provider}!`);
    }, 350);
  }

  function init() {
    renderHeaderSlot();

    // Global restriction: phone fields allow mobile digits only (10 digits)
    document.addEventListener('input', (e) => {
      const t = e.target;
      if (t && (t.type === 'tel' || t.name === 'phone' || t.id?.includes('phone') || t.id?.includes('mobile'))) {
        t.value = t.value.replace(/\D/g, '').slice(0, 10);
      }
    });
    document.addEventListener('keydown', (e) => {
      const t = e.target;
      if (t && (t.type === 'tel' || t.name === 'phone' || t.id?.includes('phone') || t.id?.includes('mobile'))) {
        if (['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter', 'Home', 'End'].includes(e.key) || e.ctrlKey || e.metaKey) return;
        if (!/^\d$/.test(e.key)) {
          e.preventDefault();
        }
      }
    });
    document.addEventListener('paste', (e) => {
      const t = e.target;
      if (t && (t.type === 'tel' || t.name === 'phone' || t.id?.includes('phone') || t.id?.includes('mobile'))) {
        e.preventDefault();
        const text = (e.clipboardData || window.clipboardData).getData('text') || '';
        const digits = text.replace(/\D/g, '').slice(0, 10);
        const start = t.selectionStart || 0;
        const end = t.selectionEnd || 0;
        t.value = (t.value.slice(0, start) + digits + t.value.slice(end)).replace(/\D/g, '').slice(0, 10);
        t.dispatchEvent(new Event('input', { bubbles: true }));
      }
    });

    document.addEventListener('click', (e) => {
      // Open modal
      if (e.target.closest('[data-auth-open]')) {
        e.preventDefault();
        openModal();
      }

      // Toggle user dropdown chip
      if (e.target.closest('[data-user-chip-trigger]')) {
        const wrap = e.target.closest('[data-user-chip-wrap]');
        const open = wrap.classList.toggle('is-open');
        wrap.querySelector('[data-user-chip-trigger]').setAttribute('aria-expanded', String(open));
      } else if (!e.target.closest('[data-user-chip-wrap]')) {
        document.querySelectorAll('[data-user-chip-wrap]').forEach(w => {
          w.classList.remove('is-open');
          w.querySelector('[data-user-chip-trigger]')?.setAttribute('aria-expanded', 'false');
        });
      }

      // Sign Out
      if (e.target.closest('[data-auth-signout]')) {
        e.preventDefault();
        setUser(null);
        window.TankWise?.toast('You have successfully signed out.');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
        document.querySelectorAll('[data-user-chip-wrap]').forEach(w => {
          w.classList.remove('is-open');
          w.querySelector('[data-user-chip-trigger]')?.setAttribute('aria-expanded', 'false');
        });
      }
    });
  }

  return { init, openModal, closeModal, getUser, setUser };
})();
document.addEventListener('DOMContentLoaded',()=>{document.querySelector('[data-header]')?.insertAdjacentHTML('afterbegin',header());document.querySelector('[data-footer]')?.insertAdjacentHTML('afterbegin',footer());$('#year').textContent=new Date().getFullYear();settings();bind();AUTH.init()});window.TankWise={CFG,toast,AUTH};})();
