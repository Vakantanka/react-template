const app = require('../app')
const mockserver = require('supertest')
const { MongoMemoryServer } = require('mongodb-memory-server');
const { mongoose } = require('mongoose');
const User = require('../model/user')

test('new user gets back an empty dashboard array', async () => {
  // given
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  const connection = await mongoose.connect(uri);
  const newUser = new User({ username: 'Zildjian', googleId: '123456789' });
  await newUser.save()

  const client = mockserver.agent(app)
  client.set('authorization', newUser._id)
  
  // when
  const response = await client.get('/api/dashboards/')
  const responseData = response.body

  // then
  expect(response.status).toBe(200)
  expect(responseData.user.dashboards).toStrictEqual([])

  await connection.disconnect();
  await mongod.stop();
})
