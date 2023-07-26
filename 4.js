// Arrange in alphabetical order

const books = [
    {
        title: 'Wings of Fire',
        author: "Dr. APJ Abdul Kalam",
        year: 1999,
    },
    {
        title: 'Ignited Minds',
        author: "Dr. APJ Abdul Kalam",
        year: 2002,
    },
    {
        title: 'Failure is Teacher',
        author: "Dr. APJ Abdul Kalam",
        year: 2018,
    },
    {
        title: 'Learning How to Fly',
        author: "Dr. APJ Abdul Kalam",
        year: 2016,
    },
];

function logTitle(title) {
    title.sort();
    console.log(title.join(" ,"));
}

function extractTitles(book, callback) {
    const titles = books.map((book) => books.titles);
    callback(titles);
}

extractTitles(books, logTitle);