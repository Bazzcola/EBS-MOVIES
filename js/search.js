const searchWindow = async (event) => {
  event.preventDefault();
  const x = $("#search").val();
  window.location.replace(`/search.html?${x}`);
};

$(document).ready(async () => {
  let search = window.location.search;
  let clearURI = decodeURI(search);
  let clear = clearURI.substr(1);

  const itemMovie = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${clear}&api_key=ad2fb2e9ab12851bd813fca1a20c373e&language=en-US&page=1&include_adult=false&page=1`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      console.log("error", error);
    });
  let item = itemMovie.results;
  try {
    await item.map((data) => {
      $(".loading").hide();
      $(".search_item_box").append(`
              <div class="search_item">
                  <img src=${
                    data.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                      : "https://image.tmdb.org/t/p/w500//oKjivUsUQ0tx9zEEUvqgDCK2Gnw.jpg"
                  }
                      alt="">
                  <div class="review">
                      <div class="review_title">
                          <a href="/films.html?${data.id}">${
        data.title
      }<a><span>${
        data.release_date ? data.release_date.substr(0, 4) : ""
      }</span>
                      </div>
                      <div class="description_title">
                          <p>This review may contain spoilers.</p>
                      </div>
                      <div class="likes">
                          <p>${data.vote_count} like's</p>
                      </div>
                  </div>
              </div>
          `);
    });
    if (item.length > 0) {
      $(".result_title").append(`
          <h1>FOUND AT LEAST ${item.length} MATCHES FOR "${clear}"</h1>
      `);
    } else {
      $(".loading").hide();
      $(".result_title").append(`
          <h1>NOT FOUNT RESULTS</h1>
      `);
      $(".result_content").append(`
          <h1>There were no matches for your search term.</h1>
          `);
    }
  } catch (error) {
    $(".loading").hide();
    $(".result_title").append(`
          <h1>NOT FOUNT RESULTS</h1>
      `);
    $(".result_content").append(`
          <h1>There were no matches for your search term.</h1>
          `);
  }
});
