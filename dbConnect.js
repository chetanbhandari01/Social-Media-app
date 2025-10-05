const mongoose = require('mongoose');

module.exports = async () => {
    const mongoUri = 'mongodb+srv://chatanbhandari123_db_user:ILt6meDhJm0qBa0s@cluster0.adhtf5v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

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
