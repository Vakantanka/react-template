const app = require('../app')
const mockserver = require('supertest')
const { MongoMemoryServer } = require('mongodb-memory-server');
const { mongoose } = require('mongoose');

function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 equal to 3', () => {
  // given
  // no setup required

  // when
  const result = sum(1,2)

  // then
  expect(result).toBe(3)
})

test('/random endpoint gives back status 404', async () => {
  // given
  const server = mockserver(app)

  // when
  const response = await server.get('/api/random')

  // then
  expect(response.status).toBe(404)
})

test('/mongo inmemory server is working', async () => {
  // given
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  const connection = await mongoose.connect(uri);

  // when
  const Cat = mongoose.model('Cat', { name: String });
  const kitty = new Cat({ name: 'Zildjian' });
  await kitty.save()
  
  // then
  const cat = await Cat.findOne()
  expect(cat.name).toBe('Zildjian')

  await connection.disconnect();
  await mongod.stop();
})
