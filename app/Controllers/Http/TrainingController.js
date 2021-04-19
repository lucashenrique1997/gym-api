'use strict'
const Training = use("App/Models/Training");

class TrainingController {

  async index() {
    return Training.all();
  }

  async show({params}) {
    const training = await Training.findOrFail(params.id);
    await training.load('exercises');
    return training;
  }

  async store({params, request}) {
    const {exercises, ...data} = request.only([
      "client_id",
      "name",
      "observation",
      "exercises"
    ]);

    const training = await Training.create(data);

    if(exercises) {
      await training.exercises().attach(exercises);
    }

    await training.load('exercises');
    return training;
  }

  async update({params, request}) {
    const {exercises, ...data} = request.only([
      "client_id",
      "name",
      "observation",
      "exercises"
    ]);

    const training = await Training.findOrFail(params.id);
    training.merge(data);
    await training.save();

    if(exercises) {
      await training.exercises().sync(exercises);
    }

    await training.load('exercises');
    return training;
  }

  async destroy({params}) {
    const training = await Training.findOrFail(params.id);
    // const exercises = await training.load('exercises');
    await training.exercises().delete();
    return training.delete();
  }

}

module.exports = TrainingController
