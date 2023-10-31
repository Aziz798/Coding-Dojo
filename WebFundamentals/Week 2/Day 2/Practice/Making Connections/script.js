console.log("page loaded...");
function changeName(){
    var newName=document.querySelector("#profileName");
    newName.innerText = "Sarra K"
}
function remove () {
    var element =document.querySelector(".card-list-item");
    var badge=document.querySelector(".badge1");
    element.remove();
    badge.innerHTML--;
    
}
function addFriend(){
    var element =document.querySelector(".card-list-item");
    var badge=document.querySelector(".badge1");
    var connctions=document.querySelector('#badge');
    element.remove();
    badge.innerHTML--;
    connctions.innerText++;
}