package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import CommonLib.MainDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class stepDefHomePage extends MainDriver {
	// line no.6 - basic given (could be used as a background)
	@Given("^I am on \"([^\"]*)\"$")
	public void i_am_on(String url) throws Throwable {
		url = "http://127.0.0.1/";
		driver.get(url);

	}

	// line no.7 - common step to verify current pagetitle
	@Then("^I should see the pagetitle as \"([^\"]*)\"$")
	public void i_should_see_the_pagetitle_as(String title) throws Throwable {
		// String actual = driver.getTitle();
		// Assert.assertTrue("Failed", actual.contains(title));
		Assert.assertTrue(driver.getTitle().contains(title));

	}

	// line no.14 - common step for clicking on an element using xpath
	@When("^I click on \"([^\"]*)\" \\(using xpath \"([^\"]*)\"\\)$")
	public void i_click_on_using_xpath(String arg1, String xpath) throws Throwable {
		WebElement webelement = driver.findElement(By.xpath(xpath));
		waituntil(webelement);
		driver.findElement(By.xpath(xpath)).click();
		//new HomePage(driver).contactUsLink.click();
	}

	// line no.43 - common step for hovering on an element using xpath
	@When("^I hover over the \"([^\"]*)\" button \\(using xpath \"([^\"]*)\"\\)$")
	public void i_hover_over_the_button_using_xpath(String arg1, String arg2) throws Throwable {
		WebElement webelement = driver.findElement(By.xpath(arg2));
		hover(webelement);
	}

}
