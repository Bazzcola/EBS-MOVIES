const searchWindow = async (event) => {
    event.preventDefault();
    const x = $("#search").val();
    // let search = window.location.search;
    // let clearURI = decodeURI(search)
    // const clear = clearURI.substr(1);
    // sessionStorage.clear()
    // sessionStorage.setItem('search', clear);
    window.location.replace(`/search.html?${x}`);

};


$(document).ready(async () => {
    const x = $("#search").val();
    let search = window.location.search;
    let clearURI = decodeURI(search)
    const clear = clearURI.substr(1);
    const itemMovie = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${clear}&api_key=ad2fb2e9ab12851bd813fca1a20c373e&language=en-US&page=1&include_adult=false&page=1`);
    let item = itemMovie.data.results
    console.log(item)
    await item.map((data) => {
        $('.search_item_box').append(`
            <div class="search_item">
                <img src="https://image.tmdb.org/t/p/w500/${data.poster_path ? data.poster_path : ""}"
                    alt="No Photo">
                <div class="review">
                    <div class="review_title">
                        <a href="/films.html?${data.id}">${data.title}<a><span>${data.release_date ? data.release_date.substr(0, 4) : ""}</span>
                    </div>
                    <div class="description_title">
                        <p>This review may contain spoilers.</p>
                    </div>
                    <div class="likes">
                        <p>${data.vote_count} like's</p>
                    </div>
                </div>
            </div>
        `)
    })
    if (item.length > 0) {
        $('.result_title').append(`
        <h1>FOUND AT LEAST ${item.length} MATCHES FOR "${clear}"</h1>
    `)
    } else {
        $('.result_title').append(`
        <h1>NOT FOUNT RESULTS</h1>
    `)
        $('.result_content').append(`
        <h1>There were no matches for your search term.</h1>
        `)
    }

})