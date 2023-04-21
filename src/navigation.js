window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log({location});

    if (location.hash.startsWith('#trends')) {
        TrendsPage();
    } else if (location.hash.startsWith('#search=')) {
        searchPage();
    } else if (location.hash.startsWith('#movie=')) {
        moviesDetailsPage();
    } else if (location.hash.startsWith('#category=')) {
        categoriesPage();
    } else {
        homePage();
    }

    location.hash
}

function homePage() {
    console.log('HOME');


    getTrendingMoviesPreview();
    getCategoriesPreview();
    getTVShowPreview ();
}

function categoriesPage() {
    console.log('CATEGORY');

    
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add ('inactive');
}

function moviesDetailsPage() {
    console.log('MOVIES');
}

function searchPage() {
    console.log('SEARCH');
}

function TrendsPage() {
    console.log('TRENDS');
}