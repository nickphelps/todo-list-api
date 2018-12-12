var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var todoList = [
    {
        id: 1,
        todo: "Implement a REST API"
    },
    {
        id: 2,
        todo: "Implement a REST API"
    }
];

// GET /api/todos
app.get('/api/todos', function(req, res, nextFn) {
    console.log('total todos...', todoList)
    res.send(todoList)
})

// GET /api/todos/:id
app.get('/api/todos/:id', function(req,res,nextFn) {
    // console.log('todos at id:', req.params.id) //my parameter at the end of the url
    //loop through and see where the id matches up. Returning the whole id 1 object
    const myID = req.params.id //end of url
    console.log('myID...', myID)

    let myReturnedArray = []

    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id = myID) {
            myReturnedArray = todoList[i]
        }
    }
    console.log(myReturnedArray)
}) //get id

// // POST /api/todos -> use POSTMAN -> send  back to the user what the id is
app.post('/api/todos', function (req, res, nextFn) {
    console.log('creating a todo list node...', req.todoList)
})

// // PUT /api/todos/:id - > you give the id an object and it updates the array
// app.put('/api/todos/:id', function (req, res, nextFn) {
//     console.log('changing the id of a node', req.todoList.id) //???? How do i reference a node of the dynamic id>>
// })

// // DELETE /api/todos/:id
// app.delete('/api/todos/:id', function (req, res, nextFn) {
//     console.log('delting the following node', req.todoList.id)
// })

app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})