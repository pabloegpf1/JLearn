class ChatController {
    constructor(input, user){
        this.chats = new Array();
        this.activeIndex = 0;
        this.user = user;
        var i;
        for( i = 0; i < input.length; i++){
            this.chats.push(new Chat(input[i].sender, input[i].receiver, input[i].user, input[i].chat));
        }
    }
    setActiveIndex(index){
        if(this.chats[index] !== undefined){
            this.activeIndex = index;
            this.clearChat();
            this.displayActiveChat();
        }
        // this.clearChat();
    }
    displayActiveChat(){
        this.chats[this.activeIndex].display();
    }
    clearChat(){
        var messegeBox = document.getElementById("messeges");
        while (messegeBox.firstChild) {
            messegeBox.removeChild(messegeBox.firstChild);
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