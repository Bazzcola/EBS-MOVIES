const searchWindow = (event) => {
    event.preventDefault();
    const x = $("#search").val();
    window.location.replace(`/search.html?${x}`);
    let search = window.location.search;
    let clearURI = decodeURI(search)
    const clear = clearURI.substr(1);
    console.log(clear)
    console.log(getPoint())
};
const getPoint = async () => {
    let search = searchWindow();
    let page = 1;
    let api = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=ad2fb2e9ab12851bd813fca1a20c373e&language=en-US&page=1&include_adult=false&page=${page}`;
    const getSearch = await axios.get(api);
    return getSearch.data.results, console.log(getSearch.data);
}
// $(document).ready(async () => {

//     const getData = await getPoint();
//     const item = [getData];
//     $('.search_item_box').append(`
//         <div class="search_item">
//             <img src="https://a.ltrbxd.com/resized/film-poster/4/5/9/5/6/4/459564-midsommar-0-70-0-105-crop.jpg?k=e7f0ad4e39"
//                 alt="">
//             <div class="review">
//                 <div class="review_title">
//                     <h1>Midsommar</h1>
//                     <p>2019</p>
//                 </div>
//                 <div class="stars">
//                     <span>★★★★★</span>
//                 </div>
//                 <div class="description">
//                     <p>This review may contain spoilers.</p>
//                     <a href="#">I can handle the truth.</a>
//                 </div>
//                 <div class="likes">
//                     <img src="" alt="">
//                     <p>1 like</p>
//                 </div>
//             </div>
//         </div>
//     `)
// })