import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeFilter } from "./redux/filtersSlice";
import { selectNameFilter } from "./redux/filtersSlice";
import ContactList from "./components/ContactList/ContactList";
import Container from "./components/Container/Container";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { selectFilteredContacts } from "./redux/contactsSlice";

const App = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);
  const searchData = useSelector(selectNameFilter);

  const addNewContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleSearchInput = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  useEffect(() => {}, [filteredContacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addContact={addNewContact} />
      <SearchBox searchData={searchData} onSearchInput={handleSearchInput} />
      <ContactList
        contactsData={filteredContacts}
        onDeleteContact={(id) => dispatch(deleteContact(id))}
      />
    </Container>
  );
};

export default App;
