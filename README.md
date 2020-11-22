# PasswordGenerator

## *My First Journey into Javascript*

------------
Link to my semi-functioning program : https://jessilinlugo.github.io/PasswordGenerator/


For my first time attempting a javascript program, I tried to make this password generator function properly given a user's input.

I have never struggled to apply concepts more than in Javascript. I feel I've reviewed and studied and googled excessively over the past week and I still feel like it's only barely starting to sink in.

I understand how everything works, and seeing code, I can explain what each line does, but I have trouble typing anything from scratch.

My tutor helped me *a lot* and really helped get me on the right track. He helped me break down what I need to do in plain English and then be able to translate that to a code I can write in JS. I know a lot of the individual terminology due to my near constant reviewing of the material, and my Google-fu is strong, but I'm not yet a black belt.

The prompt box was easy, once I got the initial prompt, and conditional statement set up, it was just copy and paste to run through the different options. I changed prompt to confirm which removed the input box so as to not create any unnecessary additional data.

Everything after that, however, was an uphill battle. I kicked and screamed a bit on my own before finally figuring out how to combine all of the user selected password elements into a single array with no spaces.

And while I can tell you what I have left to do in plain English, I can't actually apply it with javascript.

Currently, my code is in a state where it will create a new array from the confirmed characters selected by the user. I added a Math.random function to randomize the character selection, and Math.floor to ensure it selects a whole number. Then a console.log() to see if I can at least get the output number to be correct.

However, I know Math.random only works on actual numbers (or, intergers) and therefore, will not give me the randomized password outright. Currently, the console.log shows the test sentence with the area where the generated password should be represented by 'null', and my inserted character amount to the left of the log.

I know I have to convert the string to a number, and my googling (and the brief in-class introduction we had to it today) has led me to believe this would be done with either JSON.string() or JSON.parse(). 

After converting the string to a number, we'd need to convert it back to a string, again I'm not sure which, but probably using JSON.string() or JSON.parse(). 

After converting the randomized selection back into a string, we'd need to push the result to the document, using the DOM, and selecting an HTML element. 

To select the HTML, we would use document.querySelector(cardBody.placeholder); because it is inside a parent element, and I only want to push the changes to one child node.

This assignment, and overall introduction was very frustrating for me. I feel I got a good grasp on CSS and HTML very quickly, but I definitely feel like I've hit a wall with Javascript. I am very much looking forward to the upcoming break to be able to review and re-do the class activities to really drive the execution home. 

I look forward to getting over this hurdle. 

------------

My password generator's console logs and their results. 


<img src="/assets/userinput.png" alt="User inputted data"/>
<img src="/assets/Consolelogs.png" alt="console logs"/>