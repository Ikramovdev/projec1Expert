document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Default holatda dark mode'ni yoqamiz
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
        // Agar saqlangan tema bo'lmasa, dark mode'ni o'rnatamiz
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        // Agar saqlangan tema bo'lsa, uni qo'llaymiz
        body.classList.toggle('dark-mode', savedTheme === 'dark');
    }

    // Theme toggle click handler
    themeToggle.addEventListener('click', () => {
        // Add transition class for smooth color changes
        body.classList.add('theme-transition');
        
        // Toggle dark mode
        body.classList.toggle('dark-mode');
        
        // Save preference
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
        
        // Remove transition class after animation
        setTimeout(() => {
            body.classList.remove('theme-transition');
        }, 500);
    });
}); 