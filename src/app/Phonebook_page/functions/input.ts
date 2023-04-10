const input = function(nativeObj){
    if (nativeObj.filterValue === "") {
        nativeObj.filteredContacts = nativeObj.contacts;
        return;
      }
      nativeObj.filteredContacts = nativeObj.contacts.filter((contact) => {
        const lowerContact = contact.name.toLowerCase();
        return lowerContact.includes(nativeObj.filterValue.toLowerCase());
      });
}

export default input