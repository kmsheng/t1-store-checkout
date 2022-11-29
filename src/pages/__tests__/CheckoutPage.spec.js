import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CheckoutPage from '../CheckoutPage.vue'

describe('CheckoutPage', () => {
  it('renders properly', () => {
    const wrapper = mount(CheckoutPage)
    expect(wrapper.text()).toContain('Shopping Cart')
  })
})
