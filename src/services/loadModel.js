// src/services/loadModel.js
require('dotenv').config(); // Memuat variabel lingkungan dari file .env

const tf = require('@tensorflow/tfjs-node'); // Pastikan TensorFlow.js untuk Node.js sudah terpasang

const loadModel = async() => {
    const modelUrl = process.env.MODEL_PATH;

    if (!modelUrl) {
        throw new Error('MODEL_PATH is not defined in .env file');
    }

    try {
        console.log("Loading model from:", modelUrl);
        const model = await tf.loadLayersModel(modelUrl); // Memuat model dari URL atau path
        console.log("Model loaded successfully.");
        return model;
    } catch (error) {
        console.error("Error loading model:", error);
        throw new Error("Failed to load model");
    }
};

module.exports = { loadModel };