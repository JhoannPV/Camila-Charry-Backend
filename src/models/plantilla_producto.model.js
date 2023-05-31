const { sequelize } = require("../database/sequelize.config");
const { DataTypes } = require("sequelize");

const Plantilla_Producto = sequelize.define(
  "plantilla_producto",
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
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

(async () => {
  await sequelize.sync();
})();

module.exports = { Plantilla_Producto };
