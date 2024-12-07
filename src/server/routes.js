// server/routes.js
const { predict } = require('../services/inferenceService'); // Pastikan path sesuai dengan struktur folder

const routes = [{
    method: 'POST',
    path: '/predict',
    handler: async(request, h) => {
        try {
            const inputData = request.payload;
            const prediction = await predict(inputData); // Panggil fungsi predict
            return h.response(prediction).code(200); // Kembalikan hasil prediksi
        } catch (error) {
            console.error("Error in /predict route:", error);
            return h.response({ error: 'An error occurred during prediction' }).code(500);
        }
    }
}];

module.exports = routes;