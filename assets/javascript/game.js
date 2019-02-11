// array to hold each characters stats
var characters = { 

	ObiWan: {
			name: "obiwanStat",
			visual: 'assets/images/Obi_Wan.jpg',
			healthPoints: 120,
			attackPower: 10,
			fullName: "Obi-Wan Kenobi",
			counterAttackPower: 20
			},

	Yoda:{
			name: "yodaStat",
			visual: 'assets/images/Yoda.jpg',
			healthPoints: 1000,
			attackPower: 10,
			fullName: "Yoda",
			counterAttackPower: 25
			},

	DarthVader:{ 
			name: "darthvaderStat",
			visual: 'assets/images/darth_vader.jpg',
			healthPoints: 150,
			attackPower: 11,
			fullName: "Darth Vader",
			counterAttackPower: 20
			},

	ImperialGuard:{ 
			name: "imperialguardStat",
			visual: 'assets/images/imperial_guard.jpg',
			healthPoints: 100,
			attackPower: 8,
			fullName: "Mr. Guard",
			counterAttackPower: 20
			}
};
        
	    var YourCharacter;
	    var YourDefender;
	    var myChar = "";
        var myDef = ""; //player one character
        var name;

$(document).ready(function(){
    reset();
    
// When the player clicks on any of the characters, the game determines which one was clicked, moves the one clicked into
// "Your Character" and moves the other three into "Enemies available to attack".
$(".charRow").click(function(){
            
       if (myChar == "") {
       // appends the chosen character to "Your Character"
       console.log(this);	       
       $(this).appendTo("#yourChar");
       console.log(yourChar)="yourChar"
       myChar = $(this);
       YourCharacter = $(myChar).attr("value");
          }
       // if else statements that determine who is currently "Your Character" and assign
       // that person to the character array's properties. 
       if (YourCharacter == characters.ObiWan.name) {
               attackerHP = characters.ObiWan.healthPoints;
               attackerAP = characters.ObiWan.attackPower;
               attackerCAP = characters.ObiWan.counterAttackPower;
               attackerFN = characters.ObiWan.fullName;
               attack = characters.ObiWan;
       }
       else if (YourCharacter == characters.Yoda.name){
               attackerHP = characters.Yoda.healthPoints;
               attackerAP = characters.Yoda.attackPower;
               attackerCAP = characters.Yoda.counterAttackPower;
               attackerFN = characters.Yoda.fullName;
               attack = characters.Yoda;
       }
       else if (YourCharacter == characters.DarthVader.name){
               attackerHP = characters.DarthVader.healthPoints;
               attackerAP = characters.DarthVader.attackPower;
               attackerCAP = characters.DarthVader.counterAttackPower;
               attackerFN = characters.DarthVader.fullName;
               attack = characters.DarSid;
       }
       else if (YourCharacter == characters.ImperialGuard.name){
               attackerHP = characters.ImperialGuard.healthPoints;
               attackerAP = characters.ImperialGuard.attackPower;
               attackerCAP = characters.ImperialGuard.counterAttackPower;
               attackerFN = characters.ImperialGuard.fullName;
               attack = characters.ImperialGuard;
       }
              
       // clones the three remaining characters to "Enemies available to attack" three separate divs.
       for (var i = 0; i < 4; i++) {
           $("._" + [i]).not(myChar).appendTo("#enemies" + [i]);

           // changing color
           $("._" + [i]).not(myChar).css({"background-color": "red", "outline-color": "black", 
               "border-width": "3px", "outline-style": "solid", "border-color": "black", "outline-width": "1px"});


       }
               
       // Clears the characters from the top.
       // $("#picRow").empty();
       $("#picRow").hide();
      
});