export const FiltersMixin = {
  filters: {
    $amount (value) {
      return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }
  }
}
