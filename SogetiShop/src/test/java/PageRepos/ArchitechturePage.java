package PageRepos;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import CommonLib.MainDriver;

public class ArchitechturePage extends MainDriver{
	
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
	
	@FindBy (xpath = "//*[@id='js-product-list-top']/div[2]/div/div[1]/a")
	WebElement sortByLink;

	@FindBy (xpath = "//*[@id='js-product-list-top']/div[2]/div/div[1]/div/a[1]")
	WebElement sortByRelevance;
	
	@FindBy (xpath = "//*[@id='js-product-list-top']/div[2]/div/div[1]/div/a[2]")
	WebElement sortByAtoZ;
	
	@FindBy (xpath = "//*[@id='js-product-list-top']/div[2]/div/div[1]/div/a[3]")
	WebElement sortByZtoA;
	
	@FindBy (xpath = "//*[@id='js-product-list-top']/div[2]/div/div[1]/div/a[4]")
	WebElement sortByLowPrice;
	
	@FindBy (xpath = "//*[@id='js-product-list-top']/div[2]/div/div[1]/div/a[5]")
	WebElement sortByHighPrice;
	
		
	public ArchitechturePage(WebDriver driver) {
		MainDriver.driver = driver;
		PageFactory.initElements(driver, this);
		
	}
	

}
