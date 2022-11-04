'use strict';

function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);


  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');


  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts .post.active');

  for(let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);

  /* [DONE] add class 'active' to the correct article */

  targetArticle.classList.add('active');
}



const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector ='.post-author',
  optTagsListSelector ='.tags .list';



//Generating Title List -generujemy liste tytolow:



function generateTitleLinks() {

  /* [DONE] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /*[DONE] for each article */
  const articles = document.querySelectorAll(optArticleSelector);

  let html ='';

  for (let article of articles) {

    /* [DONE] get the article id */
    const articleId = article.getAttribute('id');

    /*[DONE] find the title element */
    /*[DONE] get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /*[DONE] create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);

    /*[DONE] insert link into titleList */
    html = html +linkHTML;
  }
  console.log(html);

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  console.log(links);

  for(let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();


//GENERATE TAGS -Generujemy tagi:



function generateTags() {

  /* [DONE] find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /* [DONE] START LOOP: for every article: */

  for (let article of articles) {

    /* [DONE] find tags wrapper */

    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    tagsWrapper.innerHTML = '';

    /* [DONE] make html variable with empty string */

    let html ='';

    /* [DONE] get tags from data-tags attribute */

    const articleTags  = article.getAttribute('data-tags');
    console.log(articleTags);

    /* [DONE] split tags into array */

    const articleTagsArray = articleTags.split(' ');
    //rice rissotto sushi cabbage_rolls -> ['rice', 'rissotto', 'sushi', 'cabbage_rolls'];
    //rozdzielamy tagi
    console.log(articleTagsArray);

    /* [DONE] START LOOP: for each tag */

    for(let tag of articleTagsArray) {

      /* [DONE] generate HTML of the link */

      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      //<li><a href="#tag-rice">rice</a></li>
      console.log(linkHTML);

      /* [DONE] add generated code to html variable */
      html = html + linkHTML;
    /* END LOOP: for each tag */
    }
    /* [DONE] insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;
  /* [DONE] END LOOP: for every article: */
  }
}
generateTags();


function tagClickHandler(event) {

  /* [DONE] prevent default action for this event */

  event.preventDefault();

  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;

  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');

  /* [DONE] make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-', '');

  /* [DONE] find all tag links with class active */

  const tagLinksActives = document.querySelectorAll('a.active[href^="#tag-"]');

  /* [DONE] START LOOP: for each active tag link */

  for (let tagLinksActive of tagLinksActives) {

    /* [DONE] remove class active */

    tagLinksActive.classList.remove('active');

  /* [DONE] END LOOP: for each active tag link */
  }
  /* [DONE] find all tag links with "href" attribute equal to the "href" constant */

  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');

  /* [DONE] START LOOP: for each found tag link */

  for (let tagLink of tagLinks) {

    /* [DONE] add class active */

    tagLink.classList.add('active');

    /* [DONE] END LOOP: for each found tag link */
  }
  /* [DONE] execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-tags~="' + tag + '"]');

}

function addClickListenersToTags() {
  /* [DONE] find all links to tags */

  const allLinksToTags = document.querySelectorAll('a.[href^="#tag-"]');

  /* [DONE] START LOOP: for each link */

  for (let allLinksToTag of allLinksToTags) {

    /* [DONE] add tagClickHandler as event listener for that link */

    allLinksToTag.addEventListener('click', tagClickHandler);

  /* [DONE] END LOOP: for each link */
  }
}

addClickListenersToTags();



// [IN PROGRESS]  Add authors to artickels

// Funkcja opiera sie na funkcji generateTags
// Nie dodajemy funkcji "split" ani petli iterujacej po tagach

function generateAuthors() {

  /*  find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /*  START LOOP: for every article: */

  for (let article of articles) {

    /*  find author wrapper */

    const authorWrapper = article.querySelector(optArticleAuthorSelector);
    authorWrapper.innerHTML = html;

    /*  make html variable with empty string */

    let html ='';

    /*  get author from data-author attribute */

    const articleAuthor  = article.getAttribute('data-author');
    console.log(articleAuthor);

    /* [DONE] insert HTML of all the links into the tags wrapper */
    authorWrapper.innerHTML = html;
  /* [DONE] END LOOP: for every article: */
  }
}
generateAuthors();



// [IN PROGRESS]
//Dodajemy funkcje authorClickHandler wzorujac sie na tagClickHandler:

function authorClickHandler(event) {

  /* [DONE] prevent default action for this event */

  event.preventDefault();

  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;

  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');

  /* [DONE] make a new constant "tag" and extract tag from the "href" constant */

  const author = href.replace('#author-', '');

  /* [DONE] find all tag links with class active */

  const authorLinksActives = document.querySelectorAll('a.active[href^="#author-"]');

  /* [DONE] START LOOP: for each active tag link */

  for (let authorLinksActive of authorLinksActives) {

    /* [DONE] remove class active */

    authorLinksActive.classList.remove('active');

  /* [DONE] END LOOP: for each active tag link */
  }
  /* [DONE] find all tag links with "href" attribute equal to the "href" constant */

  const authorLinks = document.querySelectorAll('a[href="' + href + '"]');

  /* [DONE] START LOOP: for each found tag link */

  for (let authorLink of authorLinks) {

    /* [DONE] add class active */

    authorLink.classList.add('active');

    /* [DONE] END LOOP: for each found tag link */
  }
  /* [DONE] execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-author="' + author + '"]');

}

// [IN PROGRESS]
// Dodajemy funkcje addClickListenersToAuthors wzorujac sie na addClickListenersToTags:

function addClickListenersToAuthors() {
  /* [DONE] find all links to tags */

  const authorLinks= document.querySelectorAll('a.[href^="#author-"]');

  /* [DONE] START LOOP: for each link */

  for (let author of authorLinks) {

    /* [DONE] add tagClickHandler as event listener for that link */

    author.addEventListener('click', authorClickHandler);

  /* [DONE] END LOOP: for each link */
  }
}

addClickListenersToAuthors();

