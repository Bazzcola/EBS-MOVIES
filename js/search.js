const searchWindow = (event) => {
    event.preventDefault();
    const x = $("#search").val();
    console.log(x)
    window.location.replace(`/search.html?${x}`)
};
$(document).ready(async () => {
    let pageUrl = $(location).attr("href");
    let search = window.location.search;
    console.log(search)
    console.log(pageUrl)
})