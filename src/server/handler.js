// src/server/handler.js
const { makePrediction } = require('../services/inferenceService');

const handlePredictionRequest = async(req, res) => {
    try {
        const { Weight, Height, Age, Gender, Activity, Target } = req.body;

        // Validasi input
        if (typeof Weight !== 'number' || typeof Height !== 'number' || typeof Age !== 'number' ||
            typeof Gender !== 'number' || typeof Activity !== 'number' || typeof Target !== 'number') {
            return res.status(400).json({ error: 'Invalid input data' });
        }

        // Lakukan prediksi
        const prediction = await makePrediction({ Weight, Height, Age, Gender, Activity, Target });
        res.status(200).json({ prediction });
    } catch (error) {
        res.status(500).json({ error: 'Error processing prediction' });
    }
};

module.exports = { handlePredictionRequest };