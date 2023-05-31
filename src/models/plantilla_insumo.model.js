const { sequelize } = require("../database/sequelize.config");
const { DataTypes } = require("sequelize");

const Plantilla_Insumo = sequelize.define(
  "plantillas_insumo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING(2000),
    },
    image: {
      type: DataTypes.BLOB,
    },
  },
  {
    // Other model options go here
  }
);

(async () => {
  await sequelize.sync();
})();

module.exports = { Plantilla_Insumo };
