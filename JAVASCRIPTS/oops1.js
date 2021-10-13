//OBJECT ORIENTED PROGRAMMING

// Class
//object
//Reference


//CLASS- OVERALL CLASS
class Person{
    constructor(name,gender,age){   //method- DUTY- Initialising instance variables by constructor
      this.name=name,             //this- key word- to point instance variable - obj in current class   - IN PYTHON - this is changed to SELF
      this.gender=gender,
      this.age=age

      //this.name, this.age, this.gender - INSTANCE VARIABLES
      //name, age, gender                - LOCAL VARIABLES

    }

    printPerson(){      //Prinnt initialised variables
        console.log(this.name,this.gender,this.age);
    }
}

//REP CLASS TO REF OJECTS- DIFF DIFF OBJ1,OB2...EXACT COPY OF CLASS TO OBJ
  //var refname= new classname()
  var obj1=new Person("ram","male","25");

  //to pass details-  call
  

  //to print
  obj1.printPerson()



//   var obj2=new Person();
//   obj2.setPerson("reji","male","29")
//   obj2.printPerson()






  //STUDENT DETAILS

  class Student{
      setStudent(rollno,course_name,stud_name){  //construcotr is used in place of setStudent
          this.rollno=rollno,
          this.course_name=course_name,
          this.stud_name=stud_name
      }
      printStudent(){
          console.log(this.rollno,this.course_name,this.stud_name);
      }
  }

  var Stud1= new Student()  //here ("25","science","revi") is inputed
  Stud1.setStudent("25","science","Revi")
  Stud1.printStudent()      //INSIDE CLASS WE USE - "THIS" TO ACCESS






//OUTSIDE CLASS ACCESSING THE ATTRIBUTES- we use REFERENCE NAME
  var Stud1= new Student()
  Stud1.setStudent("25","science","Revi")
  console.log(Stud1.rollno);
  console.log(Stud1.stud_name);

  //  ALL DETAILS- BY COMMA
  console.log(Stud1.stud_name,Stud1.rollno);


  // NODE USING- BACKEND
  //JS - INTERPRETEND
  //JS - TO MACHINE LANGUAGE- BY JS ENGINE(V8 ENGINE,SPIDERMONKEY,CHAKRA)
 // this engine progrm- ecma standard


  