const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// models
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
    {useNewUrlParser: true}
);

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

ChallengeRoutes(app);
UserRoutes(app);
CategoryRoutes(app);
ItemRoutes(app);

app.listen(port);
app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);