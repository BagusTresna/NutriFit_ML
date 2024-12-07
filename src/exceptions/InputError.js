// src/exceptions/InputError.js

// Fungsi validasi untuk memastikan data input sesuai dengan yang diharapkan
const validateInput = (inputData) => {
    if (!inputData || typeof inputData !== 'object') {
        throw new Error("Invalid input data");
    }

    const requiredFields = ['Weight', 'Height', 'Age', 'Gender', 'Activity', 'Target'];
    for (const field of requiredFields) {
        if (!(field in inputData)) {
            throw new Error(`${field} is required`);
        }
    }
    // Lakukan validasi tambahan (misalnya pengecekan tipe data atau range nilai)
    if (inputData.Weight <= 0 || inputData.Height <= 0 || inputData.Age <= 0) {
        throw new Error("Weight, Height, and Age must be positive numbers.");
    }

    if (![0, 1].includes(inputData.Gender)) {
        throw new Error("Gender must be 0 (female) or 1 (male).");
    }

    // Misalnya Activity harus di antara 1.0 hingga 2.5 (aktivitas ringan hingga sangat aktif)
    if (inputData.Activity < 1.0 || inputData.Activity > 2.5) {
        throw new Error("Activity must be between 1.0 and 2.5.");
    }

    return true; // Jika validasi lolos, return true
};

module.exports = { validateInput };