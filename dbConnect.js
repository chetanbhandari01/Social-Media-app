const mongoose = require('mongoose');

module.exports = async () => {
    const mongoUri = '#####
        ';

    try {
        const connect = await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true, // Correct capitalization
        });
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

