package CommonLib;

import java.io.File;
import java.io.IOException;
import java.util.LinkedList;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class MainDriver {

	protected static WebDriver driver;
	public static WebElement element;
	public static WebDriverWait wait;

	public void invokeBrowser() throws Exception {
		System.setProperty("webdriver.gecko.driver", "/home/krish/Downloads/geckodriver");
		driver = new FirefoxDriver();
		driver.manage().timeouts().pageLoadTimeout(601, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(801, TimeUnit.SECONDS);

	}

	public WebDriver getDriver() {
		return driver;
	}
	
	public void clickOnAnyElement(WebElement element) {
		element.click();
	}

	public void wait(int seconds) throws InterruptedException {
		Thread.sleep(seconds * 1000);
	}

	public void waituntil(WebElement element) {
		wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.elementToBeClickable(element));

	}

	// a method to simulate the mouse hovering over an element

	public void hover(WebElement element) throws Exception {
		Actions selAction = new Actions(driver);
		selAction.moveToElement(element).build().perform();
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

	// a method to obtain screenshots
	public void takeScreenshot(String action) throws IOException {
		// make our screenshot name friendly
		action = action.replaceAll("[^a-zA-Z0-9]", "");

		// take a screenshot
		File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		// Now you can do whatever you need to do with it, for example copy somewhere
		FileUtils.copyFile(scrFile, new File("target/" + System.currentTimeMillis() + action + ".png"));
	}

	public void sortInt(int data[]) {

		for (int i = 0; i < data.length; i++) {

			for (int j = i + 1; j < data.length; j++) {

				int swapper;
				if (data[i] > data[j]) {
					swapper = data[i];
					data[i] = data[j];
					data[j] = swapper;

				}

			}
		}
		System.out.println("Sorted Array :");

		for (int i = 0; i < data.length; i++) {
			System.out.println(data[i]);
		}

	}
}
