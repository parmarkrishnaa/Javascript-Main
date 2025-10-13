const quotes = [
  {
    quote: "The future depends on what you do today.",
    content: "Every small action you take today builds the foundation for your tomorrow.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going.",
    content: "Time never stops — neither should you. Keep moving toward your goal.",
    author: "Sam Levenson"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    content: "Success and failure are both temporary — persistence defines true strength.",
    author: "Winston Churchill"
  },
  {
    quote: "Believe you can and you're halfway there.",
    content: "Self-belief is the key that unlocks every great achievement.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Push yourself, because no one else is going to do it for you.",
    content: "Your growth depends on how far you’re willing to go for yourself.",
    author: "Unknown"
  },
  {
    quote: "The harder you work for something, the greater you’ll feel when you achieve it.",
    content: "True satisfaction comes from effort, not luck.",
    author: "Unknown"
  },
  {
    quote: "Dream big and dare to fail.",
    content: "Great dreams require great risks — don’t fear failure, embrace it.",
    author: "Norman Vaughan"
  },
  {
    quote: "Your limitation—it’s only your imagination.",
    content: "The boundaries you see are only those you set in your own mind.",
    author: "Unknown"
  },
  {
    quote: "Great things never come from comfort zones.",
    content: "Growth begins the moment you step out of what feels safe and easy.",
    author: "Roy T. Bennett"
  },
  {
    quote: "It always seems impossible until it’s done.",
    content: "What feels out of reach today becomes your reality when you persist.",
    author: "Nelson Mandela"
  }
];

let start = document.getElementById('start-app');
let app = document.getElementById('app');

app.style.display = 'none';

start.addEventListener('click', () => {
  start.style.display = 'none';
  app.style.transition = '0.5s';
  app.style.display = 'block';
})

let quoteContent = document.getElementsByClassName('blockquote')
let quote = document.getElementById('quote');
let content = document.getElementById('content');
let author = document.getElementById('author');
let quoteCount = -1;


setInterval(() => {
  if(quoteCount === quotes.length){
    quoteCount = 0;
  }else{
    quoteCount++;
    quote.innerText = quotes[quoteCount].quote;
    content.innerText = quotes[quoteCount].content;
    author.innerText = `- ${quotes[quoteCount].author}`;
  }
}, 3000);

let timer = document.getElementById('timer');
let count = 2;

setInterval(() => {
    count--;
    if(count === -1){
        count = 2;
    }
    timer.textContent = count;
}, 1000);