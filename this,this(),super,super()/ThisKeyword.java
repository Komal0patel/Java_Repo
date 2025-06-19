class Parent {
    String name;
    int value;
    
    Parent(String name, int value){
        this.name=name;
        this.value=value;
    }
    public void display(){
        System.out.println(name+" "+value);
    }
}

public class Main {
    public static void main(String[] args) {
        Parent Obj = new Parent("komal",10);
        Obj.display();
    }
}
