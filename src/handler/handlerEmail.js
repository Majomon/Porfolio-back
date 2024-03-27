const controllerEmail = require("../controller/controllerEmail");

const handlerEmail = async (req, res) => {
  /* const { name, email, message } = req.body; */

  try {
    const email = await controllerEmail(req.body);
    res.status(200).json(email);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerEmail;
