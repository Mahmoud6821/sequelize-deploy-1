import { Sequelize } from "sequelize";

export const sequelizeInstance = new Sequelize("bagksft5gktyj2zuwbvv", "uholhljnnhulcwcs", "HMlhuOJ1G8QfpW3qrKTs", {
  host: "bagksft5gktyj2zuwbvv-mysql.services.clever-cloud.com",
  dialect: "mysql",
});

export const dbConnection = async () => {
  try {
    await sequelizeInstance.sync({ alter: true, force: false });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

