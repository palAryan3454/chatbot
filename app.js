function talk() {
    var know = {
        "hello": "Hey there! How can I help you today?",
        "i am good": "That's great to hear!",
        "Graphic era university": "Graphic Era University is situated in the Clement Town area of Dehradun. It's a well-known university that offers a variety of undergraduate and postgraduate programs.",
        "what you can do for me": "I'm here to be your local guide in Dehradun. Ask me about any place, and I'll provide details!",
        "who are you": "Hey, I'm your virtual local guide for Dehradun! How can I assist you today? ",
        "how are you": "I'm doing great, thanks for asking! Ready to guide you around Dehradun. How about you?  :)",
        "what is today's weather": "Today's weather in Dehradun is currently cool with a temperature of around 15 degrees Celsius.",
        "robber's cave": "Robber's Cave, also known as Guchhupani, is a popular spot in Dehradun. It's a natural cave formation where a stream of water flows. You can explore the cave and enjoy the natural beauty. Here's the location on Google Maps: <a href ='https://www.google.com/maps?q=Robbers+Cave+Dehradun' target='_blank'>robers' cave </a>  ",
        "forest research institute": "The Forest Research Institute in Dehradun, India, is a premier institution for forestry research and education. It is one of the oldest and most renowned institutes dedicated to the study and conservation of forests. Here's the location on Googlpse ma:<a href= 'https://maps.app.goo.gl/U12kfRvsM7ZDLzhj7' target= '_blank'> FRI </a>",
        "buddha temple": "Buddha Temple is a Tibetan monestary, also called as Mindrolling Monastery and was build in 1965 by his eminence the Kochen Rinpoche and few other monks for the promotion and protection of religious & cultural understanding of Buddhism.",
        "ok": "Thank You So Much ",
        "bye": "Okay! Will meet soon..",

    };

    var user = document.getElementById('userBox').value.toLowerCase();
    var chatLog = document.getElementById('chatLog');
    var glass = document.querySelector('.glass');

    if (user in know) {
        var response = know[user];
        chatLog.innerHTML = response + "<br>";
        if (response.length > 100) {
            glass.classList.add('glass-1');
        } else {
            glass.classList.remove('glass-1');
        }
        var speaker = new SpeechSynthesisUtterance(response);
        window.speechSynthesis.speak(speaker);
    } else {
        chatLog.innerHTML = "Sorry, I didn't understand. Can you please provide more details or ask about a specific location in Dehradun?<br>";
    }
}