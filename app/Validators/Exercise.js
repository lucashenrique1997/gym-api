'use strict'

class Exercise {
  get rules () {
    return {
      name: 'required',
      observation: 'required',
      series: 'required',
      waiting_time: 'required',
    }
  }

  get messages() {
    return {
      'name.required': 'Informe a propriedade name',
      'observation.required': 'Informe a propriedade observation',
      'series.required': 'Informe a propriedade series',
      'waiting_time.required': 'Informe a propriedade waiting_time',
    }
  }
}

module.exports = Exercise
