const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Models
global.Challenge = require('./api/models/ChallengeModel');
global.User = require('./api/models/UserModel');
global.Category = require('./api/models/WasteCategoryModel');
global.Item = require('./api/models/WasteItemModel');

// Routes
const ChallengeRoutes = require('./api/routes/ChallengeRoutes');
const UserRoutes = require('./api/routes/UserRoutes');
const CategoryRoutes = require('./api/routes/WasteCategoryRoutes');
const ItemRoutes = require('./api/routes/WasteItemRoutes');

// MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/WasteSorting', 
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // This is for form data

// Register routes
ChallengeRoutes(app);
UserRoutes(app);
CategoryRoutes(app);
ItemRoutes(app);

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` });
});
