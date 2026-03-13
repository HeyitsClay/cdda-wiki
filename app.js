// ========================================
// SURVIVOR'S TERMINAL // Core Systems
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // State
    const state = {
        currentSection: 'introduction',
        searchQuery: '',
        sidebarOpen: false
    };

    // DOM Elements
    const contentBody = document.getElementById('contentBody');
    const breadcrumb = document.getElementById('breadcrumb');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.getElementById('sidebar');
    const searchTrigger = document.getElementById('searchTrigger');
    const searchOverlay = document.getElementById('searchOverlay');
    const globalSearch = document.getElementById('globalSearch');
    const closeSearch = document.getElementById('closeSearch');
    const searchResults = document.getElementById('searchResults');
    const randomPage = document.getElementById('randomPage');
    const printPage = document.getElementById('printPage');

    // Render Content with Terminal Aesthetic
    function renderContent(sectionKey) {
        const section = wikiData[sectionKey];
        if (!section) return;

        state.currentSection = sectionKey;

        const contentHTML = `
            <article class="wiki-article">
                <header class="article-header">
                    <h1>${escapeHtml(section.title)}</h1>
                    ${section.subtitle ? `<p class="article-subtitle">${escapeHtml(section.subtitle)}</p>` : ''}
                    ${section.tags ? `
                        <div class="article-meta">
                            <span>// TAGS: ${section.tags.map(t => t.toUpperCase()).join(', ')}</span>
                        </div>
                    ` : ''}
                </header>
                ${section.content}
            </article>
        `;

        // Glitch/fade transition
        contentBody.style.opacity = '0';
        contentBody.style.transform = 'translateY(10px)';
        
        requestAnimationFrame(() => {
            contentBody.innerHTML = contentHTML;
            
            requestAnimationFrame(() => {
                contentBody.style.opacity = '1';
                contentBody.style.transform = 'translateY(0)';
            });
        });

        updateBreadcrumb(section);
        updateActiveNavLink(sectionKey);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function updateBreadcrumb(section) {
        const typePath = {
            'home': 'ROOT',
            'guide': 'GUIDES',
            'reference': 'ARCHIVE'
        };
        
        breadcrumb.innerHTML = `
            <span class="breadcrumb-item" data-section="introduction">ROOT</span>
            <span class="breadcrumb-separator">/</span>
            <span class="breadcrumb-item">${typePath[section.type] || 'DATA'}</span>
            <span class="breadcrumb-separator">/</span>
            <span class="breadcrumb-item" style="color: var(--accent);">${escapeHtml(section.title).toUpperCase().replace(/ /g, '_')}</span>
        `;
    }

    function updateActiveNavLink(sectionKey) {
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === sectionKey);
        });
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Navigation
    document.addEventListener('click', (e) => {
        const link = e.target.closest('[data-section]');
        if (!link) return;
        
        e.preventDefault();
        const section = link.dataset.section;
        
        if (section && wikiData[section]) {
            renderContent(section);
            
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
            
            history.pushState(null, null, `#${section}`);
        }
    });

    // Mobile menu
    mobileMenuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Close sidebar on outside click (mobile)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(e.target) && 
            !mobileMenuToggle.contains(e.target) &&
            sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });

    // Search System
    function openSearch() {
        searchOverlay.classList.add('active');
        globalSearch.value = '';
        searchResults.innerHTML = '<div class="result-item"><div class="result-preview" style="text-align: center; padding: 40px; color: var(--text-muted);">Enter query...</div></div>';
        
        requestAnimationFrame(() => {
            globalSearch.focus();
        });
    }

    function closeSearchModal() {
        searchOverlay.classList.remove('active');
    }

    function performSearch(query) {
        if (!query || query.length < 2) {
            searchResults.innerHTML = '<div class="result-item"><div class="result-preview" style="text-align: center; padding: 40px; color: var(--text-muted);">Type to search database...</div></div>';
            return;
        }

        const results = [];
        const lowerQuery = query.toLowerCase();

        Object.entries(wikiData).forEach(([key, section]) => {
            const titleMatch = section.title.toLowerCase().includes(lowerQuery);
            const contentMatch = section.content.toLowerCase().includes(lowerQuery);
            
            if (titleMatch) {
                results.push({
                    key,
                    title: section.title,
                    preview: section.subtitle || 'DATA_ENTRY',
                    relevance: 10
                });
            } else if (contentMatch) {
                const contentLower = section.content.toLowerCase();
                const index = contentLower.indexOf(lowerQuery);
                const start = Math.max(0, index - 50);
                const end = Math.min(contentLower.length, index + 80);
                let preview = section.content.substring(start, end)
                    .replace(/<[^>]*>/g, ' ')
                    .replace(/\s+/g, ' ')
                    .trim();
                
                if (start > 0) preview = '...' + preview;
                if (end < section.content.length) preview = preview + '...';
                
                results.push({
                    key,
                    title: section.title,
                    preview,
                    relevance: 5
                });
            }
        });

        results.sort((a, b) => b.relevance - a.relevance);

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="result-item"><div class="result-preview" style="text-align: center; padding: 40px; color: var(--text-muted);">No records found</div></div>';
        } else {
            searchResults.innerHTML = results.slice(0, 6).map(result => `
                <div class="result-item" data-section="${result.key}">
                    <div class="result-title">${highlightQuery(escapeHtml(result.title), query)}</div>
                    <div class="result-preview">${highlightQuery(escapeHtml(result.preview), query)}</div>
                </div>
            `).join('');
        }
    }

    function highlightQuery(text, query) {
        const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    function escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // Search events
    searchTrigger.addEventListener('click', openSearch);
    closeSearch.addEventListener('click', closeSearchModal);
    
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) closeSearchModal();
    });

    globalSearch.addEventListener('input', (e) => {
        performSearch(e.target.value.trim());
    });

    searchResults.addEventListener('click', (e) => {
        const resultItem = e.target.closest('.result-item');
        if (resultItem?.dataset.section) {
            renderContent(resultItem.dataset.section);
            closeSearchModal();
            history.pushState(null, null, `#${resultItem.dataset.section}`);
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
        
        if (e.key === 'Escape') {
            if (searchOverlay.classList.contains('active')) {
                closeSearchModal();
            } else if (sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        }
    });

    // Random Entry
    randomPage.addEventListener('click', () => {
        const sections = Object.keys(wikiData);
        const randomSection = sections[Math.floor(Math.random() * sections.length)];
        renderContent(randomSection);
        history.pushState(null, null, `#${randomSection}`);
    });

    // Print
    printPage.addEventListener('click', () => {
        window.print();
    });

    // Back to Top
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>';
    backToTop.setAttribute('aria-label', 'Return to top');
    document.body.appendChild(backToTop);

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            backToTop.classList.toggle('visible', window.scrollY > 500);
        }, 50);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Handle URL Hash
    function handleHash() {
        const hash = window.location.hash.slice(1);
        if (hash && wikiData[hash]) {
            renderContent(hash);
        } else {
            renderContent('introduction');
        }
    }

    window.addEventListener('hashchange', handleHash);
    window.addEventListener('popstate', handleHash);

    // Initialize
    handleHash();
    contentBody.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
});
