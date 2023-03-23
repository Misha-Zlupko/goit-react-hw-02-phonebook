import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Component } from 'react';
import { nanoid } from 'nanoid';

export class Feedback extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterChange = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  // heandleFilterUsers = () => {
  //   this.setState(prev => ({
  //     contacts: prev.contacts.filter(contact =>
  //       contact.name.includes(prev.filters.filter)
  //     ),
  //   }));
  // };
  getFiltredUsers = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(user => user.name.toLowerCase().includes(filter));
  };

  heandleSubmit = newContacts => {
    if (this.state.contacts.find(item => item.name === newContacts.name)) {
      alert(`${newContacts.name} is already in contacs`);
    } else {
      this.setState(prev => ({ contacts: [...prev.contacts, newContacts] }));
    }
  };

  heandleDelite = ToDoId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(todo => todo.name !== ToDoId),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmmit={this.heandleSubmit} />

        <h2>Contacts</h2>
        <Filter
          user={this.state.contacts}
          onChangeSearch={this.handleFilterChange}
          search={this.state.filter}
        />
        <ContactList
          contacts={this.getFiltredUsers()}
          onDeliteTodo={this.heandleDelite}
        />
      </div>
    );
  }
}
