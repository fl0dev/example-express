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
      "authors",
      [
        {
          id: 1,
          name: "Dr. Seuss",
        },
        {
          id: 2,
          name: "Marilyn Monroe",
        },
        {
          id: 3,
          name: "Oscar Wilde",
        },
        {
          id: 4,
          name: "Albert Einstein",
        },
        {
          id: 5,
          name: "Bernard M. Baruch",
        },
        {
          id: 6,
          name: "William W. Purkey",
        },
        {
          id: 7,
          name: "Marcus Tullius Cicero",
        },
        {
          id: 8,
          name: "Frank Zappa",
        },
        {
          id: 9,
          name: "Mae West",
        },
        {
          id: 10,
          name: "Mahatma Gandhi",
        },
        {
          id: 11,
          name: "Robert Frost",
        },
        {
          id: 12,
          name: "C.S. Lewis,  The Four Loves",
        },
        {
          id: 13,
          name: "J.K. Rowling,  Harry Potter and the Goblet of Fire",
        },
        {
          id: 14,
          name: "Albert Camus",
        },
        {
          id: 15,
          name: "Eleanor Roosevelt,  This is My Story",
        },
        {
          id: 16,
          name: "Mark Twain",
        },
        {
          id: 17,
          name: "Elbert Hubbard",
        },
        {
          id: 18,
          name: "Maya Angelou",
        },
        {
          id: 19,
          name: "Oscar Wilde,  The Happy Prince and Other Stories",
        },
        {
          id: 20,
          name: "Martin Luther King Jr.,  A Testament of Hope: The Essential Writings and Speeches",
        },
        {
          id: 21,
          name: "Friedrich Nietzsche,  Twilight of the Idols",
        },
        {
          id: 22,
          name: "Narcotics Anonymous",
        },
        {
          id: 23,
          name: "Ralph Waldo Emerson",
        },
        {
          id: 24,
          name: "H. Jackson Brown Jr.,  P.S. I Love You",
        },
        {
          id: 25,
          name: "Stephen Chbosky,  The Perks of Being a Wallflower",
        },
        {
          id: 26,
          name: "André Gide,  Autumn Leaves",
        },
        {
          id: 27,
          name: "J.R.R. Tolkien,  The Fellowship of the Ring",
        },
        {
          id: 28,
          name: "Jane Austen,  Northanger Abbey",
        },
        {
          id: 29,
          name: "Maurice Switzer",
        },
        {
          id: 30,
          name: "John Green,  The Fault in Our Stars",
        },
        {
          id: 31,
          name: "J.K. Rowling,  Harry Potter and the Chamber of Secrets",
        },
        {
          id: 32,
          name: "Allen Saunders",
        },
        {
          id: 33,
          name: "J.K. Rowling,  Harry Potter and the Sorcerer's Stone",
        },
        {
          id: 34,
          name: "William Shakespeare,  As You Like It",
        },
        {
          id: 35,
          name: "Eleanor Roosevelt",
        },
        {
          id: 36,
          name: "Bil Keane",
        },
        {
          id: 37,
          name: "Oscar Wilde,  Lady Windermere's Fan",
        },
        {
          id: 38,
          name: "Gordon A. Eadie",
        },
        {
          id: 39,
          name: "Thomas A. Edison",
        },
        {
          id: 40,
          name: "Friedrich Nietzsche",
        },
        {
          id: 41,
          name: "Elie Wiesel",
        },
        {
          id: 42,
          name: "Neil Gaiman,  Coraline",
        },
        {
          id: 43,
          name: "Groucho Marx,  The Essential Groucho: Writings For By And About Groucho Marx",
        },
        {
          id: 44,
          name: "Douglas Adams,  The Long Dark Tea-Time of the Soul",
        },
        {
          id: 45,
          name: "Steve Martin",
        },
        {
          id: 46,
          name: "Pablo Neruda,  100 Love Sonnets",
        },
        {
          id: 47,
          name: "J.K. Rowling,  Harry Potter and the Prisoner of Azkaban",
        },
        {
          id: 48,
          name: "Neil Gaiman,  The Sandman, Vol. 9: The Kindly Ones",
        },
        {
          id: 49,
          name: "William Shakespeare,  All's Well That Ends Well",
        },
        {
          id: 50,
          name: "Dr. Seuss,  Oh, The Places You'll Go!",
        },
        {
          id: 51,
          name: "Mother Teresa",
        },
        {
          id: 52,
          name: "Sarah Dessen,  The Truth About Forever",
        },
        {
          id: 53,
          name: "Lao Tzu",
        },
        {
          id: 54,
          name: "Douglas Adams,  The Salmon of Doubt",
        },
        {
          id: 55,
          name: "George Eliot",
        },
      ].map((author) => ({
        ...author,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {
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
    await queryInterface.bulkDelete("authors", null, {});
  },
};
