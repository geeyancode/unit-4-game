var YourCharacter; // stores location for mychar
var YourDefender; //stores location for enemy
var myChar = "";//player one character
var myDef = ""; //enemy container
var name; // character name
var characters = {      // contains all the information of my characters

	ObiWan:         {
			name: "obiwanStat",
			visual: 'assets/images/Obi_Wan.jpg',
                        healthPoints: 120,
                        attackPower: 10,
			fullName: "Obi-Wan Kenobi",
			},

	Yoda:           {
			name: "yodaStat",
			visual: 'assets/images/Yoda.jpg',
			healthPoints: 1000,
			attackPower: 10,
			fullName: "Yoda",
			},

	DarthVader:     { 
			name: "darthvaderStat",
			visual: 'assets/images/darth_vader.jpg',
			healthPoints: 150,
			attackPower: 11,
			fullName: "Darth Vader",
			},

	ImperialGuard:  { 
			name: "imperialguardStat",
			visual: 'assets/images/imperial_guard.jpg',
			healthPoints: 100,
			attackPower: 8,
			fullName: "Mr. Guard",
			}
};
        
function reset() {	
	
	$("#charRow").show();
}
	    

$(document).ready(function(){

    
//moves the initial clicked character into "Your Character" container
// and moves the rest into "Enemies available to attack" container.
$(".charRow").click(function(){
            
       if (myChar == "") {
       // appends the chosen character to "Your Character"
       //console.log(this);	       
       $(this).appendTo("#yourChar");
       //console.log(yourChar)="yourChar"
       myChar = $(this);
       YourCharacter = $(myChar).attr("value");
          }
       // if else statements that determine who is currently "Your Character" and assign
       // that person to the character array's properties. 
       if (YourCharacter == characters.ObiWan.name) {              
       }
       else if (YourCharacter == characters.Yoda.name){             
       }
       else if (YourCharacter == characters.DarthVader.name){             
       }
       else if (YourCharacter == characters.ImperialGuard.name){
       }
                         
       // clones the three remaining characters to "Enemies available to attack" three separate divs.
       for (var i = 0; i < 4; i++) {
           $("._" + [i]).not(myChar).appendTo("#enemies" + [i]);

           // changing color
           $("._" + [i]).not(myChar).css({"background-color": "red", "outline-color": "black", 
               "border-width": "3px", "outline-style": "solid", "border-color": "black", "outline-width": "1px"});
       }             
       // Clears the characters from the top.
         $("#charRow").hide();      
});

        // moves the second clicked character/enemy into the "Defender" container. The other two 
     // characters remain in "enemies available to attack" container.     
     $(".move").click(function(){

       
        // moves that character to the "Defender" section on the page.
        $(this).appendTo("#defender");
        myDef = $(this);
        YourDefender = $(myDef).children().attr("value");
        $(".youDefeated").empty();

// }
        // if else statements that determine who is currently "Defender" and assign
  // that person to the character array's properties.
        if (YourDefender == characters.ObiWan.name) {
                  
          
        }
       else if (YourDefender == characters.Yoda.name){
                 
                  
        }
        else if (YourDefender == characters.DarthVader.name){
                 
                  
        }
        else if (YourDefender == characters.ImperialGuard.name){
                
                  
         }
        


});
$(".restart").hide();	
});
//* still needs to do the following
//function for attack
//function for counterattack
//function for health life
//function for reset