function findPlantById(plants, id) {
    let result = null;
    for (let i = 0; i < plants.length; i++) {
      let plant = plants[i];
      if (plant.id === id) {
        result = plant;
      }
    }
    return result;
  }

  function findPlantByName(plants, name){
      let result = plants.find(plant => plant.name === name);
      return result;
  }
  
  module.exports = {
      findPlantById: findPlantById,
      findPlantByName: findPlantByName,
  };