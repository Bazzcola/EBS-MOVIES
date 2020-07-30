const movieItem = async () => {
    let pageUrl = $(location).attr("href");
    const movieId = pageUrl.substr(-6);
    const itemMovie = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=ad2fb2e9ab12851bd813fca1a20c373e&language=en-US`);
    return itemMovie.data;
}
const searchWindow = (event) => {
    event.preventDefault();
    const x = $("#search").val();
    console.log(x)
    window.location.replace(`/search.html?${x}`)
};
$(document).ready(async () => {
    const getItem = await movieItem();
    const item = [getItem]

    $('.content_wrapper').append(`
                <div class="content_leftside">
                    <div class="content_banner" style="background-image: url(https://image.tmdb.org/t/p/w500/${item[0].poster_path});">
                        <div class="content_banner__followers">
                            <a href="#"><img src="images/view.png" width="20px" height="17px" alt=""> ${Math.round(item[0].popularity)}k</a>
                            <a href="#"><img src="images/cubes.png" width="13px" height="13px" alt=""> 19k</a>
                            <a href="#"><img src="images/heart.png" width="20px" height="15px" alt=""> 19k</a>
                        </div>
                    </div>
                    <div class="content_trailer">
                        <div class="content_trailer__item1">
                            <p>WHERE TO WATCH</p><a href="#" class="play"><span>Trailer</span></a>
                        </div>
                        <div class="content_trailer__item2">
                            <div class="netflix"></div>
                            <p>Netflix US</p>
                            <div class="play_btn">PLAY</div>
                        </div>
                        <div class="content_trailer__item3">
                            <a href="#">Go <span>PRO</span> to customize this list</a>
                        </div>
                        <div class="content_trailer__item4">
                            <a href="#" class="services">All services...</a>
                            <a href="#" class="watch">JustWatch</a>
                        </div>
                    </div>
                </div>
                <div class="content_middleside">
                    <div class="content_description">
                        <div class="description_title">
                            <h1>${item[0].original_title}</h1>
                            <div class="directed">
                                <a href="#">${item[0].release_date.substr(0, 4)}</a>
                                <span>Directed by <a href="#">Spike Lee</a></span>
                            </div>
                        </div>
                        <div class="description_text">
                            <h1>${item[0].tagline}</h1>
                            <p>${item[0].overview}</p>
                        </div>
                    </div>
                    <div class="content_casts">
                        <div class="crew_list">
                            <a href="#">CAST</a>
                            <a href="#">CREW</a>
                            <a href="#">DETAILS</a>
                            <a href="#">GENRES</a>
                        </div>
                        <div class="actor_list">
                            <div class="actor_box">Delroy Lindo</div>
                            <div class="actor_box">Jonathan Majors</div>
                            <div class="actor_box">Clarke Peters</div>
                            <div class="actor_box">Norm Lewis</div>
                            <div class="actor_box">Jean Reno</div>
                            <div class="actor_box">Delroy Lindo</div>
                            <div class="actor_box">Jonathan Majors</div>
                            <div class="actor_box">Clarke Peters</div>
                            <div class="actor_box">Norm Lewis</div>
                            <div class="actor_box">Jean Reno</div>
                            <div class="actor_box">Delroy Lindo</div>
                            <div class="actor_box">Jonathan Majors</div>
                            <div class="actor_box">Clarke Peters</div>
                            <div class="actor_box">Norm Lewis</div>
                            <div class="actor_box">Jean Reno</div>
                            <div class="actor_box">Delroy Lindo</div>
                            <div class="actor_box">Jonathan Majors</div>
                            <div class="actor_box">Clarke Peters</div>
                            <div class="actor_box">Norm Lewis</div>
                            <div class="actor_box">Jean Reno</div>
                            <div class="actor_box">Delroy Lindo</div>
                            <div class="actor_box">Jonathan Majors</div>
                            <div class="actor_box">Clarke Peters</div>
                            <div class="actor_box">Norm Lewis</div>
                            <div class="actor_box">Show All...</div>
                        </div>
                        <div class="movie_lenght">
                            <div class="movie_lenght__text">${item[0].runtime} mins More details at</div>
                            <div class="imdb">
                                <p>IMDB</p>
                            </div>
                            <div class="tmdb">
                                <p>TMDB</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content_rightside">
                    <div class="share_box">
                        <div class="sing_in">
                            <p>Sign in to log, rate or review</p>
                        </div>
                        <div class="share">
                            <p>Share</p>
                        </div>
                    </div>
                    <div class="rating">
                        <div class="rating_number">
                            <a class="rating_title" href="#">RATINGS</a>
                            <a class="fans" href="#">${item[0].vote_count} FANS</a>
                        </div>
                        <div class="rating_pillar">
                            <span>★</span>
                            <ul>
                                <li class="pillar1"></li>
                                <li class="pillar2"></li>
                                <li class="pillar3"></li>
                                <li class="pillar4"></li>
                                <li class="pillar5"></li>
                                <li class="pillar6"></li>
                                <li class="pillar7"></li>
                                <li class="pillar8"></li>
                                <li class="pillar9"></li>
                                <li class="pillar10"></li>
                            </ul>
                            <a class="star_rating">${item[0].vote_average}</a>
                            <span>★★★★★</span>
                        </div>
                    </div>
                </div>
        `)

})