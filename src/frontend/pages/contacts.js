window.handleContactsRequest = async () => {
  document.body.innerHTML = `
  <h1>Contacts</h1>
  <ul></ul>`;

  const contactsResponse = await fetch("/api/contacts");
  const contacts = await contactsResponse.json();
  console.log(contacts);

  const ul = document.querySelector("ul");
  contacts.forEach((contact) => {
    const li = document.createElement("li");
    li.innerHTML = `${contact.name}, ${contact.phonenumber}`;
    ul.appendChild(li);
  });
};
