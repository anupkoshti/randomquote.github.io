const quotes = [
    {
        quote : "I have to remind myself that some birds aren't meant to be caged. Their feathers are just too bright. And when they fly away, the part of you that knows it was a sin to lock them up does rejoice.",
        author : "Red"
    },
    {
        quote : "SMILE, because it confuses people. Because its easier than explaining what is killing you INSIDE.",
        author : "Joker?"
    },
    {
        quote : "Do I really look like a guy with a plan? You know what I am? I'm a dog chasing cars. I wouldn't know what to do with one if I caught it. You know, I just... do things...",
        author : "Joker?"
    }
]

const button = document.querySelector("#generate-btn");

button.addEventListener('click', generate);

function generate(){
    let random = Math.floor(Math.random()*quotes.length);

    document.querySelector('#quote').textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
}