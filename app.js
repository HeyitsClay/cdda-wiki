// ========================================
// CDDA Ultimate Wiki - Sleek Minimal App
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // ========================================
    // State
    // ========================================
    const state = {
        currentSection: 'introduction',
        searchQuery: '',
        sidebarOpen: false
    };

    // ========================================
    // DOM Elements
    // ========================================
    const contentBody = document.getElementById('contentBody');
    const breadcrumb = document.getElementById('breadcrumb');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.getElementById('sidebar');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const globalSearch = document.getElementById('globalSearch');
    const closeSearch = document.getElementById('closeSearch');
    const searchResults = document.getElementById('searchResults');
    const randomPage = document.getElementById('randomPage');
    const printPage = document.getElementById('printPage');

    // ========================================
    // Render Content
    // ========================================
    function renderContent(sectionKey) {
        const section = wikiData[sectionKey];
        if (!section) {
            console.error(`Section "${sectionKey}" not found`);
            return;
        }

        state.currentSection = sectionKey;

        const contentHTML = `
            <article class="wiki-article">
                <header class="article-header">
                    <h1>${escapeHtml(section.title)}</h1>
                    ${section.subtitle ? `<p class="article-subtitle">${escapeHtml(section.subtitle)}</p>` : ''}
                    ${section.tags ? `
                        <div class="article-tags">
                            ${section.tags.map(tag => `<span class="tag ${tag}">${tag}</span>`).join('')}
                        </div>
                    ` : ''}
                </header>
                ${section.content}
            </article>
        `;

        // Fade transition
        contentBody.style.opacity = '0';
        contentBody.style.transform = 'translateY(8px)';
        
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
        const typeLabels = {
            'home': 'Home',
            'guide': 'Guides',
            'reference': 'Reference'
        };
        
        breadcrumb.innerHTML = `
            <span class="breadcrumb-item"><a href="#introduction" data-section="introduction">Home</a></span>
            <span class="breadcrumb-item">${typeLabels[section.type] || 'Page'}</span>
            <span class="breadcrumb-item">${escapeHtml(section.title)}</span>
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

    // ========================================
    // Navigation
    // ========================================
    function handleNavigation(e) {
        const link = e.target.closest('[data-section]');
        if (!link) return;
        
        e.preventDefault();
        const section = link.dataset.section;
        
        if (section && wikiData[section]) {
            renderContent(section);
            
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
            
            // Update URL hash
            history.pushState(null, null, `#${section}`);
        }
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('.nav-link') || e.target.closest('.breadcrumb-item a') || 
            e.target.closest('.section-card')) {
            handleNavigation(e);
        }
    });

    // Mobile menu
    mobileMenuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(e.target) && 
            !mobileMenuToggle.contains(e.target) &&
            sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });

    // ========================================
    // Search
    // ========================================
    function openSearch() {
        searchOverlay.classList.add('active');
        globalSearch.value = '';
        searchResults.innerHTML = '<div class="search-result-item"><div class="search-result-preview" style="text-align: center; padding: var(--space-8);">Type to search...</div></div>';
        
        requestAnimationFrame(() => {
            globalSearch.focus();
        });
    }

    function closeSearchModal() {
        searchOverlay.classList.remove('active');
    }

    function performSearch(query) {
        if (!query || query.length < 2) {
            searchResults.innerHTML = '<div class="search-result-item"><div class="search-result-preview" style="text-align: center; padding: var(--space-8);">Type at least 2 characters...</div></div>';
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
                    preview: section.subtitle || 'Section',
                    relevance: 10
                });
            } else if (contentMatch) {
                const contentLower = section.content.toLowerCase();
                const index = contentLower.indexOf(lowerQuery);
                const start = Math.max(0, index - 60);
                const end = Math.min(contentLower.length, index + 90);
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
            searchResults.innerHTML = '<div class="search-result-item"><div class="search-result-preview" style="text-align: center; padding: var(--space-8);">No results found</div></div>';
        } else {
            searchResults.innerHTML = results.slice(0, 8).map(result => `
                <div class="search-result-item" data-section="${result.key}">
                    <div class="search-result-title">${highlightQuery(escapeHtml(result.title), query)}</div>
                    <div class="search-result-preview">${highlightQuery(escapeHtml(result.preview), query)}</div>
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

    // Search event listeners
    searchBtn.addEventListener('click', openSearch);
    searchInput.addEventListener('click', openSearch);
    searchInput.addEventListener('focus', openSearch);
    closeSearch.addEventListener('click', closeSearchModal);
    
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) closeSearchModal();
    });

    globalSearch.addEventListener('input', (e) => {
        performSearch(e.target.value.trim());
    });

    searchResults.addEventListener('click', (e) => {
        const resultItem = e.target.closest('.search-result-item');
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

    // ========================================
    // Random Page & Print
    // ========================================
    randomPage.addEventListener('click', () => {
        const sections = Object.keys(wikiData);
        const randomSection = sections[Math.floor(Math.random() * sections.length)];
        renderContent(randomSection);
        history.pushState(null, null, `#${randomSection}`);
    });

    printPage.addEventListener('click', () => {
        window.print();
    });

    // ========================================
    // Back to Top Button
    // ========================================
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>';
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            backToTop.classList.toggle('visible', window.scrollY > 400);
        }, 50);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ========================================
    // Handle URL Hash
    // ========================================
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

    // ========================================
    // Initialize
    // ========================================
    handleHash();

    // Set transition styles
    contentBody.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
});
