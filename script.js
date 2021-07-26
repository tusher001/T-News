console.log('Welcome to T news');

let newsAccordion = document.getElementById('newsAccordion');

//create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET','https://newsapi.org/v2/top-headlines?country=us&apiKey=5260006e34984d8096b0f727c28700d6', true);


//what to do when response is ready
xhr.onload = function(){
    if(this.status ===200){
        let json = JSON.parse(this.responseText);
        let article = json.articles;
        // console.log(article);
        let newsHtml = '';
        article.forEach(function(element,index) {
             console.log(element, index);
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h4 class="mb-0">
                                  <span class="highlight"> Breaking News ${index+1} :</span> ${element.title}</button>
                                </h4>
                            </div>

                            <div id="collapse${index}" class="collapse show"             aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body">
                                    <b>Description :</b> ${element.description} <a class="readMore" target="_blank" href="${element.url}">Read more</a>
                                </div>
                            </div>
                        </div>`
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else{
        console.log('Some error occurred');
    }
}

//request send
xhr.send();