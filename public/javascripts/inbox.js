// console.log(getTest[0].chat);
class Chat {
    constructor(sender, receiver, messages){
        this.sender = sender;    
        this.receiver = receiver;
        this.messages = messages;
    }
    outGoingMsg(text){
        this.messages.push(new Array (0, text));
        this.appendMessege(0, text);
    }
    display(){
        var i;
        for(i=0; i<this.messages.length; i++){
            this.appendMessege(this.messages[i][0], this.messages[i][1])
        }
    }
    appendMessege(type, message){
        var div = document.createElement("div");
        div.classList.add("row");
        if(type){
            div.classList.add("incomming-messege");
        }else{
            div.classList.add("outgoing-messege");
        }
        div.classList.add("messege");
        div.classList.add("padding-top");
        var p = document.createElement("p");
        p.innerHTML = message;
        p.classList.add("message");
        div.appendChild(p);
        document.getElementById("messeges").appendChild(div);
    }
}

class ChatController{
    constructor(input){
        this.chats = new Array();
        this.activeIndex = 0;
        var i;
        for( i = 0; i < input.length; i++){
            this.chats.push(new Chat(input[i].sender, input[i].receiver, input[i].chat));
        }
    }
    setActiveIndex(index){
        if(this.chats[index] !== undefined){
            this.activeIndex = index;
            this.clearChat();
            this.displayActiveChat();
        }

    }
    displayActiveChat(){
        this.chats[this.activeIndex].display();
    }
    clearChat(){
        var messegeBox = document.getElementById("messeges");
        var i;
        for(i = 0; i< messegeBox.childNodes.length; i++){
            messegeBox.removeChild(messegeBox.childNodes[messegeBox.childNodes.length -1]);
        }
    }
    newMessege(text){
        this.chats[this.activeIndex].outGoingMsg(text);
    }
    displayListOfChats(){
        var i;
        for(i=0; i<this.chats.length; i++){
            var a = document.createElement("a");
            a.classList.add("inbox-user-card-link");
            a.href="javascript:;";
            a.id = `post-${i}`;

            var div = document.createElement("div");
            div.classList.add("inbox-user-card");
            div.id = `post-${i}`;
    
            var p = document.createElement("p");
            p.innerHTML = this.chats[i].sender;
            p.classList.add("inbox-preview");
            p.id = `post-${i}`;

            div.appendChild(p);
            a.appendChild(div);
            document.getElementById("chats").appendChild(a);
        }
    }

}



$(document).ready(function() {
    var myChats = new ChatController(getTest);
    myChats.displayActiveChat();
    myChats.displayListOfChats();


    document.getElementById("myForm").addEventListener("submit", function() {
        myChats.newMessege(document.getElementById("text-input-field").value);
        document.getElementById("text-input-field").value = "";
    });

    document.getElementById("chats").addEventListener("click", function(e) {
        myChats.setActiveIndex(e.target.id.replace("post-", ""));
    });
    var formHeight = document.getElementById("messeges").clientHeight;
    document.getElementById("messeges").style.maxHeight = (formHeight - 68).toString() + "px";
});