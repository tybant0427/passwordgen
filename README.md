~ As a developer . I want to generate a random password from selections that a user makes. ~

First I want to create my variables and sort them into different arrays featuring uppercase, lowercase, numbers, and special characters. 
Each character as its own string. 

The next thing I need to do is send the user some prompts to give me the data to generate a new password for them. 

First prompt I ask them is how many characters they want in their new password. 
They are told that the new password length has to be between 8 and 128 characters
Here I use a ParseInt function to convert the string into an integer. So that it can be used for calculations later. 

Our first if statement in the getPrompt function needs to be false to continue on. 
The user will get an alert if they do any of the following..
-Enter a number by spelling it out with text.
-Enter a number less than 8. 
-Enter a number greater than 128. 

Next the user is asked if they would like numbers, lowercase letters, uppercase letters, or special characters in their password. 
They can select all 4 of these options or they can select only 1 if they want to but they can’t select none of the options.

If they give me the right prompts I can now generate a password with the choice array. 

First I make an empty string called password. Next I run a for loop function. 
The loop will repeat for as long as the number of characters that were selected by the user in the prompts. 

In the loop I make a random index and to get the value of that random index I run Math.random to create a floating value from 0 - .999 
which I multiply by the length of our established choice array. This will give me a random value that is based on the number of 
characters chosen + our floating value. I use Math.floor to turn that number into an integer. 

With the empty password string I take that and make it = password + our character that was randomly selected from the choice array with our random index. 
Each time the loop repeats it generates a new random character and takes that character and places it back into the new value of the password. 

Once the loop is finished it will return the full value of new password. 

Step Process
1. The user clicks generate password 
2. Run writePassword function 
3. Call getPrompts function
4. Receive true prompts 
5. Run generate password function - loop 
6. Set the passwordText value 
7. Update the DOM 
