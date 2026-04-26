document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if(mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const searchInput = document.getElementById('search-input');
    
    if(tabBtns && searchInput) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                if(btn.dataset.type === 'number') {
                    searchInput.placeholder = 'أدخل رقم الهاتف (مثال: 05XXXXXXXX)...';
                    searchInput.type = 'tel';
                } else {
                    searchInput.placeholder = 'أدخل الاسم للبحث...';
                    searchInput.type = 'text';
                }
            });
        });
    }

    // Search functionality (Simulated)
    const searchForm = document.getElementById('search-form');
    const loadingSpinner = document.getElementById('loading-spinner');
    const searchResults = document.getElementById('search-results');
    
    if(searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const query = searchInput.value.trim();
            if(!query) return;

            // Hide previous results and show spinner
            searchResults.style.display = 'none';
            loadingSpinner.style.display = 'block';

            // Simulate API call
            setTimeout(() => {
                loadingSpinner.style.display = 'none';
                searchResults.style.display = 'block';
                
                const activeTab = document.querySelector('.tab-btn.active').dataset.type;
                const resultCard = searchResults.querySelector('.result-card');
                
                // Simulate dummy data response based on type
                if(activeTab === 'number') {
                    resultCard.innerHTML = `
                        <h3>تم العثور على نتيجة!</h3>
                        <p><strong>الرقم:</strong> ${query}</p>
                        <p><strong>الاسم المحتمل:</strong> شركة وهمية / مستخدم مسجل</p>
                        <p><strong>المنطقة:</strong> المملكة العربية السعودية</p>
                    `;
                } else {
                    resultCard.innerHTML = `
                        <h3>تم العثور على نتائج!</h3>
                        <p><strong>الاسم:</strong> ${query}</p>
                        <p><strong>الأرقام المحتملة:</strong> 0512345678, 0587654321</p>
                    `;
                }
            }, 1500); // 1.5 second loading delay
        });
    }
});
