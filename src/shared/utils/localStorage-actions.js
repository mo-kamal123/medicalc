/**
 * LocalStorage Utility Functions
 *
 * Utility functions for managing localStorage operations throughout the application.
 * Provides type-safe wrappers around localStorage API with JSON serialization/deserialization.
 *
 * Features:
 * - JSON serialization for complex objects
 * - Error handling for invalid JSON
 * - Consistent API for storage operations
 */

/**
 * Add item to localStorage
 *
 * Stores a value in localStorage with JSON stringification.
 * Can store any JSON-serializable value (objects, arrays, primitives).
 *
 * @param {string} key - The key under which to store the value
 * @param {*} value - The value to store (will be JSON stringified)
 *
 * @example
 * addToLocalStorage('user', { name: 'John', age: 30 });
 * addToLocalStorage('settings', { theme: 'dark' });
 */
export const addToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving to localStorage with key "${key}":`, error);
    throw error;
  }
};

/**
 * Remove item from localStorage
 *
 * Removes an item from localStorage by key.
 * Safe to call even if the key doesn't exist.
 *
 * @param {string} key - The key of the item to remove
 *
 * @example
 * removeFromLocalStorage('token');
 * removeFromLocalStorage('userData');
 */
export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing from localStorage with key "${key}":`, error);
    throw error;
  }
};

/**
 * Get item from localStorage
 *
 * Retrieves an item from localStorage by key.
 * Returns the raw string value (doesn't parse JSON automatically).
 * For JSON values, use JSON.parse() on the returned value.
 *
 * @param {string} key - The key of the item to retrieve
 * @returns {string|null} The stored value as a string, or null if key doesn't exist
 *
 * @example
 * const token = getFromLocalStorage('token'); // Returns string or null
 * const userStr = getFromLocalStorage('user'); // Returns JSON string
 * const user = JSON.parse(getFromLocalStorage('user')); // Parse JSON
 */
export const getFromLocalStorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item;
  } catch (error) {
    console.error(`Error reading from localStorage with key "${key}":`, error);
    return null;
  }
};
