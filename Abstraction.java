abstract class A {// Abstract class A serves as a blueprint and contains one abstract method and one concrete method
    abstract void disp(); // Abstract method: must be implemented by any non-abstract subclass
    public void disp2() {// Concrete method: provides a default implementation that can be used as is
        System.out.println("A simple function in abstract class");
    }
}
class B extends A {// Class B extends abstract class A and provides implementation for the abstract method
    void disp() {// Overriding the abstract method from class A
        System.out.println("Abstraction performed");
    }
}
public class Abstraction {// Main class with the main method to execute the program
    public static void main(String[] args) {
        // Creating a reference of abstract class A and assigning it to an object of subclass B
        // This is an example of dynamic method dispatch (runtime polymorphism)
        A obj = new B();
        obj.disp();// Calls the overridden method in class B
        obj.disp2();// Calls the concrete method defined in abstract class A
    }
}
