const database = require("../utils/database");

const findUserByReference = async (docRef) => {
  const generalData = await database.collection("users").doc(docRef);
  const userData = await generalData.get();

  return userData.data();
};

const updateUser = async (docRef, data) => {
  const generalData = await database.collection("users").doc(docRef);
  const userData = await generalData.update(data);

  return userData;
};

module.exports = { findUserByReference, updateUser };
