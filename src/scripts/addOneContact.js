import { createFakeContact } from './createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
    try {
        const existingContacts = await readContacts();
        const newContact = createFakeContact();
        const updatedContacts = [...existingContacts, ...newContact];

        await writeContacts(updatedContacts);

    console.log(`Додано один контакт. Загальна кількість: ${updatedContacts.length}`);
    } catch (error) {
        console.error('Помилка при генерації контакту:', error.message);
    }
 };

addOneContact();