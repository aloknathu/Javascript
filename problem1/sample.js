
// Create a book object
const book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,

    // Method to return book summary
    getSummary: function () {
        return `The book '${this.title}' was written by ${this.author} in ${this.year}.`;
    }
};

// Function to print book summary
function printBookSummary(bookObj) {
    console.log(bookObj.getSummary());
}

// Call the function to print the summary
printBookSummary(book);



