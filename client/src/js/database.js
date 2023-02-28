import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // Create a new database connection
  const db = await openDB('jate', 1);
  // Open a transaction on the database
  const tx = db.transaction('jate','readwrite');
  // Access the object store
  const store = tx.objectStore('jate');
  // Add content to the store
  const request = store.put({ id: 1, value: content });
  // Get the result of the request
  request.onsuccess = () => {
    console.log('success');
  };
  request.onerror = () => {
    console.log('error');
  };
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // Create a new database connection
  const db = await openDB('jate', 1);
  // Open a transaction on the database
  const tx = db.transaction('jate','readonly');
  // Access the object store
  const store = tx.objectStore('jate');
  const getAll = store.getAll();
  getAll.onsuccess = () => {
    console.log('success');
  };
  getAll.onerror = () => {
    console.log('error');
  };
};

initdb();
