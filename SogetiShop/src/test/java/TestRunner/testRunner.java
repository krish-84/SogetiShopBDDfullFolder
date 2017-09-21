package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions (dryRun = false, features = "/home/krish/eclipse-workspace/SogetiShop/src/test/java/FeatureFiles",  format = {"pretty", "html:Target/cucumber-pretty"}, monochrome = true, glue = "StepDefinitions", tags = {"@yes", "~@no"})


public class testRunner {

}
