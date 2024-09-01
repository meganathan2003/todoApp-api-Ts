import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/database';
import taskRoutes from './routes/task.route';
import Task from './models/task.model';

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());
express.json(); // this is updated version in express 

// integrate the api routes
app.use('/api/v1', taskRoutes);


sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database & tables synced successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error syncing with the database:', err);
    });
