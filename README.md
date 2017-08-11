# JavaScriptAssignmentOne

Programming Fundamentals Assignment (Assisted): 
The Crystal Ball 

The Crystal Ball is a simple fortune generator that consists of two buttons and a results box. Users will find out their fortune by selecting a button called “Ask the Gods” which links to a function that generates a random fortune reading from an array and feeds it into a box. 
If the user is unhappy with the first fortune they have received they have another chance to ask the gods to rethink their fate by selecting the button “Ask the Gods to rethink it”. “Ask the Gods to rethink it” works just like “Ask the Gods” in that it links to a function that generates a random fortune reading from an array. They can press the button “Ask the Gods to rethink it” as many times as necessary (the button will continuously pull a different fortune at random from the array) until they are satisfied with their fortune.

Epic:
A simple fortune generator. 

User Story:
- User wants to find out their fortune and selects “Ask the Gods” button.
	- “Ask the Gods” button random pulls a fortune listed in an array.
	- The fortune is displayed in the results box (peach box).
	- “Ask the Gods” button can only be used once.
- User is dissatisfied with their results
	The first button “Ask the Gods” is now grey. Only the button “Ask the Gods to rethink it” can be used.
- User selects the button “Ask the Gods to rethink it”.
	- “Ask the Gods to rethink it” calls a function that randomly pulls a fortune listed in an array and 	replaces it in the display box in place of the previous fortune.
	- If user is still unhappy with their fortune they can keep selecting the “Ask the Gods to rethink it” 	button.
 	- The “Ask the Gods to rethink it” button will keep pulling random fortunes from the array list until 	the user is satisfied with their fortune.
