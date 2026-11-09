(() => {
  'use strict';

  function resolvePostSlug(raw) {
    if (!raw) return 'frequency';
    const s = raw.toLowerCase().trim();
    const data = window.TW_BLOGS_DATA || {};
    if (data[s]) return s;

    // Aliases
    if (s.includes('freq') || s.includes('how-often') || s.includes('often')) return 'frequency';
    if (s.includes('warn') || s.includes('sign') || s.includes('seven')) return 'warning';
    if (s.includes('monsoon') || s.includes('rain')) return 'monsoon';
    if (s.includes('flush') || s.includes('toilet') || s.includes('wipe')) return 'flush';
    if (s.includes('purchase') || s.includes('buy') || s.includes('home')) return 'purchase';
    if (s.includes('truck') || s.includes('visit') || s.includes('vacuum')) return 'truck';

    return 'frequency';
  }

  function renderBlogDetails(slug) {
    const data = window.TW_BLOGS_DATA;
    if (!data) return;

    const postKey = resolvePostSlug(slug);
    const post = data[postKey];
    if (!post) return;

    // 1. Update Title and Meta Tags
    document.title = `${post.title} | TankWise Blog`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', post.summary || post.lead);

    // 2. Hero Elements
    const metaEl = document.querySelector('#post-meta');
    if (metaEl) metaEl.textContent = `${post.category} • ${post.readTime} • ${post.date}`;

    const titleEl = document.querySelector('#post-title');
    if (titleEl) titleEl.textContent = post.title;

    const leadEl = document.querySelector('#post-lead');
    if (leadEl) leadEl.textContent = post.lead;

    const authorNameEl = document.querySelector('#post-author-name');
    if (authorNameEl) authorNameEl.textContent = post.author;

    const authorRoleEl = document.querySelector('#post-author-role');
    if (authorRoleEl) authorRoleEl.textContent = post.authorRole;

    const imgEl = document.querySelector('#post-image');
    if (imgEl) {
      imgEl.src = post.image;
      imgEl.alt = post.title;
    }

    // 3. Key Takeaway / Executive Summary
    const summaryEl = document.querySelector('#post-summary');
    if (summaryEl) summaryEl.textContent = post.summary;

    // 4. Main Body Content
    const bodyEl = document.querySelector('#post-body');
    if (bodyEl) bodyEl.innerHTML = post.content;

    // 5. Checklist
    const checklistWrap = document.querySelector('#post-checklist');
    if (checklistWrap && post.checklist) {
      checklistWrap.innerHTML = post.checklist.map(item => `<li>${item}</li>`).join('');
    }

    // 6. Related Posts
    const relatedWrap = document.querySelector('#post-related-grid');
    if (relatedWrap && post.related) {
      relatedWrap.innerHTML = post.related
        .map(
          rel => `
        <article class="card blog-card reveal show">
          <img src="${rel.image}" alt="${rel.title}" class="card-image" loading="lazy">
          <div class="card-body">
            <h3>${rel.title}</h3>
            <a href="blog-details.html?post=${rel.slug}" class="btn btn-ghost" style="margin-top:auto">Read Article</a>
          </div>
        </article>
      `
        )
        .join('');
    }
  }

  window.addEventListener('popstate', () => {
    const params = new URLSearchParams(window.location.search);
    const postSlug = params.get('post') || 'frequency';
    renderBlogDetails(postSlug);
  });

  document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const postSlug = params.get('post') || 'frequency';
    renderBlogDetails(postSlug);
  });
})();
