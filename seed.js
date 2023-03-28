require('dotenv').config();
require('./config/database');

const Project = require('./models/project');

(async function() {

    await Project.deleteMany({});
    const projects = await Project.create([
        {title: 'Battleship', deployedUrl: 'https://ayspina.github.io/battleship/', ghUrl: 'https://github.com/ayspina/battleship', technologies: ['JavaScript, HTML, CSS'], screenshots: ['https://user-images.githubusercontent.com/60244001/206226052-b5efba1d-c0de-4b91-9b6f-8f03ebc31c0b.png'], month: 'December', year: 2022},
        {title: 'HouseplantHQ', deployedUrl: 'https://houseplant-hq.herokuapp.com/', ghUrl: 'https://github.com/ayspina/houseplant-hq', technologies: ['MongoDB', 'Express', 'EJS', 'Node.js'], screenshots: ['https://user-images.githubusercontent.com/60244001/211069548-2f48f148-65c7-47f3-95c7-ce25638ac92b.png', 'https://user-images.githubusercontent.com/60244001/211069589-d7708949-30d1-4a4b-a162-09dff768e7b4.png'], month: 'January', year: 2022},
        {title: 'The Pet Project', deployedUrl: '', ghUrl: 'https://github.com/ayspina/The-Pet-Project', technologies: ['PostgreSQL', 'Django', 'Python'], screenshots: ['https://user-images.githubusercontent.com/118827974/215112183-aef9b5d0-0461-4ac0-ac13-405b513c93a4.png', 'https://user-images.githubusercontent.com/118827974/215111557-be4ae299-426a-47de-bbec-505ca1b87f8f.png'], month: 'January', year: 2023},
        {title: 'Global Grapes', deployedUrl: 'https://global-grapes.herokuapp.com/', ghUrl: 'https://github.com/ayspina/global-grapes', technologies: ['MongoDB', 'Express', 'React.js', 'Node.js'], screenshots: ['https://user-images.githubusercontent.com/60244001/219690660-d8bddbf5-1e9d-4398-a2c6-1b06bc05ad66.png'], month: 'February', year: 2023},


    ]);

    console.log(projects);
    process.exit();
})();