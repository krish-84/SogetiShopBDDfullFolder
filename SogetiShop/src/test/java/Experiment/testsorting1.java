package Experiment;

import CommonLib.MainDriver;

public class testsorting1 extends MainDriver {

	public static void main(String[] args) throws Exception {
		
		
		

			
	//	String[] test = {"a", "b", "c", "d",  "e","f"};
		String[] test = {"f", "e", "d", "c",  "b","f"};
		
		//String[] alllinktext = {"fish", "egg", "dog", "cat",  "ball","apple"};
		
		//System.out.println(test);	
		
		
	//	String previous = ""; // empty string
		
			

		//boolean result = chkalphabetical_order(test);
		
		String previous = test[0]; // empty string

		//System.out.println(result);
		
		for (final String current : test) {
			System.out.println(current.compareTo(previous));
			if (current.compareTo(previous) > 0) {
				System.out.println("true");
				} else {
					System.out.println("false");
				}
		}

	}

		public static boolean chkalphabetical_order(String[] test) {

			String previous = test[0]; // empty string

			for (final String current : test) {
				if (current.compareTo(previous) > 0)
					return false;
				//previous = current;
			}

			return true;

		}

	
}
