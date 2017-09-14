var searchForm = document.querySelector("#nytSearch");

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var searchTerm = document.querySelector('input').value;

  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  // url += '?' + $.param({
  //   'api-key': "32ff19a2d2f440fca921515d91ad5e3d",
  //   'q': searchTerm
  // });
  $.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=32ff19a2d2f440fca921515d91ad5e3d&q=" + searchTerm, function(data) {
    // console.log(data.response.docs[0].snippet);
    var responseArray = data.response.docs;
    var result = '';
    for (var i = 0; i < responseArray.length; i++) {
      result += "<p>" + responseArray[i].headline.main + "</p>";
    }
    document.querySelector("#searchResults").innerHTML = result;
  })

//   $.ajax({
//     url: url,
//     method: 'GET',
//   }).done(function(result) {
//     console.log(result);
//     console.log(result.response.docs[0].snippet);
//     // var headings = "";
//     // console.log(result.response.docs[0].headline.main);
//     // for (var i = 0; i < result.response.docs[0].headline.main; i++) {
//     //   headings = headings + "<li>" + result.response.docs[i].headline.main + "</li>";
//     // }
//   }).fail(function(err) {
//     throw err;
//   });
})
