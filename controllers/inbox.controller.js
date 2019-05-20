const Inbox = require('../models/inbox.model')
const InboxOne = new Inbox({
	sender: "Proffesor Dumbledore",
	receiver: "Prof",
	user: "Gary Straub", 
	chat:[
		[1, "A neighbourhood on a street called Privet Drive. An owl, sitting on the street sign flies off to reveal a mysterious appearing old man walking through a forest near the street. He stops at the start of the street and takes out a mechanical device and zaps all the light out of the lampposts. He puts away the device and a cat meows. The man, ALBUS DUMBLEDORE, looks down at the cat, which is a tabby and is sitting on a brick ledge."],
		[1, "I should have known that you would be here...Professor McGonagall."],
		[0, "The cat meows, sniffs out and the camera pans back to a wall. The cats shadow is seen progressing into a human. There are footsteps and MINERVA MCGONAGALL is revealed."],
		[0, "Good evening, Professor Dumbledore. Are the rumours true, Albus?"],
		[1, " I'm afraid so, Professor. The good, and the bad."],
		[0, "And the boy?"],
		[1, "Hagrid is bringing him."],
		[0, "Do you think it wise to trust Hagrid with something as important as this?"],
		[1, "Ah, Professor, I would trust Hagrid with my life."],
		[1, "No problems, I trust, Hagrid?"],
		[0, "No, sir. Little tyke fell asleep just as we were flying over Bristol. Heh. Try not to wake him. There you go.		"],
		[0, "Hagrid hands a baby in a blanket over to Dumbledore."],
		[0, "Albus, do you really think its safe, leaving him with these people? I've been watching them all day. They're the worst sort of Muggles imaginable. They really are"],
		[1, "The only family he has."],
		[0, "They stop outside a house."],
		[0, "This boy will be famous. There wont be a child in our world who doesn't know his name."],
		[1, "Exactly. He's better off growing up away from all that. Until he is ready."]
	]
})
const InboxTwo = new Inbox({
	sender: "Fa Mulan",
	receiver: "Prof",
	user: "Gary Straub", 
	chat:[
		[0, "Fa Mulan? "],
		[1, "Present!"],
		[0, "Speaking without permission ... "],
		[1, "Oops ... [They go inside]"],
		[0, "Too skinny ... not good for bearing sons. "],
		[0, "Recite the Final Admonition. "],
		[1, "Mmm-hmm-hmm ... [pulls out a paper fan and spits Crickee out]"],
		[0, "Well? "],
		[1, "Fulfill your duties, calmly and ... [glances down at the crib notes written on her arm, which are smeared slightly] respectively. Um, reflect before you ... snack. Act! This shall bring you honor and glory. [She fans herself, the matchmaker grabs the fan and searches it for cheat notes. Finding none, she grabs Mulan by the arm (where the notes are!) and pulls her toward a table. The writing comes off in her hand.]"]
	]
})
const InboxThree = new Inbox({
	sender: "Bud",
	receiver: "Prof",
	user: "Gary Straub", 
	chat:[
		[0, "I didn't know we had a meeting today, sport."],
		[1, "I didn't either.  I think we need to talk, Gordon.  I just found out about the garage sale down at Bluestar.  Why?"],
		[0, "I was reading Rudy the story of Winnie the Pooh and the honeypot last night.  You know what happened, don't you?  He put his head in one too many times and it got stuck."],
		[1, "Maybe you should have read him Pinocchio.  I thought you were going to turn Bluestar around, not upside down.  You fucking used me."],
		[0, "You're walking around blind without a cane, pal.  A fool and his money are lucky enough to get together in the first place."],
		[1, "But why do you have to wreck this company?"],
		[0, "Because it's wreckable, alright?  I took another look at it and changed my mind."],
		[1, "If these people lose their jobs, they have nowhere else to go.  My father has worked there for twenty four years -- I gave him my word."],
		[0, "It's all about bucks, kid.  The rest is just conversation.  Hey, Buddy -- you're still going to be president, and when the time comes you'll parachute out a rich man.  With the money you're going to make your father won't have to work another day in his life."],
		[1, "So tell me, Gordon, where does it end?  How many yachts do you have to water ski behind?  How much is enough?"],
		[0, "It's not about enough, kid, it's a zero sum game.  Somebody wins, somebody loses.  Money itself is not lost or made, but simply transferred from one perception to another, like magic.  This painting right here, I bought it ten years ago for sixty thousand.  Could sell it today for six hundred thousand -- the illusion has become reality.  Capitalism at its best.  And the more real it becomes, the more desperately they want it."],
		[1, "How much is enough?"],
		[0, "The richest one percent of this country owns half the country's wealth -- five trillion dollars.  One third of that is hard work,  two thirds is inheritance, interest on interest acculumating to widows and idiot's sons -- and what I do, stock and real estate speculation.  It's bullshit.  You've got 90% of the population out there with little or no net worth.  I create nothing.  I own.  We make the rules, kiddo.  News, war, peace, famine, upheaval, the price of a paper clip -- we pick that rabbit out of a hat while they sit out there and wonder how the hell we did it.  You aren't naive enough to think we live in a democracy, are you, Bud?  It's the free market.  You're part of it.  You got that killer extinct.  Stick around, kid, I still got a lot to teach you."],
		[1, "Obviously."],
		[0, "Buddy, I was gonna tell you...  Calm down, will ya?  Come on over for dinner tonight. Bring Darian, we'll sit around and..."],
		[1, "I can't.  I can't make it tonight."],
		[0, "Bud, are you with me?  I need to know you're with me."],
		[1, "I'm with you, Gordon."]
		
	]
})




module.exports.demoInbox =  {
	demo: [InboxOne, InboxTwo, InboxThree]
 }



module.exports.gdata = (req, res) => {
   // Event.findAll
}
module.exports.data = (req, res) => {
}