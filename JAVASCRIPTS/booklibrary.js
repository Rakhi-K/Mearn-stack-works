class Library{
    books={
        "halfgirlfriend":{book_name:"halfgirlfriend", authour:"chetan", price:300,avl_copy:300,copies_sold:200},
        "abc":{book_name:"abc", authour:"mt", price:350,avl_copy:250,copies_sold:200},
        "alchemist":{book_name:"alchemist", authour:"paulo", price:400,avl_copy:200,copies_sold:200},
    }
    findbook(book_name){
        return this.books["book_name"]
    }
}

var obj= new Library
console.log(obj.findbook("abc"));
