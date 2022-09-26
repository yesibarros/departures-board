import Dropdown from '../Form/Dropdown.vue'
import getAllDepartures from './allDepartures'

import App from '../App.vue'

describe('Dropdown', () => {
    it('Dropdown is an object', () => {
      expect(typeof Dropdown.methods).toBe("object")
    })})

describe('App', () => {
    it('beforeMount is a function', () => {
        expect(typeof App.beforeMount).toBe("function")
    })
    it('the data was fetched', async () => {
        const response = await getAllDepartures();
        expect(response.data.allDepartures.length).toBeGreaterThan(0);
    });

    it('the data fetch failed', async () => {
      const res = await getAllDepartures();
      expect(res.response.status).toBe(404);
  });
   })
       