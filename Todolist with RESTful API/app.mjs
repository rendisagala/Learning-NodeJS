import http from "http";
import { TodolistService } from "./todolist-service.mjs";

const port = 3000;

const service = new TodolistService();
const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json");

  if (request.method === "GET") {
    service.getTodolist(request, response);
  } else if (request.method === "POST") {
    service.createTodo(request, response);
  } else if (request.method === "PUT") {
    service.updateTodo(request, response);
  } else if (request.method === "DELETE") {
    service.deleteTodo(request, response);
  }
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
