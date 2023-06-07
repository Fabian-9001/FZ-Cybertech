const database = require("../utils/database");

const findUserByReference = async (docRef) => {
  const generalData = await database.collection("users").doc(docRef);
  const userData = await generalData.get();

  return userData.data();
};

module.exports = { findUserByReference };
