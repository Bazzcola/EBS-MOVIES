const searchWindow = async (event) => {
    event.preventDefault();
    const x = $("#search").val();
    let search = window.location.search;
    let clearURI = decodeURI(search)
    const clear = clearURI.substr(1);
    sessionStorage.setItem('search', clear);
    window.location.replace(`/search.html?${x}`);

};


$(document).ready(async () => {
    let clear = sessionStorage.getItem('search');
    const itemMovie = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${clear}&api_key=ad2fb2e9ab12851bd813fca1a20c373e&language=en-US&page=1&include_adult=false&page=1`);
    let item = itemMovie.data.results
    console.log(item)
    $('.search_item_box').append(`
        <div class="search_item">
            <img src="https://a.ltrbxd.com/resized/film-poster/4/5/9/5/6/4/459564-midsommar-0-70-0-105-crop.jpg?k=e7f0ad4e39"
                alt="">
            <div class="review">
                <div class="review_title">
                    <h1>Midsommar</h1>
                    <p>2019</p>
                </div>
                <div class="stars">
                    <span>★★★★★</span>
                </div>
                <div class="description">
                    <p>This review may contain spoilers.</p>
                    <a href="#">I can handle the truth.</a>
                </div>
                <div class="likes">
                    <img src="" alt="">
                    <p>1 like</p>
                </div>
            </div>
        </div>
    `)
})