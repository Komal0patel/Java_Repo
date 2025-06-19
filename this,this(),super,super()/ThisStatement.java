class Parent {
    String name;
    int value;
    
    Parent(String name, int value){
        this.name=name;
        this.value=value;
        System.out.println(name+" "+value);
    }
    Parent(){
        this("komal",10);
        System.out.println("Hiiiii");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent Obj = new Parent();
        
    }
}
