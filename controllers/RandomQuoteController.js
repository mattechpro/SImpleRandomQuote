function RandomQuoteController(req,res){

    this.getQuotes = function(){

        return [
            {author: 'Mahatma Gandhi', citation: 'An eye for an eye only ends up making the whole world blind.'},
            {author: 'Mahatma Gandhi', citation: 'You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.'},
            {author: 'Mahatma Gandhi', citation: 'Happiness is when what you think, what you say, and what you do are in harmony.'},
            {author: 'Mahatma Gandhi', citation: 'I believe that a man is the strongest soldier for daring to die unarmed.'},
        ];

    };

    this.getRandomQuote = function(quotes = []){
        const randomNumber = Math.floor(Math.random()*Math.floor(quotes.length));
        return quotes[randomNumber];
    };

    this.getJSON = function(){
        res.json(this.getRandomQuote(this.getQuotes()));
        res.end();
    }

    this.getJSON();

};

module.exports = RandomQuoteController;