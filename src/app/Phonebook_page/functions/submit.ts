import { nanoid } from "nanoid";

const submit = function(nativeObj,{ name, number }):void {
    if (name === "" || number === "") {
      return;
    }
    if (nativeObj.contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already at contacts`);
      return;
    }
    nativeObj.contacts = [
      ...nativeObj.contacts,
      {
        id: nanoid(),
        name,
        number,
      },
    ];
    console.log(nativeObj.contacts);
    nativeObj.filteredContacts = nativeObj.contacts
    localStorage.setItem("contacts",JSON.stringify(nativeObj.contacts))
  }

export default submit