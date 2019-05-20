class Chat {
    constructor(sender, receiver, user, messages){
        this.sender = sender;    
        this.receiver = receiver;
        this.messages = messages;
        this.user = user;
        // OO Msg
        this.MsgArray = new Array();
        messages.forEach(element => {
            this.MsgArray.push(new Message(element[0], element[1]));
        });
    }
    outGoingMsg(text){
        // this.messages.push(new Array (0, text));
        this.sendMsgToServer(text);
        this.MsgArray.push(new Message (0, text));
        this.appendMessege(0, text);
    }
    display(){
        var i;
        for(i=0; i<this.messages.length; i++){
            this.appendMessege(this.messages[i][0], this.messages[i][1])
        }
    }
    appendMessege(type, message){
        this.MsgArray.forEach(element => {
            document.getElementById("messeges").appendChild(element.msgBlock);
        });
    }
    sendMsgToServer(msg){
        // socket.emit('chat message', msg);
    }
}

class Message {
    constructor(sender, message){
        this.sender = sender;
        this.message = message;
        this.msgBlock = this.createMsgBlock(this.sender, this.message);
    }
    createMsgBlock(type, message){
        var div = document.createElement("div");
        div.classList.add("row");
        if(!type){
            div.classList.add("outgoing-messege");
        }else{
            div.classList.add("incomming-messege");
        }
        div.classList.add("messege");
        div.classList.add("padding-top");
        var p = document.createElement("p");
        p.innerHTML = message;
        p.classList.add("message");
        div.appendChild(p);
        return div;
        // document.getElementById("messeges").appendChild(div);
    }
}