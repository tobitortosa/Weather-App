const { Router } = require("express");
const router = Router();
const { getWeatherDetails } = require("../controllers/index");

router.get("/", (req, res) => {
  res.status(200).send("Prueba de ruta Ok");
});

router.get("/card", async (req, res) => {
  const { city } = req.query;
  if (!city) {
    return res.send("Parametro no dado");
  }
  try {
    res.status(200).send(await getWeatherDetails(city));
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = router;
