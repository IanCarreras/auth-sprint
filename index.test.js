const supertest = require('supertest')
const server = require('./api/server')

test('register route', async () => {
    const res = await supertest(server)
        .post('/api/auth/register')
        .send({ username: 'Ian', password: '123'})
        console.log(res.error)
    expect(res.status).toBe(201)  
    expect(res.type).toBe('application/json')
    expect(res.body.username).toBe('Ian')
})

test('login route', async () => {
    const res = await supertest(server)
        .post('/api/auth/login')
        .send({ username: 'Ian', password: '123' })
    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toEqual('welcome Ian')
})