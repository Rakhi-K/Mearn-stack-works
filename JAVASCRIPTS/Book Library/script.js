class Book_library{
    addToDb()
    {
        let name=bk_name.value;
        let author= bk_author.value;
        let price=bk_price.value;
        let copies=bk_copies.value;

        let newBook={
            name, author, price, copies
        }
       localStorage.setItem(newBook.name, JSON.stringify(newBook))
       alert("added successfully")
       location.href="./find.html"
    }
      



    findBook()
    {
        let search_book= document.querySelector("#findbook").value
         
        if (search_book in localStorage)
         {
           alert("helo")

            let data= JSON.parse(localStorage.getItem(search_book))
           result.innerHTML= `Book Name:${data.name},Author Name:${data.author}, Price: {data.price}, Copies:${data.copies}` 

        }
        else{
            alert("not found")
        }
        
    }
    
}

var book= new Book_library();