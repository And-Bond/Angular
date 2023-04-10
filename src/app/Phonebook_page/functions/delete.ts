const deleteContact = function(nativeObj,id){
    nativeObj.contacts = nativeObj.contacts.filter((contact) => {
        return contact.id !== id;
      });
      nativeObj.filteredContacts = nativeObj.contacts;
      localStorage.setItem("contacts",JSON.stringify(nativeObj.contacts))
}

export default deleteContact