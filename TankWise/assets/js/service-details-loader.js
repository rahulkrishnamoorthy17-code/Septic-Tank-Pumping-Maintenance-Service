(() => {
  'use strict';

  function slugify(str) {
    if (!str) return '';
    return str
      .toLowerCase()
      .trim()
      .replace(/&amp;/g, 'and')
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function resolveSlug(raw) {
    if (!raw) return 'tank-pumping';
    const s = slugify(raw);
    const data = window.TW_SERVICES_DATA || {};
    if (data[s]) return s;

    // Common aliases & partials
    if (s.includes('pump')) return 'tank-pumping';
    if (s.includes('camera') || s.includes('cctv')) return 'camera-inspection';
    if (s.includes('routine') || s.includes('maint')) return 'routine-maintenance';
    if (s.includes('emergency') || s.includes('backup')) return 'emergency-backup';
    if (s.includes('drain') || s.includes('field') || s.includes('soak')) return 'drain-field';
    if (s.includes('new-tank') || s.includes('newtank') || s.includes('setup')) return 'new-tank-care';
    if (s.includes('filter') || s.includes('effluent')) return 'effluent-filter';
    if (s.includes('purchase') || s.includes('buyer') || s.includes('pre-purchase')) return 'property-purchase';
    if (s.includes('riser') || s.includes('access')) return 'riser-access';

    return 'tank-pumping';
  }

  function renderServiceDetails(slug) {
    const data = window.TW_SERVICES_DATA;
    if (!data) return;

    const currentSlug = resolveSlug(slug);
    const s = data[currentSlug];
    if (!s) return;

    // 1. Update Title and Meta Tags
    document.title = s.metaTitle || `${s.name} | TankWise Septic Services`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', s.metaDesc);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', s.metaTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', s.metaDesc);

    // 2. Service Switcher Bar
    const switcherContainer = document.querySelector('#service-switcher-bar');
    if (switcherContainer) {
      const keys = Object.keys(data);
      switcherContainer.innerHTML = `
        <div class="service-switcher-scroll">
          <span class="switcher-label">Services:</span>
          ${keys
            .map(k => {
              const item = data[k];
              const isActive = k === currentSlug;
              return `<a href="service-details.html?service=${k}" class="service-chip ${isActive ? 'active' : ''}" data-slug="${k}">${item.name}</a>`;
            })
            .join('')}
        </div>
      `;
    }

    // 3. Hero Section
    const heroKicker = document.querySelector('#detail-hero-kicker');
    if (heroKicker) heroKicker.textContent = s.hero.kicker;
    const heroTitle = document.querySelector('#detail-hero-title');
    if (heroTitle) heroTitle.textContent = s.hero.title;
    const heroLead = document.querySelector('#detail-hero-lead');
    if (heroLead) heroLead.textContent = s.hero.lead;

    // 4. Overview Section
    const ovKicker = document.querySelector('#detail-overview-kicker');
    if (ovKicker) ovKicker.textContent = s.overview.kicker;
    const ovTitle = document.querySelector('#detail-overview-title');
    if (ovTitle) ovTitle.textContent = s.overview.title;
    const ovLead = document.querySelector('#detail-overview-lead');
    if (ovLead) ovLead.textContent = s.overview.lead;

    const ovList = document.querySelector('#detail-overview-list');
    if (ovList) {
      ovList.innerHTML = s.overview.bullets.map(b => `<li>${b}</li>`).join('');
    }

    const ovCta = document.querySelector('#detail-overview-cta');
    if (ovCta) {
      ovCta.textContent = s.overview.ctaText;
      ovCta.setAttribute('href', s.overview.ctaUrl);
    }

    const ovImg = document.querySelector('#detail-overview-image');
    if (ovImg) {
      ovImg.src = s.overview.image;
      ovImg.alt = s.overview.imageAlt || s.name;
    }

    // 5. Signs / Assessment Section
    const signsKicker = document.querySelector('#detail-signs-kicker');
    if (signsKicker) signsKicker.textContent = s.signs.kicker;
    const signsTitle = document.querySelector('#detail-signs-title');
    if (signsTitle) signsTitle.textContent = s.signs.title;
    const signsLead = document.querySelector('#detail-signs-lead');
    if (signsLead) signsLead.textContent = s.signs.lead;

    const signsGrid = document.querySelector('#detail-signs-grid');
    if (signsGrid) {
      signsGrid.innerHTML = s.signs.items
        .map(
          item => `
        <article class="card reveal show">
          <div class="card-body">
            <span class="section-kicker">${item.kicker}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
        </article>
      `
        )
        .join('');
    }

    // 6. Five-Step Site Log
    const stepsKicker = document.querySelector('#detail-steps-kicker');
    if (stepsKicker) stepsKicker.textContent = s.steps.kicker;
    const stepsTitle = document.querySelector('#detail-steps-title');
    if (stepsTitle) stepsTitle.textContent = s.steps.title;
    const stepsLead = document.querySelector('#detail-steps-lead');
    if (stepsLead) stepsLead.textContent = s.steps.lead;

    const stepsGrid = document.querySelector('#detail-steps-grid');
    if (stepsGrid) {
      stepsGrid.innerHTML = s.steps.items
        .map(
          st => `
        <article class="card reveal show">
          <div class="card-body">
            <span class="section-kicker">${st.kicker}</span>
            <h3>${st.title}</h3>
            <p>${st.text}</p>
          </div>
        </article>
      `
        )
        .join('');
    }

    // 7. Included / Excluded Comparison
    const incList = document.querySelector('#detail-included-list');
    if (incList) {
      incList.innerHTML = s.comparison.included.map(i => `<li>${i}</li>`).join('');
    }
    const excList = document.querySelector('#detail-excluded-list');
    if (excList) {
      excList.innerHTML = s.comparison.excluded.map(i => `<li>${i}</li>`).join('');
    }

    // 8. Homeowner Prep Section
    const prepKicker = document.querySelector('#detail-prep-kicker');
    if (prepKicker) prepKicker.textContent = s.prep.kicker;
    const prepTitle = document.querySelector('#detail-prep-title');
    if (prepTitle) prepTitle.textContent = s.prep.title;
    const prepLead = document.querySelector('#detail-prep-lead');
    if (prepLead) prepLead.textContent = s.prep.lead;

    const prepBeforeImg = document.querySelector('#detail-prep-before-img');
    if (prepBeforeImg) {
      prepBeforeImg.src = s.prep.before.image;
      prepBeforeImg.alt = s.prep.before.alt;
    }
    const prepBeforeTitle = document.querySelector('#detail-prep-before-title');
    if (prepBeforeTitle) prepBeforeTitle.textContent = s.prep.before.title;
    const prepBeforeDesc = document.querySelector('#detail-prep-before-desc');
    if (prepBeforeDesc) prepBeforeDesc.textContent = s.prep.before.text;

    const prepAfterImg = document.querySelector('#detail-prep-after-img');
    if (prepAfterImg) {
      prepAfterImg.src = s.prep.after.image;
      prepAfterImg.alt = s.prep.after.alt;
    }
    const prepAfterTitle = document.querySelector('#detail-prep-after-title');
    if (prepAfterTitle) prepAfterTitle.textContent = s.prep.after.title;
    const prepAfterDesc = document.querySelector('#detail-prep-after-desc');
    if (prepAfterDesc) prepAfterDesc.textContent = s.prep.after.text;

    // 9. Indicative Pricing Table
    const priceKicker = document.querySelector('#detail-pricing-kicker');
    if (priceKicker) priceKicker.textContent = s.pricing.kicker;
    const priceTitle = document.querySelector('#detail-pricing-title');
    if (priceTitle) priceTitle.textContent = s.pricing.title;
    const priceLead = document.querySelector('#detail-pricing-lead');
    if (priceLead) priceLead.textContent = s.pricing.lead;

    const priceTable = document.querySelector('#detail-pricing-table');
    if (priceTable) {
      const ths = s.pricing.headers.map(h => `<th>${h}</th>`).join('');
      const trs = s.pricing.rows
        .map(
          r => `
        <tr>
          <td>${r[0]}</td>
          <td>${r[1]}</td>
          <td>${r[2]}</td>
          <td><a href="${r[3]}" class="btn btn-sm btn-ghost">Enquire</a></td>
        </tr>
      `
        )
        .join('');

      priceTable.innerHTML = `
        <thead><tr>${ths}</tr></thead>
        <tbody>${trs}</tbody>
      `;
    }

    const priceNotice = document.querySelector('#detail-pricing-notice');
    if (priceNotice) {
      priceNotice.innerHTML = s.pricing.notice;
    }

    // 10. FAQs Section
    const faqKicker = document.querySelector('#detail-faq-kicker');
    if (faqKicker) faqKicker.textContent = s.faqs.kicker;
    const faqTitle = document.querySelector('#detail-faq-title');
    if (faqTitle) faqTitle.textContent = s.faqs.title;
    const faqLead = document.querySelector('#detail-faq-lead');
    if (faqLead) faqLead.textContent = s.faqs.lead;

    const faqAccordion = document.querySelector('#detail-faq-accordion');
    if (faqAccordion) {
      faqAccordion.innerHTML = s.faqs.items
        .map(
          f => `
        <div class="faq-item">
          <button class="faq-trigger" type="button" aria-expanded="false">
            <span>${f.q}</span>
            <span class="faq-icon" aria-hidden="true">+</span>
          </button>
          <div class="faq-answer" hidden>
            <p>${f.a}</p>
          </div>
        </div>
      `
        )
        .join('');
    }

    // 11. Related Work Section
    const relatedGrid = document.querySelector('#detail-related-grid');
    if (relatedGrid && s.related) {
      relatedGrid.innerHTML = s.related
        .map(
          rel => `
        <article class="card reveal show">
          <img class="card-image" src="${rel.image}" alt="${rel.title}" loading="lazy">
          <div class="card-body">
            <span class="section-kicker">${rel.kicker}</span>
            <h3>${rel.title}</h3>
            <p>${rel.text}</p>
            <a class="btn btn-ghost" href="${rel.link}">${rel.cta}</a>
          </div>
        </article>
      `
        )
        .join('');
    }

    // 12. Final CTA Band
    const ctaBook = document.querySelector('#detail-final-book');
    if (ctaBook) {
      ctaBook.href = `contact.html?service=${encodeURIComponent(s.name)}`;
    }
  }

  // Accordion click delegation so dynamically rendered FAQs always expand/collapse smoothly
  document.addEventListener('click', e => {
    const trigger = e.target.closest('#detail-faq-accordion .faq-trigger');
    if (!trigger) return;
    const answer = trigger.nextElementSibling;
    if (!answer) return;
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!isExpanded));
    answer.hidden = isExpanded;
    const icon = trigger.querySelector('.faq-icon');
    if (icon) {
      icon.textContent = isExpanded ? '+' : '−';
    }
  });

  // Handle service switcher chip clicks seamlessly
  document.addEventListener('click', e => {
    const chip = e.target.closest('#service-switcher-bar .service-chip');
    if (!chip) return;
    const slug = chip.dataset.slug;
    if (!slug) return;
    e.preventDefault();
    const newUrl = `service-details.html?service=${slug}`;
    window.history.pushState({ service: slug }, '', newUrl);
    renderServiceDetails(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('popstate', e => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('service') || 'tank-pumping';
    renderServiceDetails(slug);
  });

  document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('service') || 'tank-pumping';
    renderServiceDetails(slug);
  });
})();
