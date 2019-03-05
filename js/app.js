/*
  Please add all Javascript code to this file.
*/
// 'https://newsapi.org/v2/top-headlines?country=us&apiKey=66305fde95b14a5b9999b7fe4ac5d524'
function newsFeed(url){

  fetch(url)
  .then(res => res.json())
  .then(responseJson => {
    resultsArray = responseJson.articles;
    var main = document.getElementById("main");
    resultsArray.forEach(el => {
      var article = document.createElement("article");
      article.setAttribute("class", "article");

      // Creating Image Section, Image Element and appending it to the section
      var imgSection = document.createElement("section");
      imgSection.setAttribute("class", "featuredImage");
      var img = document.createElement("img");
      img.setAttribute("src", `${el.urlToImage}`);
      img.setAttribute("alt", "Thumbnail")
      imgSection.appendChild(img);
      article.appendChild(imgSection);

      //Creating Content Section
      var content = document.createElement("section");
      content.setAttribute("class", "articleContent");
      var a = document.createElement("a");
      a.setAttribute("href", "#")
      var h3 = document.createElement("h3");
      h3.setAttribute("class", "title")
      var h6 = document.createElement("h6");
      var title = document.createTextNode(`${el.title}`);
      var description = document.createTextNode(`${el.description}`);

      //adding hidden url so we can retrieve it later
      var articleUrl = document.createTextNode(`${el.url}`);
      var link = document.createElement("p");
      link.appendChild(articleUrl);
      link.setAttribute("class", "hidden");

      h3.appendChild(title);
      a.appendChild(h3);
      h6.appendChild(description);
      content.appendChild(a);
      content.appendChild(h6);
      content.appendChild(link);
      article.appendChild(content);

      var randomViews = Math.floor(Math.random() * 1000)
      //Creating Views Section
      var views = document.createElement("section");
      views.setAttribute("class", "impressions");
      var orderOfViews = document.createTextNode(`${randomViews}`); 
      views.appendChild(orderOfViews);
      article.appendChild(views);
      
      //Adding clearfix div
      var clearfixDiv = document.createElement("div")
      clearfixDiv.setAttribute("class", "clearfix");
      article.appendChild(clearfixDiv);

      main.appendChild(article);

      
      $('.articleContent').click(function(){
          console.log("header clicked");
          $("#popUp").attr("class", "");
          var thisTitle = $(this).find("h3").text();
          var thisDesc = $(this).find("h6").text();
          var thisUrl = $(this).find("p").text();

          console.log(thisTitle);
          console.log(thisDesc);
          console.log(thisUrl);
          
          $("#popUp h1").replaceWith("<h1>"+$(this).find("h3").text()+"</h1>");
          $('#popUp p').replaceWith("<p>"+$(this).find("h6").text()+"</p>");
          $('#popUpAction').attr('href', thisUrl)
          
      })

      $('.closePopUp').click(function() {
        $("#popUp").attr("class", "loader hidden");
      });
    })

    
  }).catch(err => {
    alert("Cannot load Feeds")
  })

  // $('#loading').hide();

}

function nyTimes(url){

  fetch(url)
  .then(res => res.json())
  .then(responseJson => {
    resultsArray = responseJson.results;
    var main = document.getElementById("main");
    resultsArray.forEach(el => {
      var article = document.createElement("article");
      article.setAttribute("class", "article");


      //Creating Content Section
      var content = document.createElement("section");
      content.setAttribute("class", "articleContent");
      var a = document.createElement("a");
      a.setAttribute("href", "#")
      var h3 = document.createElement("h3");
      h3.setAttribute("class", "title")
      var h6 = document.createElement("h6");
      var title = document.createTextNode(`${el.title}`);
      var description = document.createTextNode(`${el.abstract}`);

      //adding hidden url so we can retrieve it later
      var articleUrl = document.createTextNode(`${el.url}`);
      var link = document.createElement("p");
      link.appendChild(articleUrl);
      link.setAttribute("class", "hidden");

      h3.appendChild(title);
      a.appendChild(h3);
      h6.appendChild(description);
      content.appendChild(a);
      content.appendChild(h6);
      content.appendChild(link);
      article.appendChild(content);

      var randomViews = Math.floor(Math.random() * 1000)
      //Creating Views Section
      var views = document.createElement("section");
      views.setAttribute("class", "impressions");
      var orderOfViews = document.createTextNode(`${randomViews}`); 
      views.appendChild(orderOfViews);
      article.appendChild(views);
      
      //Adding clearfix div
      var clearfixDiv = document.createElement("div")
      clearfixDiv.setAttribute("class", "clearfix");
      article.appendChild(clearfixDiv);

      main.appendChild(article);

      
      $('.articleContent').click(function(){
          console.log("header clicked");
          $("#popUp").attr("class", "");
          var thisTitle = $(this).find("h3").text();
          var thisDesc = $(this).find("h6").text();
          var thisUrl = $(this).find("p").text();

          console.log(thisTitle);
          console.log(thisDesc);
          console.log(thisUrl);
          
          $("#popUp h1").replaceWith("<h1>"+$(this).find("h3").text()+"</h1>");
          $('#popUp p').replaceWith("<p>"+$(this).find("h6").text()+"</p>");
          $('#popUpAction').attr('href', thisUrl)
          
      })

      $('.closePopUp').click(function() {
        $("#popUp").attr("class", "loader hidden");
      });
    })

    
  }).catch(err => {
    alert("Cannot load Feeds")
  })

  // $('#loading').hide();

}

