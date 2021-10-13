import Sequelize from 'sequelize';
import { sequelize } from '../database/database.js';

import Task from './Tasks.js'

const Project = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    deliverydate: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

Project.hasMany(Task, { foreingKey: 'projectId', sourceKey: 'id'});
Task.belongsTo(Project, { foreingKey: 'projectId', sourceKey: 'id'});

export default Project;