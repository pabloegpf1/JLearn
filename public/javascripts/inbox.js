// console.log(getTest[0].chat);
$(document).ready(function() {

    if(typeof user !== undefined){
        var user = "Gary Straub";
    }
    var myChats = new ChatController(getTest, user);
    myChats.displayActiveChat();
    myChats.displayListOfChats();
    
    document.getElementById("myForm").addEventListener("submit", function() {
        myChats.newMessege(document.getElementById("text-input-field").value);
        document.getElementById("text-input-field").value = "";
        document.getElementById("messeges").scrollTop = document.getElementById("messeges").scrollHeight;

    });
    document.getElementById("chats").addEventListener("click", function(e) {
        myChats.setActiveIndex(e.target.id.replace("post-", ""));
        document.getElementById("messeges").scrollTop = document.getElementById("messeges").scrollHeight;
    });
    window.onresize = setEqualHeight;
    function setEqualHeight(){
        document.getElementById("messeges").style.maxHeight = (window.innerHeight - (68 + 60)).toString() + "px";
    }
    document.getElementById("messeges").style.maxHeight = (window.innerHeight - (68 + 55.6)).toString() + "px";
    document.getElementById("messeges").scrollTop = document.getElementById("messeges").scrollHeight;
});