function guardianNews(url){
  fetch(url)
  .then(res => res.json())
  .then(responseJson => {
    resultsArray = responseJson.response.results;
    var main = document.getElementById("main");
    resultsArray.forEach(el => {
      var article = document.createElement("article");
      article.setAttribute("class", "article");


      //Creating Content Section
      var content = document.createElement("section");
      content.setAttribute("class", "articleContent");
      var a = document.createElement("a");
      a.setAttribute("href", "#")
      var h3 = document.createElement("h3");
      h3.setAttribute("class", "title")
      var title = document.createTextNode(`${el.webTitle}`);

      //adding hidden url so we can retrieve it later
      var articleUrl = document.createTextNode(`${el.webUrl}`);
      var link = document.createElement("p");
      link.appendChild(articleUrl);
      link.setAttribute("class", "hidden");

      h3.appendChild(title);
      a.appendChild(h3);
      content.appendChild(a);
      content.appendChild(link);
      article.appendChild(content);

      var randomViews = Math.floor(Math.random() * 1000)
      //Creating Views Section
      var views = document.createElement("section");
      views.setAttribute("class", "impressions");
      var orderOfViews = document.createTextNode(`${randomViews}`); 
      views.appendChild(orderOfViews);
      article.appendChild(views);
      
      //Adding clearfix div
      var clearfixDiv = document.createElement("div")
      clearfixDiv.setAttribute("class", "clearfix");
      article.appendChild(clearfixDiv);

      main.appendChild(article);

      
      $('.articleContent').click(function(){
          console.log("header clicked");
          $("#popUp").attr("class", "");
          var thisUrl = $(this).find("p").text();
          
          $("#popUp h1").replaceWith("<h1>"+$(this).find("h3").text()+"</h1>");
          $('#popUpAction').attr('href', thisUrl)
          
      })

      $('.closePopUp').click(function() {
        $("#popUp").attr("class", "loader hidden");
      });
    })

    
  }).catch(err => {
    alert("Cannot load Feeds")
  })

  // $('#loading').hide();

}
$(document).ready(function(){
  newsFeed('https://newsapi.org/v2/top-headlines?country=us&apiKey=66305fde95b14a5b9999b7fe4ac5d524');
  nyTimes('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=XnqugucJoJU8A3Is3kUG0TlqAMpXVLGV');
  guardianNews('https://content.guardianapis.com/search?api-key=b2224cd8-d7dd-44a4-864d-4e42b5abfd45');
  $('#loading').hide();
  $('#newsAPI').click(function(){
    $('#loading').show();
    console.log("clicked");
    $('#main').replaceWith(" <section id='main' class='container'> </section>");
    newsFeed('https://newsapi.org/v2/top-headlines?country=us&apiKey=66305fde95b14a5b9999b7fe4ac5d524');
    $('#loading').hide();
  })


  $('#nytimesAPI').click(function(){
    console.log("clicked");
    $('#loading').show();
    $('#main').replaceWith(" <section id='main' class='container'> </section>");
    nyTimes('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=XnqugucJoJU8A3Is3kUG0TlqAMpXVLGV');
    $('#loading').hide();
  })


  $('#theguardianAPI').click(function(){
    console.log("clicked");
    $('#loading').show();
    $('#main').replaceWith(" <section id='main' class='container'> </section>");
    guardianNews('https://content.guardianapis.com/search?api-key=b2224cd8-d7dd-44a4-864d-4e42b5abfd45')
    $('#loading').hide();
  })

  $('#logo').click(function(){
    console.log('clicked');
    $('#loading').show();
    $('#main').replaceWith(" <section id='main' class='container'> </section>");
    newsFeed('https://newsapi.org/v2/top-headlines?country=us&apiKey=66305fde95b14a5b9999b7fe4ac5d524');
    nyTimes('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=XnqugucJoJU8A3Is3kUG0TlqAMpXVLGV');
    guardianNews('https://content.guardianapis.com/search?api-key=b2224cd8-d7dd-44a4-864d-4e42b5abfd45');
    $('#loading').hide();
  })

  $('#search a').click(function(){
    console.log("search");
    $('#search').toggleClass('active');
  })
})


