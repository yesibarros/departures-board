import Dropdown from '../Form/Dropdown.vue'
import App from '../App.vue'

describe('Dropdown', () => {
    it('Dropdown is an object', () => {
      expect(typeof Dropdown.methods).toBe("object")
    })})

describe('App', () => {
    it('beforeMount is a function', () => {
        expect(typeof App.beforeMount).toBe("function")
    })

   })
       