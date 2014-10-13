module.exports = function() {
    'use strict';

    this.heading = element(by.css('h1'));
    this.addMovieButton = element(by.css('.btn-primary'));
    this.movieTitles = element.all(by.binding('movie.title'));
    this.titleHeading = element(by.css('tr:nth-child(2) th:first-child a'));
    this.firstMovie = element(by.css('tbody tr:first-child td:first-child')); //2. Row of the table is the first Titl
    this.lastMovie = element(by.css('tr:last-child td:first-child')); //Last row of the table is the last Title

    this.open = function() {
        browser.get('/movies');
    };

    this.navigateToAddMovie = function() {
        this.addMovieButton.click();
    };

    this.filterByTitle = function() {
        this.titleHeading.click();
        this.firstMovie = element(by.css('tbody tr:first-child td:first-child')); //2. Row of the table is the first
        this.lastMovie = element(by.css('tr:last-child td:first-child')); //Last row of the table is the last Title

    };




};
