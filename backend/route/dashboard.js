const router = require('express').Router();
const UserCtrl = require("../controller/user");
const auth = require('./middlewaer/auth');

router.get('/api/dashboards'), auth({block: true}), async (req, res) => {
    // send all dashboards

}

router.get('/api/dashboards/:id/todos'), async (req, res) => {
    // send id dashboard all todos
}

router.get('/api/dashboards/:id'), async (req, res) => {
  // send id dashboard 
}

router.get('/api/dashboards/:id'), async (req, res) => {
  // send id dashboard 
}

router.post('/api/dashboards'), async (req, res) => {
  // create a dashboard, send back created id
}

router.post('/api/dashboards/:id/todos'), async (req, res) => {
  // create a todo, send back new todo id
}

router.patch('/api/dashboards/:id'), async (req, res) => {
  // modify id dashboard
}

router.patch('/api/dashboards/:id/todos/:todoId'), async (req, res) => {
  // modify id todo
}

router.delete('/api/dashboards/:id'), async (req, res) => {
  // delete id dashboard
}

router.delete('/api/dashboards/:id/todos/:todoId'), async (req, res) => {
  // delete id todo
}

