const jokesController= require('../controllers/jokes.controller');

module.exports = (app)=>{
    app.get("/api/jokes",jokesController.seeAllJokes);
    app.get("/api/jokes/:id",jokesController.seeOneJoke);
    app.post('/api/jokes',jokesController.createJoke);
    app.patch('/api/jokes/:id',jokesController.updateJoke);
    app.delete("/api/jokes/:id",jokesController.deleteOneJoke);
    app.get("/api/jokes/random",jokesController.getOneRandomJoke);
};