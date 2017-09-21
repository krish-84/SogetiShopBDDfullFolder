package StepDefinitions;

import CommonLib.MainDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class TestBase extends MainDriver {

	@Before
	public void setUp() throws Exception {
		invokeBrowser();

	}

	@After
	public void tearDown() {
		driver.quit();
	}

}
