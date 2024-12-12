
// //1
class Book{
  constructor(title,author,year){
    
    this.title=title;
    this.author=author;
    this.year=year;
  }
  
  getSummary(){
    return this.title+" "+"by"+" "+this.author+" "+"published"+" "+"in"+this.year

  }
}

let bookobj=new Book("god","william",1997)
bookobj.getSummary()
console.log(bookobj.getSummary())

// //2
class Books{
  constructor(title,author,year){
    
    this.title=title;
    this.author=author;
    this.year=year;
  }
  
  getSummary(){
  return this.title+" "+"by"+" "+this.author+" "+"published"+" "+"in"+this.year
   }
}

class Magazine extends Books{
  constructor(title,author,month,year){
    super(title,author,year)
    this.month=month;
    }
  getDetails(){
    this.getSummary();
    return this.title+" "+"by"+" "+this.author+" "+"published"+" "+"in"+this.month+this.year
  }
}

let detailsobj=new Magazine("god","william","march",1997)
detailsobj.getDetails()
console.log(detailsobj.getDetails())


//3
class Books{
    constructor(title,author,year){
      
      this.title=title;
      this.author=author;
      this.year=year;
    }
    
    getSummary(){
    return this.title+" "+"by"+" "+this.author+" "+"published"+" "+"in"+this.year
     }
  }
  
  class Magazine extends Books{
    constructor(title,author,month,year){
      super(title,author,year)
      this.month=month;
      }
    getDetails(){
      this.getSummary();
      return this.title+" "+"by"+" "+this.author+" "+"published"+" "+"in"+this.month+this.year
    }
  }
  let booksobj=new Books("god","william",1997)
  booksobj.getSummary()
  console.log(booksobj.getSummary())
  
  let detailsobj=new Magazine("god","william","march",1997)
  detailsobj.getDetails()
  console.log(detailsobj.getDetails())
  
  
  
  
  
  