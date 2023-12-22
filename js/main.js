function generateQuotes() {
    var author = ['Albert Einstein',
        'Frank Zappa',
        'Mae West',
        'Mahatma Gandhi'
    ];
    var quotes = ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
                "So many books, so little time.",
                "You only live once, but if you do it right, once is enough.",
                "Be the change that you wish to see in the world."
    ]
    var num = Math.floor(Math.random() * author.length);
    document.getElementById("quoteAuthor").innerHTML = author[num];
    document.getElementById("quoteText").innerHTML = quotes[num];
}