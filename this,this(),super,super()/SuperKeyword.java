class Parent {
    int value=10;
}

class Child extends Parent {
    int value=5;
    void display(){
        System.out.println("value:"+super.value);
    }
    }

public class SuperKeyword{
    public static void main(String[] args) {
        Child Obj = new Child();
        Obj.display();
    }
}
