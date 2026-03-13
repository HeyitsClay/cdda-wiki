// ========================================
// CDDA Ultimate Wiki - Application Logic
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // ========================================
    // State Management
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
    // Content Rendering
    // ========================================
    function renderContent(sectionKey) {
        const section = wikiData[sectionKey];
        if (!section) {
            console.error(`Section "${sectionKey}" not found`);
            return;
        }

        // Update state
        state.currentSection = sectionKey;

        // Build content HTML
        const contentHTML = `
            <article class="wiki-article">
                <header class="article-header">
                    <h1>${section.title}</h1>
                    ${section.subtitle ? `<p class="article-subtitle">${section.subtitle}</p>` : ''}
                    ${section.tags ? `
                        <div class="article-tags">
                            ${section.tags.map(tag => `<span class="tag ${tag}">${tag}</span>`).join('')}
                        </div>
                    ` : ''}
                </header>
                ${section.content}
            </article>
        `;

        // Render content with fade effect
        contentBody.style.opacity = '0';
        setTimeout(() => {
            contentBody.innerHTML = contentHTML;
            contentBody.style.opacity = '1';
            
            // Update breadcrumb
            updateBreadcrumb(section);
            
            // Update active nav link
            updateActiveNavLink(sectionKey);
            
            // Scroll to top
            window.scrollTo(0, 0);
        }, 150);
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
            <span class="breadcrumb-item">${section.title}</span>
        `;
    }

    function updateActiveNavLink(sectionKey) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.section === sectionKey) {
                link.classList.add('active');
            }
        });
    }

    // ========================================
    // Navigation
    // ========================================
    function handleNavigation(e) {
        e.preventDefault();
        const section = e.target.dataset.section;
        if (section && wikiData[section]) {
            renderContent(section);
            // Close mobile sidebar
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // Handle breadcrumb clicks
    breadcrumb.addEventListener('click', (e) => {
        if (e.target.dataset.section) {
            handleNavigation(e);
        }
    });

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // ========================================
    // Search Functionality
    // ========================================
    function openSearch() {
        searchOverlay.classList.add('active');
        globalSearch.value = '';
        globalSearch.focus();
        searchResults.innerHTML = '';
    }

    function closeSearchModal() {
        searchOverlay.classList.remove('active');
    }

    function performSearch(query) {
        if (!query || query.length < 2) {
            searchResults.innerHTML = '<div class="search-result-item"><div class="search-result-preview">Type at least 2 characters to search...</div></div>';
            return;
        }

        const results = [];
        const lowerQuery = query.toLowerCase();

        Object.entries(wikiData).forEach(([key, section]) => {
            // Search in title
            if (section.title.toLowerCase().includes(lowerQuery)) {
                results.push({
                    key,
                    title: section.title,
                    preview: section.subtitle || 'Section',
                    relevance: 10
                });
            }
            // Search in content
            else if (section.content.toLowerCase().includes(lowerQuery)) {
                const contentLower = section.content.toLowerCase();
                const index = contentLower.indexOf(lowerQuery);
                const start = Math.max(0, index - 50);
                const end = Math.min(contentLower.length, index + 100);
                const preview = section.content.substring(start, end).replace(/<[^>]*>/g, '');
                
                results.push({
                    key,
                    title: section.title,
                    preview: `...${preview}...`,
                    relevance: 5
                });
            }
        });

        // Sort by relevance
        results.sort((a, b) => b.relevance - a.relevance);

        // Render results
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item"><div class="search-result-preview">No results found</div></div>';
        } else {
            searchResults.innerHTML = results.map(result => `
                <div class="search-result-item" data-section="${result.key}">
                    <div class="search-result-title">${highlightQuery(result.title, query)}</div>
                    <div class="search-result-preview">${highlightQuery(result.preview, query)}</div>
                </div>
            `).join('');
        }
    }

    function highlightQuery(text, query) {
        const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
        return text.replace(regex, '<mark style="background: var(--color-accent); color: white; padding: 2px 4px; border-radius: 2px;">$1</mark>');
    }

    function escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // Search event listeners
    searchBtn.addEventListener('click', openSearch);
    searchInput.addEventListener('focus', openSearch);
    closeSearch.addEventListener('click', closeSearchModal);
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) closeSearchModal();
    });

    globalSearch.addEventListener('input', (e) => {
        performSearch(e.target.value);
    });

    searchResults.addEventListener('click', (e) => {
        const resultItem = e.target.closest('.search-result-item');
        if (resultItem && resultItem.dataset.section) {
            renderContent(resultItem.dataset.section);
            closeSearchModal();
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K to open search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
        // Escape to close search
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            closeSearchModal();
        }
    });

    // ========================================
    // Random Page
    // ========================================
    randomPage.addEventListener('click', () => {
        const sections = Object.keys(wikiData);
        const randomSection = sections[Math.floor(Math.random() * sections.length)];
        renderContent(randomSection);
    });

    // ========================================
    // Print Page
    // ========================================
    printPage.addEventListener('click', () => {
        window.print();
    });

    // ========================================
    // Back to Top Button
    // ========================================
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    backToTop.title = 'Back to Top';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

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

    // ========================================
    // Initialize
    // ========================================
    handleHash();

    // Add content transition styles
    contentBody.style.transition = 'opacity 0.15s ease';
});
