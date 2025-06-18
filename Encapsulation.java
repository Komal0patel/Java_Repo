// This class encapsulates the data (variables) and provides public methods to access/update them
class Student {
    // Private data members (cannot be accessed directly from outside the class)
    private String name;
    private int age;

    // Public getter method for name
    public String getName() {
        return name;
    }

    // Public setter method for name
    public void setName(String name) {
        this.name = name;
    }

    // Public getter method for age
    public int getAge() {
        return age;
    }

    // Public setter method for age with validation
    public void setAge(int age) {
        if(age > 0) {
            this.age = age;
        } else {
            System.out.println("Age must be positive.");
        }
    }
}

// Main class to test encapsulation
public class Encapsulation{
    public static void main(String[] args) {
        Student s = new Student();

        // Set values using setter methods
        s.setName("Komal");
        s.setAge(21);

        // Get values using getter methods
        System.out.println("Name: " + s.getName());
        System.out.println("Age: " + s.getAge());
    }
}
