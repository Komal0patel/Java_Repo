class Box{
    double width;
    double height;
    double depth;
    
    Box(double w,double h, double d){
        System.out.println("Using constructor for object initialization");
        width=w;
        height=h;
        depth=d;
    }
    
    double volume(){
        return width*height*depth;
    }
}
public class ParameterizedConstructors
{
	public static void main(String[] args) {
		Box obj1=new Box(5,5,5);
		Box obj2=new Box(10,10,10);
		
		double vol1=obj1.volume();
		System.out.println("VOlume of Box 1 is:"+vol1);
		
		double vol2=obj2.volume();
		System.out.println("VOlume of Box 2 is:"+vol2);

	} 
}
