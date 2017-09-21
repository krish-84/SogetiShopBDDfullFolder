package PageRepos;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import CommonLib.MainDriver;

public class HomePage extends MainDriver{
	
	WebDriver driver;

	@FindBy (linkText = "Contact us")
	WebElement contactUsLink;
	
	@FindBy (xpath = "//*[@id='_desktop_user_info']/div/a/span")
	WebElement signInLink;
	
	@FindBy (xpath = "//*[@id='_desktop_logo']/a/img")
	WebElement ictBookLogo;
	
	@FindBy (xpath = "//*[@id='category-2']/a")
	WebElement homeMenuButton;
	
	@FindBy (xpath = "//*[@id='category-13']/a")
	WebElement archiMenuButton;

	@FindBy (xpath = "//*[@id='category-14']/a")
	WebElement biAnlyMenuButton;
	
	@FindBy (xpath = "//*[@id='category-15']/a")
	WebElement cloudMenuButton;
	
	@FindBy (xpath = "//*[@id='category-16']/a")
	WebElement cybSecMenuButton;
	
	@FindBy (xpath = "//*[@id='category-17']/a")
	WebElement digtlMenuButton;
	
	@FindBy (xpath = "//*[@id='category-18']/a")
	WebElement HiTchMenuButton;
	
	@FindBy (xpath = "//*[@id='category-19']/a")
	WebElement innvtnMenuButton;
	
	@FindBy (xpath = "//*[@id='category-12']/a")
	WebElement qaTestmenuButton;
	
		
	public HomePage(WebDriver driver) {
		MainDriver.driver = driver;
		PageFactory.initElements(driver, this);
		
	}
	
	public void clickOnContactusLink() {
		contactUsLink.click();
	}
	
	public void clickOnAnyElement(WebElement element) {
		element.click();
	}
}
