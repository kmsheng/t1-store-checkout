import { defineStore } from 'pinia'
import food1 from '../assets/food1.jpg'
import food2 from '../assets/food2.jpg'
import food3 from '../assets/food3.jpg'

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    items: [
      {
        id: '4231648',
        name: 'Chicken momo',
        qty: 1,
        price: 10.5,
        imgSrc: food1,
        alt: 'Three chicken momos on a plate.'
      },
      {
        id: '4231649',
        name: 'Spicy Mexican potatoes',
        qty: 1,
        price: 8.5,
        imgSrc: food2,
        alt: 'Spicy Mexican potatoes'
      },
      {
        id: '4231650',
        name: 'Breakfast',
        qty: 1,
        price: 5.9,
        imgSrc: food3,
        alt: 'Breakfast'
      }
    ]
  }),
  getters: {
    subtotal() {
      return this.items.reduce((s, item) => s + (item.price * item.qty), 0)
    }
  },
  actions: {
    setQty(id, qty) {
      const target = this.items.find(item => item.id === id)
      if (! target) {
        return
      }
      if (qty >= 1) {
        target.qty = qty
      }
    },
    deleteItem(id) {
      const i = this.items.findIndex(p => p.id === id)
      if (i > -1) {
        this.items.splice(i, 1)
      }
    }
  }
})
