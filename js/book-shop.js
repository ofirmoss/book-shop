gBooks = [{
        name: 'Harry Potter And The Goblet Of Fire',
        id: 1,
        price: 50,
        description: 'description for book number: ' + 1,
        likes: 0,
        unlikes: 0
    },
    {
        name: 'Harry Potter And The Prisoner Of Azkaban ',
        id: 2,
        price: 46,
        description: 'description for book number: ' + 2,
        likes: 0,
        unlikes: 0
    },
    {
        name: 'Harry Potter And The Chamber Of Secrets',
        id: 3,
        price: 48.5,
        description: 'description for book number: ' + 3,
        likes: 0,
        unlikes: 0
    }, {
        name: 'Harry Potter And The Deathly Hollows',
        id: 4,
        price: 99,
        description: 'description for book number: ' + 4,
        likes: 0,
        unlikes: 0
    }
];


function renderBooks() {
    var newBook = '';

    for (var i = 0; i < gBooks.length; i++) {
        newBook += ` 
                  <tr id="book${i+1}">
                  <th scope="row">${i+1}</th>
                  <td id="bookName${i+1}">${gBooks[i].name}</td>
                  <td id="bookPrice${i+1}">${gBooks[i].price}</td>
                  <td id="CRUD">
                  <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal" onclick="showDetails(${i+1})">Read</button> 
                  <button type="button" class="btn btn-outline-success" onclick="readAndUpdateBook(${i+1})">Update</button>
                  <button id="${i}" type="button" class="btn btn-outline-danger" onclick="deleteBook(this)">Delete</button>
                  </td>
                  </tr>            
                  `
    }

    document.querySelector('tbody').innerHTML = newBook;
}


function deleteBook(elbook) {
    var deletedBook = elbook.id
    gBooks.splice(deletedBook, 1);
    renderBooks();
}

function addBook() {
    var position = gBooks.length + 1;
    var nameId = '#newName' + position
    var priceId = '#newPrice' + position
    name = document.querySelector(nameId).value;
    price = document.querySelector(priceId).value;

    var newId = gBooks[gBooks.length - 1].id - 1;

    gBooks.push({
        name: name,
        id: newId,
        price: price,
        description: 'description for book number: ' + newId,
        likes: 0,
        unlikes: 0
    })

    renderBooks();
}

function readAndAddNewBook() {

    var enterNewBook = ` 
    <tr>
    <th scope="row">${gBooks.length+1}</th>
    <td><input class="form-control inputchange" id="newName${gBooks.length+1}"></input></td>
    <td><input class="form-control inputchange" id="newPrice${gBooks.length+1}"></input></td>
    <td>
    <button type="button" class="btn btn-outline-light" onclick="addBook()">submit</button>
    </td>
    </tr>            
    `

    document.querySelector('tbody').innerHTML += enterNewBook;
}


function readAndUpdateBook(bookColNum) {
    var bookId = '#book' + bookColNum;
    var updateBook = ` 
    <tr>
    <th scope="row">${bookColNum}</th>
    <td><input class="form-control inputchange" id="updateName${bookColNum}" value="${gBooks[bookColNum-1].name}"></input></td>
    <td><input class="form-control inputchange" id="updatePrice${bookColNum}" value="${gBooks[bookColNum-1].price}"></input></td>
    <td>
    <button type="button" class="btn btn-outline-light" onclick="updateBook(${bookColNum})">submit</button>
    </td>
    </tr>            
    `
    document.querySelector(bookId).innerHTML = updateBook;
}

function updateBook(bookColNum) {

    var nameId = '#updateName' + bookColNum;
    var priceId = '#updatePrice' + bookColNum;
    name = document.querySelector(nameId).value;
    price = document.querySelector(priceId).value;

    var newId = gBooks[gBooks.length - 1].id - 1;

    gBooks[bookColNum - 1] = {
        name: name,
        id: newId,
        price: price
    };

    var bookId = '#book' + bookColNum;
    var updateBook = ` 
    <th scope="row">${bookColNum}</th>
    <td id="bookName${bookColNum}">${name}</td>
    <td id="bookPrice${bookColNum}">${price}</td>
    <td id="CRUD">
    <button type="button" class="btn btn-outline-primary" onclick="showDetails(${bookColNum})">Read</button> 
    <button type="button" class="btn btn-outline-success" onclick="readAndUpdateBook(${bookColNum})">Update</button>
    <button id="${bookColNum}" type="button" class="btn btn-outline-danger" onclick="deleteBook(this)">Delete</button>
    </td>
    `

    document.querySelector(bookId).innerHTML = updateBook;

}

function showDetails(bookColNum) {
    document.querySelector('.modal-title').innerHTML = gBooks[bookColNum - 1].name;
    document.querySelector('.modal-body').innerHTML = gBooks[bookColNum - 1].description;
    document.querySelector('.modal-footer').innerHTML = `
    ${gBooks[bookColNum-1].likes}  
    <button type="button" class="btn btn-primary btn-sm like marginLike" onclick="upDateLike(${bookColNum-1})">like</button>
    <button type="button" class="btn btn-secondary btn-sm unlike marginLike" onclick="upDateUnlike(${bookColNum-1})">unlike</button>  
    ${gBooks[bookColNum-1].unlikes} 
    `
}

function upDateLike(book) {
    gBooks[book].likes++;
    document.querySelector('.modal-footer').innerHTML = `
    ${gBooks[book].likes}  
    <button type="button" class="btn btn-primary btn-sm like marginLike" >like</button>
    <button type="button" class="btn btn-secondary btn-sm unlike marginLike" >unlike</button>  
    ${gBooks[book].unlikes} 
    `
}

function upDateUnlike(book) {
    gBooks[book].unlikes++;
    document.querySelector('.modal-footer').innerHTML = `
    ${gBooks[book].likes}  
    <button type="button" class="btn btn-primary btn-sm like marginLike" >like</button>
    <button type="button" class="btn btn-secondary btn-sm unlike marginLike" >unlike</button>  
    ${gBooks[book].unlikes} 
    `
}