'use strict'

class Client {
  get rules() {
    return {
      user_id: 'required',
      address: 'required',
      age: 'required',
      weight: 'required'
    }
  }


  get messages() {
    return {
      'user_id.required': 'Informe a propriedade user_id',
      'address.required': 'Informe a propriedade address',
      'age.required': 'Informe a propriedade age',
      'weight.required': 'Informe a propriedade weight'
    }
  }
}

module.exports = Client
