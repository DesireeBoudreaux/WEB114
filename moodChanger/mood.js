// Desiree Boudreaux 11/19/2025

//Step 1: Select the Display Element
const moodDisplay = document.getElementById('moodDisplay');

//Step 2: Create the Moods Configuration Object
// This object holds the background color, text color, and message for each mood
const moods = {
    happy:  { bg: '#FFD700', 
              text: '#87CEEB', 
              message: '🌞 Warm smiles and the suns kisses! 🌞' 
            },
  
    calm:   { bg: '#AFAFF5', 
              text: '#FFFFFF', 
              message: '🪻 Let peace and happiness bloom! 🪻'
            },

    excited:    { bg: '#FF00FF', 
                  text: '#39FF14',
                  message: '🤩 Big Vibes! Bold Moves! 🤩' 
                },

    chill:  { bg: '#87CEEB',
              text: '#FFFFFF', 
              message: '😎 Chill in peace. Relax in stillness. Let the day drift calmly by. 😎'
            },

    mysterious: { bg: '#191970',
                  text: '#8B008B',
                  message: '❔ The dark can reveal what the light cannot. ❔' 
                },
     
    reset:  { bg: 'white',
              text: 'black',
              message: 'Choose a mood...', 

    }           
};

//Step 3: Add the Event Listener with Delegation
// This listens for clicks anywhere on the page and checks if it's a mood button
document.addEventListener('click', function (event) {

    // Check if the clicked element has the class 'mood-btn'
    if (event.target.classList.contains('mood-btn')) {
        
        // Step 4: Get the Mood and Config Inside the Listener
        // Get the mood from the button's data-mood attribute
        const mood = event.target.getAttribute('data-mood');
            
        // Get the configuration for this mood from the moods object
        const config = moods[mood];

        //Testing
        console.log(mood);
        console.log(config);

        // Step 5: Update the Page Styles and Message
        document.body.style.backgroundColor = config.bg;
        document.body.style.color = config.text;
        moodDisplay.textContent = config.message;

  }
});
