"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "quotes",
      [
        {
          "id": 1,
          "quote": "Don't cry because it's over, smile because it happened.",
          "authorId": 1
        },
        {
          "id": 2,
          "quote": "Don't cry because it's over, smile because it happened.",
          "authorId": 1
        },
        {
          "id": 3,
          "quote": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
          "authorId": 2
        },
        {
          "id": 4,
          "quote": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
          "authorId": 2
        },
        {
          "id": 5,
          "quote": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
          "authorId": 2
        },
        {
          "id": 6,
          "quote": "Be yourself; everyone else is already taken.",
          "authorId": 3
        },
        {
          "id": 7,
          "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
          "authorId": 4
        },
        {
          "id": 8,
          "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
          "authorId": 4
        },
        {
          "id": 9,
          "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
          "authorId": 4
        },
        {
          "id": 10,
          "quote": "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
          "authorId": 5
        },
        {
          "id": 11,
          "quote": "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
          "authorId": 6
        },
        {
          "id": 12,
          "quote": "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
          "authorId": 6
        },
        {
          "id": 13,
          "quote": "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
          "authorId": 6
        },
        {
          "id": 14,
          "quote": "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
          "authorId": 1
        },
        {
          "id": 15,
          "quote": "A room without books is like a body without a soul.",
          "authorId": 7
        },
        {
          "id": 16,
          "quote": "A room without books is like a body without a soul.",
          "authorId": 7
        },
        {
          "id": 17,
          "quote": "So many books, so little time.",
          "authorId": 8
        },
        {
          "id": 18,
          "quote": "So many books, so little time.",
          "authorId": 8
        },
        {
          "id": 19,
          "quote": "You only live once, but if you do it right, once is enough.",
          "authorId": 9
        },
        {
          "id": 20,
          "quote": "You only live once, but if you do it right, once is enough.",
          "authorId": 9
        },
        {
          "id": 21,
          "quote": "Be the change that you wish to see in the world.",
          "authorId": 10
        },
        {
          "id": 22,
          "quote": "Be the change that you wish to see in the world.",
          "authorId": 10
        },
        {
          "id": 23,
          "quote": "In three words I can sum up everything I've learned about life: it goes on.",
          "authorId": 11
        },
        {
          "id": 24,
          "quote": "Friendship ... is born at the moment when one man says to another \"What! You too? I thought that no one but myself . . .",
          "authorId": 12
        },
        {
          "id": 25,
          "quote": "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
          "authorId": 13
        },
        {
          "id": 26,
          "quote": "Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend",
          "authorId": 14
        },
        {
          "id": 27,
          "quote": "No one can make you feel inferior without your consent.",
          "authorId": 15
        },
        {
          "id": 28,
          "quote": "No one can make you feel inferior without your consent.",
          "authorId": 15
        },
        {
          "id": 29,
          "quote": "If you tell the truth, you don't have to remember anything.",
          "authorId": 16
        },
        {
          "id": 30,
          "quote": "A friend is someone who knows all about you and still loves you.",
          "authorId": 17
        },
        {
          "id": 31,
          "quote": "A friend is someone who knows all about you and still loves you.",
          "authorId": 17
        },
        {
          "id": 32,
          "quote": "Always forgive your enemies; nothing annoys them so much.",
          "authorId": 3
        },
        {
          "id": 33,
          "quote": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
          "authorId": 18
        },
        {
          "id": 34,
          "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
          "authorId": 10
        },
        {
          "id": 35,
          "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
          "authorId": 10
        },
        {
          "id": 36,
          "quote": "I am so clever that sometimes I don't understand a single word of what I am saying.",
          "authorId": 19
        },
        {
          "id": 37,
          "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
          "authorId": 20
        },
        {
          "id": 38,
          "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
          "authorId": 20
        },
        {
          "id": 39,
          "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
          "authorId": 3
        },
        {
          "id": 40,
          "quote": "Without music, life would be a mistake.",
          "authorId": 21
        },
        {
          "id": 41,
          "quote": "Without music, life would be a mistake.",
          "authorId": 21
        },
        {
          "id": 42,
          "quote": "Insanity is doing the same thing, over and over again, but expecting different results.",
          "authorId": 22
        },
        {
          "id": 43,
          "quote": "Insanity is doing the same thing, over and over again, but expecting different results.",
          "authorId": 22
        },
        {
          "id": 44,
          "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
          "authorId": 23
        },
        {
          "id": 45,
          "quote": "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
          "authorId": 2
        },
        {
          "id": 46,
          "quote": "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
          "authorId": 24
        },
        {
          "id": 47,
          "quote": "We accept the love we think we deserve.",
          "authorId": 25
        },
        {
          "id": 48,
          "quote": "We accept the love we think we deserve.",
          "authorId": 25
        },
        {
          "id": 49,
          "quote": "It is better to be hated for what you are than to be loved for what you are not.",
          "authorId": 26
        },
        {
          "id": 50,
          "quote": "It is better to be hated for what you are than to be loved for what you are not.",
          "authorId": 26
        },
        {
          "id": 51,
          "quote": "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
          "authorId": 2
        },
        {
          "id": 52,
          "quote": "All that is gold does not glitter,Not all those who wander are lost;The old that is strong does not wither,Deep roots are not reached by the frost.From the ashes a fire shall be woken,A light from the shadows shall spring;Renewed shall be blade that was broken,The crownless again shall be king.",
          "authorId": 27
        },
        {
          "id": 53,
          "quote": "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
          "authorId": 28
        },
        {
          "id": 54,
          "quote": "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
          "authorId": 28
        },
        {
          "id": 55,
          "quote": "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
          "authorId": 4
        },
        {
          "id": 56,
          "quote": "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
          "authorId": 4
        },
        {
          "id": 57,
          "quote": "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
          "authorId": 29
        },
        {
          "id": 58,
          "quote": "As he read, I fell in love the way you fall asleep: slowly, and then all at once.",
          "authorId": 30
        },
        {
          "id": 59,
          "quote": "It is our choices, Harry, that show what we truly are, far more than our abilities.",
          "authorId": 31
        },
        {
          "id": 60,
          "quote": "Life is what happens to you while you're busy making other plans.",
          "authorId": 32
        },
        {
          "id": 61,
          "quote": "Good friends, good books, and a sleepy conscience: this is the ideal life.",
          "authorId": 16
        },
        {
          "id": 62,
          "quote": "Good friends, good books, and a sleepy conscience: this is the ideal life.",
          "authorId": 16
        },
        {
          "id": 63,
          "quote": "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).",
          "authorId": 16
        },
        {
          "id": 64,
          "quote": "It does not do to dwell on dreams and forget to live.",
          "authorId": 33
        },
        {
          "id": 65,
          "quote": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
          "authorId": 34
        },
        {
          "id": 66,
          "quote": "A woman is like a tea bag; you never know how strong it is until it's in hot water.",
          "authorId": 35
        },
        {
          "id": 67,
          "quote": "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
          "authorId": 36
        },
        {
          "id": 68,
          "quote": "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
          "authorId": 36
        },
        {
          "id": 69,
          "quote": "We are all in the gutter, but some of us are looking at the stars.",
          "authorId": 37
        },
        {
          "id": 70,
          "quote": "If you don't stand for something you will fall for anything.",
          "authorId": 38
        },
        {
          "id": 71,
          "quote": "The man who does not read has no advantage over the man who cannot read.",
          "authorId": 16
        },
        {
          "id": 72,
          "quote": "I have not failed. I've just found 10,000 ways that won't work.",
          "authorId": 39
        },
        {
          "id": 73,
          "quote": "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
          "authorId": 40
        },
        {
          "id": 74,
          "quote": "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
          "authorId": 40
        },
        {
          "id": 75,
          "quote": "The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.",
          "authorId": 41
        },
        {
          "id": 76,
          "quote": "The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.",
          "authorId": 41
        },
        {
          "id": 77,
          "quote": "The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.",
          "authorId": 41
        },
        {
          "id": 78,
          "quote": "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
          "authorId": 42
        },
        {
          "id": 79,
          "quote": "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
          "authorId": 42
        },
        {
          "id": 80,
          "quote": "Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.",
          "authorId": 43
        },
        {
          "id": 81,
          "quote": "Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.",
          "authorId": 43
        },
        {
          "id": 82,
          "quote": "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
          "authorId": 44
        },
        {
          "id": 83,
          "quote": "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
          "authorId": 4
        },
        {
          "id": 84,
          "quote": "A day without sunshine is like, you know, night.",
          "authorId": 45
        },
        {
          "id": 85,
          "quote": "I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.",
          "authorId": 1
        },
        {
          "id": 86,
          "quote": "Never put off till tomorrow what may be done day after tomorrow just as well.",
          "authorId": 16
        },
        {
          "id": 87,
          "quote": "I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.",
          "authorId": 46
        },
        {
          "id": 88,
          "quote": "I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.",
          "authorId": 46
        },
        {
          "id": 89,
          "quote": "I solemnly swear that I am up to no good.",
          "authorId": 47
        },
        {
          "id": 90,
          "quote": "That which does not kill us makes us stronger.",
          "authorId": 40
        },
        {
          "id": 91,
          "quote": "Have you ever been in love? Horrible isn't it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.",
          "authorId": 48
        },
        {
          "id": 92,
          "quote": "Love all, trust a few, do wrong to none.",
          "authorId": 49
        },
        {
          "id": 93,
          "quote": "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
          "authorId": 50
        },
        {
          "id": 94,
          "quote": "If you judge people, you have no time to love them.",
          "authorId": 51
        },
        {
          "id": 95,
          "quote": "There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.",
          "authorId": 52
        },
        {
          "id": 96,
          "quote": "For every minute you are angry you lose sixty seconds of happiness.",
          "authorId": 23
        },
        {
          "id": 97,
          "quote": "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
          "authorId": 53
        },
        {
          "id": 98,
          "quote": "My thoughts are stars I cannot fathom into constellations.",
          "authorId": 30
        },
        {
          "id": 99,
          "quote": "I love deadlines. I love the whooshing noise they make as they go by.",
          "authorId": 54
        },
        {
          "id": 100,
          "quote": "I love deadlines. I love the whooshing noise they make as they go by.",
          "authorId": 54
        },
        {
          "id": 101,
          "quote": "It is never too late to be what you might have been.",
          "authorId": 55
        }
      ].map((quote) => ({
        ...quote,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {
        ignoreDuplicates: true,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("quotes", null, {});
  },
};
