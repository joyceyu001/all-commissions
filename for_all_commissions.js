function showCategory(categoryId, element) {
    // 1. Hide all category sections
    document.querySelectorAll('.category-section').forEach(section => {
        section.classList.remove('active');
    });

    // 2. Show the selected section
    document.getElementById(categoryId).classList.add('active');

    // 3. Remove 'active' class from all sidebar items
    document.querySelectorAll('.side-nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // 4. Highlight the clicked sidebar item
    element.classList.add('active');
}