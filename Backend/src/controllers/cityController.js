const cityModel = require("../models/city");

async function getAllCities(req, res) {
  const cities = await cityModel.find();

  res.status(200).json({
    success: true,
    message: "cities fetched successfully",
    cities,
  });
}

async function getCityDetails(req, res) {
  try {
    const { cityName } = req.params;
    console.log(cityName)
    const city = await cityModel.findOne({
      name: { $regex: new RegExp(`^${cityName}$`, "i") },
    });

    if (!city) {
      res.status(400).json({
        success: false,
        message: "city not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "city fetched Sucessfully",
      city,
    });
  } catch (err) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

async function searchCity(req, res) {
    const searchQuery=req.query.q;
    // console.log(searchQuery)
  try {
    const cities = await cityModel.find({
      name: { $regex: `^${searchQuery}`, $options: "i" },
    }).limit(5);
    return res.json(cities);
  } catch (err) {
    return res.status(401).json({ message: "Search failed" });
  }
}
module.exports = { getAllCities, getCityDetails,searchCity };
