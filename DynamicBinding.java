//Dynamic Binding

class A{
    void callMe(){
        System.out.println("Inside A's callme method");
    }
}
class B extends A{
    void callMe(){
        System.out.println("Inside B's callme method");
    }
}

class C extends A{
    void callMe(){
        System.out.println("Inside C's callme method");
    }
}

public class DynamicBinding{
    public static void main(String args[]){
        A a=new A();
        B b=new B();
        C c=new C();

        A r;
        r=a;
        r.callMe();
        
        r=b;
        r.callMe();
        
        r=c;
        r.callMe();
    }
}
