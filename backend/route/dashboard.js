const router = require('express').Router();
const UserCtrl = require("../controller/user");
const auth = require('../middleware/auth');
const User = require("../model/User");

router.get('/', auth({block: true}), async (req, res) => {
  // send all dashboards
  const user = await User.findById(res.locals.userId)
  res.json({user})
})    

router.get('/:id', async (req, res) => {
  // send one dashboard identified by id
})  

router.post('/', async (req, res) => {
  // create a dashboard, send back created id
})  

router.patch('/:id', async (req, res) => {
  // modify dashboard with id
})  

router.delete('/:id', async (req, res) => {
// delete id dashboard
})

router.get('/:id/todos', async (req, res) => {
    // send dashboard all todos from dashboard identified by id
})

router.post('/:id/todos', async (req, res) => {
  // create a todo, send back created todoid
})

router.patch('/:id/todos/:todoId', async (req, res) => {
  // modify todo identified by todoId
})

router.delete('/:id/todos/:todoId', async (req, res) => {
  // delete todo identified by todoId
})

module.exports = router