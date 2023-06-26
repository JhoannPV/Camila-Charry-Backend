const { sequelize } = require("../database/sequelize.config");
const { DataTypes } = require("sequelize");
const { Plantilla_Insumo } = require("./plantilla_insumo.model");

const Insumo = sequelize.define(
  "insumo",
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
    color: {
      type: DataTypes.STRING,
    },
    precioUnitario: {
      type: DataTypes.DECIMAL(10, 2),
    },
    cantidad: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING(2000),
    },
    plantillaInsumo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Plantilla_Insumo,
        key: "id",
      },
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

module.exports = { Insumo };
