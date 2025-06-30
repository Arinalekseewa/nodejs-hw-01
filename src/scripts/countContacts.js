import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
    try {
        const contacts = readContacts();
        const count = contacts.length;

        console.log(`Кількість контактів: ${count}`);

    return count;
  } catch (error) {
    console.error('Помилка при підрахунку контактів:', error.message);
  }
 };

console.log(await countContacts());