const Inbox = require('../models/inbox.model')

module.exports.init = (req, res) => {
    var InboxOne = new Inbox({
        sender: "Student One",
        receiver: "Prof",
        chat:[
            [0, "0 is from John"],
			[1, "From Annoying Student"],
			[1, "When is Homework 2 going to be graded? I also wanted to say that i really like turnips.. they taste so good i just can help myself"],
			[0, "When i feel like it....."],
			[0, ".....Dumbass"],
			[0, "0 is from John"],
			[1, "From Annoying Student"],
			[1, "When is Homework 2 going to be graded? I also wanted to say that i really like turnips.. they taste so good i just can help myself"],
			[0, "When i feel like it....."],
			[0, ".....Dumbass"],
			[0, "0 is from John"],
			[1, "From Annoying Student"],
			[1, "When is Homework 2 going to be graded? I also wanted to say that i really like turnips.. they taste so good i just can help myself"],
			[0, "When i feel like it....."],
			[0, ".....Dumbass"]
		]
    })
    var InboxTwo = new Inbox({
        sender: "Student Two",
        receiver: "Prof",
        chat:[
			[0, "0 is from John"],
			[1, "From Mulan"],
			[1, "Can i go to disneyland?"],
			[1, "Can i have an A"],
			[0, "NO"]
		]
    })
    res.render('pages/inbox', {
        chats: [InboxOne, InboxTwo]
    })
    	//res.render('pages/calender')
 }
module.exports.gdata = (req, res) => {
   // Event.findAll
}
module.exports.data = (req, res) => {
}