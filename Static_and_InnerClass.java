class OuterClass{
    static{
        System.out.println("This is static block executed only once");
    }
    public int outer_a;
    public static int static_outer_a;
    public void outerDisplay(){
        System.out.println("inside outer class non static member function");
    }
    public static void staticOuterDisplay(){
        System.out.println("inside outer class static member function");
    }
    
    class InnerClass{
        public int nonStaticClass_nonStaticMember_a;
        public static int nonStaticClass_staticMember_a;
        
        public void innerDisplay(){
            System.out.println("inside inner class: Inside non-static method");
        }
        public static void static_innerDisplay(){
            System.out.println("inside inner class: Inside static method");
        }
    }
    
    static class StaticNestedClass{
        public static void static_accessMember(){
            System.out.println("Inside static nested class: static method");
        }
        
        public void accessMember(){
            System.out.println("Inside static nested class: non-static method");
        }
    }
}


//Main class
public class Static_and_InnerClass{
    public static void main(String args[]){
        
        OuterClass.static_outer_a=10;
        System.out.println(OuterClass.static_outer_a);
        OuterClass.staticOuterDisplay();
        
        OuterClass objOuter=new OuterClass();
        objOuter.outer_a=20;
        System.out.println(objOuter.outer_a);
        objOuter.outerDisplay();
        
        OuterClass.InnerClass objInner=objOuter.new InnerClass();
        
        OuterClass.InnerClass.nonStaticClass_staticMember_a=30;
        System.out.println(OuterClass.InnerClass.nonStaticClass_staticMember_a);
        
        OuterClass.InnerClass.static_innerDisplay();
        
        OuterClass.StaticNestedClass.static_accessMember();
        
        //OuterClass.StaticNestedClass obj=new OuterClass.StaticNestedClass();
        
        
        
        
        
    }
}
