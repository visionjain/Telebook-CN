const prompt = require("prompt-sync")();

const telebook = [
  {
    Name: "Vision Jain",
    Number: "Ese nai batauga",
    Email: "kuch to he@gmail.com",
  },
  {
    Name: "Rohit jain",
    Number: "9999999999",
    Email: "rohitkaburahall@gmail.com",
  },
  {
    Name: "Katherina CAFE",
    Number: "4564564564",
    Email: "aslihume@gmail.com",
  },
  {
    Name: "Virat Kohli",
    Number: "1234567891",
    Email: "form ata kab h jata kab h@gmail.com",
  },
];

const main = () => {
  console.log("MY TELEBOOK:");
  console.log("1. View Contacts");
  console.log("2. Add New Contact");
  console.log("3. Search a Contact");
  console.log("4. Delete a Contact");
  console.log("5. Update Contact");

  const choice = prompt("Enter your choice: ");
  switch (choice) {
    case "1":
      displayContacts();
      break;
    case "2":
      addNewContact();
      break;
    case "3":
      searchContact();
      break;
    case "4":
      deleteContact();
      break;
    case "5":
      updateContact();
      break;
    default:
      console.log("Invalid option! Please try again.");
  }
};

const displayContacts = () => {
  console.log("Contacts: ");
  telebook.forEach((contact) => {
    console.log(`Name: ${contact.Name}`);
    console.log(`Number: ${contact.Number}`);
    console.log(`Email: ${contact.Email}`);
    console.log("-----");
  });
};

const addNewContact = () => {
  const name = prompt("Enter Name: ");
  const number = prompt("Enter Number: ");
  const email = prompt("Enter Email: ");
  const newContact = { Name: name, Number: number, Email: email };
  telebook.push(newContact);
  console.log(`${name} has been added to your telebook.`);
};

const searchContact = () => {
  const name = prompt("Enter name to search: ");
  const contact = telebook.find((c) => c.Name === name);
  if (contact) {
    console.log(`Name: ${contact.Name}`);
    console.log(`Number: ${contact.Number}`);
    console.log(`Email: ${contact.Email}`);
  } else {
    console.log(`${name} not found in your telebook.`);
  }
};

const deleteContact = () => {
  const name = prompt("Enter the name of the contact you want to delete: ");
  const index = telebook.findIndex(contact => contact.Name === name);
  if (index === -1) {
    console.log("Contact not found.");
  } else {
    telebook.splice(index, 1);
    console.log("Contact deleted successfully.");
    console.log(telebook);
  }
};

main();
