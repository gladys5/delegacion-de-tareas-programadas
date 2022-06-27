const { app } = require("./app");

const { db } = require("./utils/db");
const { User } = require("./models/user.model");
const { Task } = require("./models/task.model");

db.authenticate()
  .then(() => console.log("Database authenticate"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log("Database sync"))
  .catch((err) => console.log(err));

User.hasMany(Task, { foreignKey: "userId" });
Task.belongsTo(User);

const PORT = process.env.PORT || 4600;

app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`);
});
