/* Mancala

Board: a rectangle with two small vertical rectangles (store) on either end and 12 circles 
(pits, cups, hollows) split into 2 rows. The bottom row of cups along with the store to the
right of the player is "theirs". 

Basic game play: each circle has 4 smaller circles (seeds, stones, marbles). When one cup is
clicked, the four stones are distributed, going counter-clockwise. If the player passes their
own mancala, they drop a stone into it. Play alternates back and forth, with opponents picking 
up the stones in one of their cups and distributing them one at a time into the cups on the right,
beginning in the cup immediately to the right. 

Special Rules: 
-When the last stone in your hand lands in your own store, you take another turn.
-When the last stone in your hand lands in your own *empty* cup, you get to keep all of the stones
in the cup opposite (your opponents stones). They, along with the single stone on your side,
go immediately into your store. 

The game ends when one player cups are completely empty. The other player puts their
remaining stones into their store. Whoever has the most stones wins.


The main set up of the game seems simple enough with html/css. What I need to figure out is:

1. I need 48 individual circles/"stones". There will need to be a way to tell how many are in a
"cup" as that will determine where they stop. 
2. If a stone lands in the players own store, they get another turn. How to determine that.
3. If a stone lands in an empty cup on their own side, they get the stones in the player's cup
opposite. 
4. If stone lands in cup on either side with stones in it, moves to next players turn.
5. Keep track of how many stones are in each store, and the one with more is the winner.
6. Will likely need/want some sort of animation for the stones moving around the board.

I think the biggest thing I'm having trouble conceptualizing is how to make the computer
"know" how many stones are in each cup. Once that part is figured out I think the other 
issues will be easier.
*/