
const contact1 = {
    name: "Amit Sharma",
    phone: "9876543210",
    email: "amit.sharma@example.com",


    getInfo: function () {
        return `Name: ${this.name}, Phone: ${this.phone}, Email: ${this.email}`;
    }
};

const contact2 = {
    name: "Neha Verma",
    phone: "9123456789",
    email: "neha.verma@example.com",


    getInfo: function () {
        return `Name: ${this.name}, Phone: ${this.phone}, Email: ${this.email}`;
    }
};

function printContactInfo(contact) {
    console.log(contact.getInfo());
}


printContactInfo(contact1);
printContactInfo(contact2);