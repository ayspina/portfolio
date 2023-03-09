const mongoose = require('mongoose');
const Schema = mongoose.Schema;

projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    deployedUrl: String,
    ghUrl: String,
    technologies: {
        type: [],
        required: true
    },
    screenshots: [],
    month: String,
    year: Number
})



module.exports = mongoose.model('Project', projectSchema);