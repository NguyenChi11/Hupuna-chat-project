import PocketBase from 'pocketbase';

const pbUrl = process.env.NEXT_PUBLIC_POCKETBASE_URL || 'https://files.hupuna.vn/';

let pbClientInstance: PocketBase | null = null;

// Client-side singleton
export const createClientPb = () => {
  if (typeof window === 'undefined') {
    // Optional: Warning if called on server, but technically safe for read-only if public
    // console.warn('createClientPb called on server side');
  }

  if (!pbClientInstance) {
    pbClientInstance = new PocketBase(pbUrl);
  }
  return pbClientInstance;
};

// Helper to get auth token from cookie or local storage if needed
// But PocketBase SDK handles LocalStorage automatically in browser.
