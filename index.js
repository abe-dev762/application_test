var xhr = new XMLHttpRequest();
var url = 'health_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');
}

articles.forEach(function(article) {
    var articlesDiv = document.createElement('div');
    articlesDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var description = document.createElement('p');
    description.textContent = article.description;

    var waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Ways to Achieve';

    var waysList = document.createElement('ul');
    article.ways_to_achieve.forEach(function(way) {
        var listItem = document.create('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
    });

    var benefitsHeader = document.createElement('h3');
    benefitsHeader.textContent = 'Benefits:';

    var benefitsList = document.createElement('ul');
    article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
    });

    articlesDiv.appendChild(title);
      articlesDiv.appendChild(description);
      articlesDiv.appendChild(waysHeader);
      articlesDiv.appendChild(waysList);
      articlesDiv.appendChild(benefitsHeader);
      articlesDiv.appendChild(benefitsList);
      articlesDiv.appendChild(articlesDiv);
    
});

xhr.send();

