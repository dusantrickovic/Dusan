import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import ListContacts from './components/ListContacts';
import AddContact from './components/AddContact';
import { uuid } from 'uuidv4';

const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [currentTab, setCurrentTab] = useState(1);



  useEffect(() => {
    switch (currentTab) {
      case 0:
      case 1:
      default:
        window.history.pushState(null, '', '/list');
        console.log("Active tab is: " + currentTab);
        break;
      case 2:
        window.history.pushState(null, '', '/add');
        console.log("Active tab is: " + currentTab);
        break;
    }
  }, [currentTab]);
  console.log("Current tab is: " + currentTab);


  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  useEffect(() => {
    const retreiveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retreiveContacts) setContacts(retreiveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);


  return (
    <div className="App">

      <div className="header">
        <div id="list" className={`menu ${currentTab === 1 ? "active-label" : ""}`}>
          <h2 onClick={() => { setCurrentTab(1) }}>List</h2>
        </div>
        <div id="add" className={`menu ${currentTab === 2 ? "active-label" : ""}`}>
          <h2 onClick={() => { setCurrentTab(2) }}>Add</h2>
        </div>
      </div>

      <section className="app-body">
        <div className={`list ${currentTab === 1 ? "active-tab" : "inactive-tab"}`}>
          <ListContacts contacts={contacts} getContactId={removeContactHandler} />
        </div>

        <div id="add" className={`add ${currentTab === 2 ? "active-tab" : "inactive-tab"}`}>
          <AddContact addContactHandler={addContactHandler} />
        </div>
      </section>
    </div>
  );

}

export default App;
