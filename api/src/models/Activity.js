const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Turist = sequelize.define('activity', {
    id:{
      type: DataTypes.UUID,
      defaultValue : UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    difficulty: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      defaultValue: "1",
    },
    duration: {
      type: DataTypes.STRING,
    },
    season: {
      type: DataTypes.ENUM("Summer", "Winter", "Autumn", "Spring"),
      allowNull: false,
    },    
  }); 
};
