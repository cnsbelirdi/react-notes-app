
# React Notes App

This project developed with React & Redux.



## Features

- Adding new note
- Deleting new note
- Filtering notes
- Single page design
- Soft color pattern


  
## API Usage
I used [Mock Api](mockapi.io) as an API.
#### Get all datas

```http
  GET <Your special path>.mockapi.io/notes
```

#### Get data with id

```http
  GET <Your special path>.mockapi.io/notes/${id}
```

| Parameter | Type     | Definition                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Key value of the item to be called |

#### Add data 

```http
  POST <Your special path>.mockapi.io/notes/${data}
```

| Parameter | Type     | Definition                       |
| :-------- | :------- | :-------------------------------- |
| `data`      | `object` | **Required**. New data to be added |

#### Delete data 

```http
  DELETE <Your special path>.mockapi.io/notes/${id}
```

| Parameter | Type     | Definition                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Key value of the item to be deleted |

  ## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Pink | ![#f06292](https://via.placeholder.com/10/f06292?text=+) #f06292 |
| Purple | ![#ba68c8](https://via.placeholder.com/10/ba68c8?text=+) #ba68c8 |
| Yellow | ![#ffd54f](https://via.placeholder.com/10/ffd54f?text=+) #ffd54f |
| Blue | ![#4fc3f7](https://via.placeholder.com/10/4fc3f7?text=+) #4fc3f7 | 
| Green | ![#aed581](https://via.placeholder.com/10/aed581?text=+) #aed581 | 

## Run it on your computer

Clone the project

```bash
  git clone https://github.com/cnsbelirdi/react-notes-app.git
```

Go to the project directory

```bash
  cd react-notes-app
```

Install required packages

```bash
  npm install
```

Run the server

```bash
  npm run start
```

  
## Demo

[react-notes-app-cnsbelirdi.vercel.app](https://react-notes-app-cnsbelirdi.vercel.app)

  