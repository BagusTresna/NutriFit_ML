// src/services/inferenceService.js
const { loadModel } = require('./loadModel'); // Memastikan path benar untuk loadModel.js
const { validateInput } = require('../exceptions/InputError'); // Memastikan validasi input diekspor dengan benar

const predict = async(inputData) => {
    console.log("Received input data:", inputData); // Log input data untuk pengecekan
    try {
        // Validasi input
        validateInput(inputData);

        // Memuat model
        const model = await loadModel(); // Memanggil fungsi loadModel
        console.log("Model loaded successfully.");

        // Menyiapkan input data untuk prediksi
        const tensorInput = tf.tensor([Object.values(inputData)]); // Menyiapkan input dalam bentuk tensor
        const prediction = model.predict(tensorInput); // Melakukan prediksi
        console.log("Prediction result:", prediction.arraySync()); // Log hasil prediksi

        return prediction.arraySync(); // Mengembalikan hasil prediksi
    } catch (error) {
        console.error("Prediction error:", error); // Log error jika terjadi
        throw new Error("Failed to make prediction");
    }
};

module.exports = { predict };