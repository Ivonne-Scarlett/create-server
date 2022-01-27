
const http = require('http')

const server = http.createServer( (request, response)=>{
    console.log('method:', request.method)
    console.log('URL:', request.url)
    console.log('headers:', request.headers)

    // if (request.method === 'GET' && request.url === '/hola'){
    //     response.write('Hola mundo')
    // } 
    // if (request.method === 'POST' && request.url === '/hola'){
    //     response.write('Aquí puedes crear un recurso')
    // } 
    // if (request.method === 'DELETE' && request.url === '/hola'){
    //     response.write('Aquí puedes borrar un recurso')
    // } 
    // if (request.method === 'GET' && request.url === '/adios'){
    //     response.write('byebye')
    // } 

    if(request.url === '/hola'){
        if(request.method === 'GET')
            response.write('Hola mundo')
        else if (request.method === 'POST')
            response.write('Aquí puedes crear un recurso')
        else if (request.method === 'DELETE')
            response.write('Aquí puedes borrar un recurso')
    }
    if (request.method === 'GET' && request.url === '/adios'){
        response.write('byebye')
    }     
    response.end()
})

server.listen(8080, () => {
    console.log('Server listening')
})


