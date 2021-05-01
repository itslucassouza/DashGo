import { createServer, Factory, Model, Response } from 'miragejs'
import faker from 'faker'


type User = {
    nane: string;
    email: string;
    created_at: string;    
}

export function makeServer() {

    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                name(i:  number) {
                        return `User ${i + 1}` 
                },
                email() {
                    return faker.internet.email().toLocaleLowerCase();
                },
                createdAt() {
                    return faker.date.recent(10)
                },
            })
        },

        seeds(server){  
            server.createList('user', 200)
        },

        routes() {
            //setando o namespace como 'api'
            this.namespace = 'api';

            //caso demore para responder, tratar casso (como loading)
            this.timing = 750;

            this.get('/users', function (schema, request) {
                const { page, per_page = 10} = request.queryParams

                const total = schema.all('user').length

                const pageStart = (Number(page) - 1) * Number(per_page);
                const pageEnd = pageStart + Number(per_page);

                const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd)

                return new Response(
                    200,
                    { 'x-total-count': String(total) },
                    {users}

                )
            })
            this.post('/users')


             // resetando o name space para nao conflitar com uma possivel rota 'api'
            this.namespace = ''
            this.passthrough();
        }
    })

    return server;
}


//CRUD