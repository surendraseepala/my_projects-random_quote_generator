let quotes=[
             '\"Liberty, when it begins to take root, is a plant of rapid growth.\"- George Washington',
             '\"The only real prison is fear, and the only real freedom is freedom from fear.\" -Aung San Suu Kyi',
             '\"No one outside ourselves can rule us inwardly. When we know this, we become free.\" -Buddha',
             '\"Everything that is really great and inspiring is created by the individual who can labor in freedom.\" -Albert Einstein',
             '\"For what avail the plough or sail, or land or life, if freedom fail?\" -Ralph Waldo Emerson',
             '\"Freedom is nothing else but a chance to be better.\" -Albert Camus',
             '\"Here is my secret: I don \’t mind what happens.\" Jiddu Krishnamurti',
             '\"To enjoy freedom we have to control ourselves.\" -Virginia Woolf',
             '\"Freedom is the will to be responsible to ourselves. \"-Friedrich Nietzsche',
             '\"Science is organized knowledge. Wisdom is organized life. \"-Immanuel Kant',
             '\"Doubt is the origin of wisdom.\" -Augustine of Hippo',
             '\"The truest wisdom is a resolute determination.\" -Napoleon Bonaparte'
]
function randomquote(){
    let random_number=Math.floor(Math.random()*(quotes.length))
    document.getElementById('myquote').innerHTML=quotes[random_number]
}