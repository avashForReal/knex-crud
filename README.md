
# KNEX-CRUD

### install dependencies
```
yarn install
```

### create migrations
```
npx knex migrate:latest
```

### run seeds
```
npx knex seed:run
```

### start the server
```
yarn dev
```

<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->
1. [search tasks](#1-search-tasks)
1. [update task](#2-update-task)
1. [update user](#3-update-user)
1. [delete a task](#4-delete-a-task)
1. [delete a user](#5-delete-a-user)
1. [add new task](#6-add-new-task)
1. [add new user](#7-add-new-user)
1. [get all tasks](#8-get-all-tasks)
1. [get one user](#9-get-one-user)
1. [get all users](#10-get-all-users)



## Endpoints


--------



### 1. search tasks



***Endpoint:***

```bash
Method: GET
Type: 
URL: localhost:8080/task/
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| task | boil |  |



### 2. update task



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: localhost:8080/task/2
```



***Body:***

```js        
{
  "task": "wash the car",
  "assigned_user": 2
}
```



### 3. update user



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: localhost:8080/user/2
```



***Body:***

```js        
{
    "email": "hari@mail.com",
    "name": "shyam Kumar",
    "address": "Urlabari"
}
```



### 4. delete a task



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: localhost:8080/task/5
```



### 5. delete a user



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: localhost:8080/user/5
```



### 6. add new task



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: localhost:8080/task
```



***Body:***

```js        
{
    "task": "Tune the guitar",
    "assigned_user": 4
}
```



### 7. add new user



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: localhost:8080/user
```



***Body:***

```js        
{
    "name": "krishna",
    "email": "krishnaest@mail.com",
    "address": "Baikuntha",
    "password": "krishna123"
}
```



### 8. get all tasks



***Endpoint:***

```bash
Method: GET
Type: 
URL: localhost:8080/task
```



### 9. get one user



***Endpoint:***

```bash
Method: GET
Type: 
URL: localhost:8080/user/3
```



### 10. get all users



***Endpoint:***

```bash
Method: GET
Type: 
URL: localhost:8080/user
```



---
[Back to top](#knex-crud)

