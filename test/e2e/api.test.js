import { describe, expect, test } from '@jest/globals';
import supertest from 'supertest';
import Server from '../../src/server';

describe('API E2E Test Suite', () => {

    let server;

    beforeEach(async () => {
        server = Server;
    });

    // afterAll(() => {
    //     server = null;
    // });

    describe('first', () => {

        test('GET / - should return an array', async () => {
            const response = await supertest(server).get('/')
            const data = JSON.parse(response.text)
            expect(data).toBeInstanceOf(Array)
            expect(data.length).toEqual(0)
        })

        test('POST / - should save an item and return ok', async () => {
            const response = await supertest(server).post('/').send({ name: 'jorge', email: 'jorgewillian' })
            const expectedResponse = { ok: true }
            const data = JSON.parse(response.text)
            expect(data).toStrictEqual(expectedResponse)
        })

        test('GET / - should return an array with one object', async () => {
            const response = await supertest(server).get('/')
            const data = JSON.parse(response.text)
            expect(data).toBeInstanceOf(Array)
            expect(data.length).toEqual(1)
        })

        test('DELETE / - should delete an item and return ok', async () => {
            const response = await supertest(Server).delete('/')
            const data = JSON.parse(response.text)
            expect(data).toBeInstanceOf(Array)
            expect(data.length).toEqual(0)
        })
    })

    describe('second', () => {
        describe('API E2E Test Suite', () => {

            let server;

            beforeEach(async () => {
                server = Server;
            });

            test('GET / - should return an array with one object', async () => {
                const response = await supertest(server).get('/')
                const data = JSON.parse(response.text)
                expect(data).toBeInstanceOf(Array)
                expect(data.length).toEqual(0)
            })
        })
    })

})

