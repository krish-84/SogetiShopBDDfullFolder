package Experiment;

import java.util.LinkedList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import CommonLib.MainDriver;

public class testingsort extends MainDriver {

	public static void main(String[] args) throws Exception {

		new MainDriver().invokeBrowser();
		driver.get("http://127.0.0.1/13-architecture");

		WebElement dropdown = driver.findElement(By.xpath("//*[@id='js-product-list-top']/div[2]/div/div[1]/a"));
		dropdown.click();
		WebElement subdroprown = driver
				.findElement(By.xpath("//*[@id='js-product-list-top']/div[2]/div/div[1]/div/a[2]"));
		subdroprown.click();

		Thread.sleep(3000);

		List<WebElement> currentitems = driver
				.findElements(By.xpath("//*[@id='js-product-list']/div/article/div/div/h1/a"));
		//// *[@id='js-product-list']/div[1]/article/div/div/div/span
		LinkedList<String> alllinktext = new LinkedList<String>();

		for (int j = 0; j < currentitems.size(); j++) {

			String s = currentitems.get(j).getText();

			alllinktext.add(s);

		}

		System.out.println(alllinktext);

		boolean ascresult = ascending_order(alllinktext);
		
		boolean desresult = descending_order(alllinktext);

		System.out.println(ascresult);
		
		System.out.println(desresult);

		driver.quit();

		
	}

	public static boolean ascending_order(LinkedList<String> test) {

		String previous = test.getFirst();

		for (final String current : test) {
			if (current.compareTo(previous) < 0)
				return false;
			
		}

		return true;

	}
	
	public static boolean descending_order(LinkedList<String> test) {

		String previous = test.getFirst(); 

		for (final String current : test) {
			if (current.compareTo(previous) > 0)
				return false;
			
		}

		return true;

	}

}
