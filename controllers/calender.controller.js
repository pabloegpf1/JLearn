const Event = require('../models/event.model')

module.exports.init = (req, res) => {
 	const test = new Event({
    		text:"My test event A",
    		start_date: new Date(2019,8,1),
    		end_date:	new Date(2019,8,5)
    	});
    	var test2 = new Event({
    		text:"My test event B",
    		start_date: new Date(2019,8,19),
    		end_date:	new Date(2019,8,24)
    	});
    	var test3 = new Event({
    		text:"Morning event",
    		start_date: new Date(2019,8,4,4,0),
    		end_date:	new Date(2019,8,4,14,0)
    	});
    	var test4 = new Event({
    		text:"One more test event",
    		start_date: new Date(2019,8,3),
    		end_date:	new Date(2019,8,8),
    		color: "#DD8616"
    	});
    	test.save();
    	test2.save();
    	test3.save();
    	test4.save();


    	res.send("Successfully added test events into events collection!")
    	//res.render('pages/calender')
 }
module.exports.gdata = (req, res) => {
   // Event.findAll
}
module.exports.data = (req, res) => {
}

