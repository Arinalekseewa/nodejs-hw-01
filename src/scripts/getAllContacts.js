import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
    try {
        const existingContacts = await readContacts();

        console.log('📋 Список контактів:');
        console.log(existingContacts);

        return existingContacts;
    } catch (error) {
        console.error('Помилка при зчитуванні контактів:', error.message);
    }
};

console.log(await getAllContacts());
