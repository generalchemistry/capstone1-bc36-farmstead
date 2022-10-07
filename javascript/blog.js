// SIDEBAR SCROLL
var cardItem=document.getElementById("blog__card").getElementsByClassName("blog__carditem");
var pageNumber=document.getElementsByClassName("blog__pageNumber")
var recentPost=document.getElementsByClassName("recentPost")[0].getElementsByClassName("post__list")[0];
var recentComment=document.getElementsByClassName("recentComment")[0].getElementsByClassName("post__list")[0];
var blogLeft=document.getElementsByClassName("blog__left");





//BLOG NAVIGATION
function afterNav(){
    pageNumber[0].classList.remove("d-none");
    pageNumber[1].classList.remove("active");
    pageNumber[2].classList.add("active");
    pageNumber[3].classList.add("d-none");
    for(var i=0;i<6;i++){
        cardItem[i].classList.remove('show');
    }
    cardItem[4].classList.add('show');
    cardItem[5].classList.add('show');
}
function prevNav(){
    pageNumber[3].classList.remove("d-none");
    pageNumber[2].classList.remove("active");
    pageNumber[1].classList.add("active");
    pageNumber[0].classList.add("d-none");
    for(var i=0;i<6;i++){
        cardItem[i].classList.remove('show');
    }
    cardItem[0].classList.add('show');
    cardItem[1].classList.add('show');
    cardItem[3].classList.add('show');
    cardItem[4].classList.add('show');
}