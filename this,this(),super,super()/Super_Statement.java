class Parent {
    int value;

    Parent(int value) {
        this.value = value;
        System.out.println("Parent constructor called with value: " + value);
    }
}

class Child extends Parent {
    String name;

    Child(int value, String name) {
        super(value); // Calls the Parent class constructor
        this.name = name;
        System.out.println("Child constructor called with name: " + name);
    }
}

public class Super_Statement{
    public static void main(String[] args) {
        Child childObj = new Child(10, "Alice");
        // Output:
        // Parent constructor called with value: 10
        // Child constructor called with name: Alice
    }
}
