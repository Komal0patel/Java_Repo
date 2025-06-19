class Box{
    double width;
    double height;
    double depth;
    
    Box(){
        System.out.println("Using constructor for object initialization");
        width=10;
        height=10;
        depth=10;
    }
    
    double volume(){
        return width*height*depth;
    }
}
public class Constructors
{
	public static void main(String[] args) {
		Box obj1=new Box();
		Box obj2=new Box();
		
		double vol1=obj1.volume();
		System.out.println("VOlume of Box 1 is:"+vol1);
		
		double vol2=obj2.volume();
		System.out.println("VOlume of Box 2 is:"+vol2);

	} 
}
