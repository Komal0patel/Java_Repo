//1. overloading
class Student{
    int age;
    String name;
    public void displayInfo(int age){
        System.out.println(age);
    }
    //method overloading
    public void displayInfo(String name){
        System.out.println(name);
    }
    public void message(){
        System.out.println("polymorphism");
    }
}
class Stdt extends Student{
    public void message(){
        System.out.println("Polymorphism: Overriding");
    }
}

public class Polymophism{
    public static void main(String args[]){
        Student s=new Student();
        s.displayInfo(5);
        s.displayInfo("komal");
        
        s.message();
        
        Stdt s2=new Stdt();
        s2.message();
    }
}
