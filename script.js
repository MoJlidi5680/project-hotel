let searchbtn=document.getElementsByClassName('search_btn');
let searchbar=document.getElementsByClassName('search-bar-container');
let remove_search=document.getElementsByClassName("remove_search")

searchbtn[0].addEventListener("click",function(){
        searchbar[0].style.display="flex"
    })
    remove_search[0].addEventListener("click",function(){
        searchbar[0].style.display="none"
    })



    document.querySelector('#login-btn').addEventListener('click', function() {
        window.location.href = 'login.html';
    });
