const Movies = async () => {
    const keyApi = 'https://api.themoviedb.org/3/discover/movie?api_key=ad2fb2e9ab12851bd813fca1a20c373e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
    const data = await fetch(keyApi)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            return data.results.splice(0, 12);
        })
        .catch(function (error) {
            console.log('error', error)
        })
    return data;

}
const searchWindow = (event) => {
    event.preventDefault();
    const x = $("#search").val();
    window.location.replace(`/search.html?${x}`)

};
$(document).ready(async () => {
    const movieList = await Movies();
    console.log(movieList)

    await movieList.map((item) => {
        // $('.load').append(`
        // <div className="loading" id="loading" style="display:;">
        //     <h1>LOADING...</h1><img src="images/Loading.gif" alt="">
        // </div>
        // `)
        $('.movie_box').append(`
                <div class="movie_box__item">
                    <a href="/films.html?${item.id}"><img src="https://image.tmdb.org/t/p/w500${item.poster_path}"</a>
                width="150" height="225" alt="">
                </div>
            `);
    });
})