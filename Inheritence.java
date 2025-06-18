
class Animal {
    void eat() {
        System.out.println("Animal eats food");
    }
}

// 1. Single Inheritance: Class Animal is the parent of class Dog
class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}
// 2. Multilevel Inheritance: Dog is extended by Puppy
// Puppy inherits from Dog, which inherits from Animal
class Puppy extends Dog {
    void weep() {
        System.out.println("Puppy weeps");
    }
}

// 3. Hierarchical Inheritance: Multiple classes inherit from the same parent class
class Cat extends Animal {
    void meow() {
        System.out.println("Cat meows");
    }
}

// Main class to demonstrate all types
public class Inheritence {
    public static void main(String[] args) {
        System.out.println("Single & Multilevel Inheritance:");
        Puppy p = new Puppy();
        p.eat();     // From Animal
        p.bark();    // From Dog
        p.weep();    // From Puppy

        System.out.println("\nHierarchical Inheritance:");
        Cat c = new Cat();
        c.eat();     // From Animal
        c.meow();    // From Cat
    }
}
