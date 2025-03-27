// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <form>
        <label htmlFor="name">Nom:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
