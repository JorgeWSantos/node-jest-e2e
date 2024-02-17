import { randomUUID } from 'crypto';
import { once } from 'events';
import { createServer } from 'http';
const Database = new Map()

function respondJSON(data, response) {
    return response.end(JSON.stringify(data))
}

export async function handler(req, res) {

    const { method, url } = req
    // res.end('hello world')

    if (method === 'GET')
        return respondJSON([...Database.values()], res);

    if (method === 'POST') {
        const body = JSON.parse(await once(req, 'data'))
        const id = randomUUID()
        Database.set(id, body)
        return respondJSON({ ok: true }, res)
    }

    if (method === 'DELETE') {
        Database.clear()
        return respondJSON([...Database.values()], res);
    }
}

export default createServer(handler);