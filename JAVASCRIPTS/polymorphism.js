//Polymorphism...
//for functn or class methos- the recent one is implemented for output
// for this class maths(...args ) used



//SINGLE INHERITANCE

//Inheritance- ineheriting the prop from parent

// class Parent{
//     phone(){
//         console.log("redmi");
//     }

// }

// class Child extends Parent{

// }

// var child  = new Child()
// child.phone()


//OVERRIDING- overides the prop-  oru inheritance is needed

// class Parent{
//     phone(){
//         console.log("redmi");
//     }

// }

// class Child extends Parent{
// phone(){
//     console.log("iphone10");
// }
// }

// var child  = new Child()
// child.phone()


//Multiple inheritance not in js like subchild extends child,parent- not possible

//MULTILEVEL INHERITANCE
// class Parent {
//     m1() {
//         console.log("inside parent");
//     }

// }

// class Child extends Parent {
//     m2() {
//         console.log("inside m2");
//     }
// }

// // class SubChild extends Child, Parent - not possible in JS- multiple inheritance not possible
// class SubChild extends Child {
//     m3() {
//         console.log("inside m3");
//     }
// }

// var sb = new SubChild()   //multilevel inheritance - all m1,m2,m3 - output
// sb.m1()
// sb.m2()  // as inheritance of child given
// sb.m3()


// var ch = new Child();
// ch.m1()
// ch.m2()
// // ch.m3() //onlt till m2 as m3 is not possible - downward inheritance not possible


// var pr = new Parent();
// pr.m1()
// // pr.m2()  // downward inheritance not possible



//SUPER- USED for invoking parent - both parent and child output]
class Parent 
{
    phone() {
        console.log("redmi");
    }

}

class Child extends Parent {
    phone() {
        super.phone()
        console.log("i phone");
    }
}

var child = new Child()
child.phone()
