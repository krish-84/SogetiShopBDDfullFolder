Feature: Checking/Verifying HomgePage functions and elements

@yes
Scenario: Verify home page title

Given I am on "HomePage"
Then I should see the pagetitle as "Sogeti Book Shop"

@no
Scenario Outline: Verify ALL home page Links leads to the correct page	
					#(Except for nav bar as it has mousehover function)				

Given I am on "HomePage"
When I click on "<Link>" (using xpath "<xpath>")
Then I should see the pagetitle as "<Title>"

Examples:

|link			|xpath												|Title						|
|1st Carousel	|//*[@id='carousel']/ul/li[1]/a/figure/img			|The App Effect				|
|2nd Carousel	|//*[@id='carousel']/ul/li[2]/a/figure/img			|Collaboration in the Cloud	|
|3rd Carousel	|//*[@id='carousel']/ul/li[3]/a/figure/img			|Neil's Quest for Quality	|
|Contact us		|//*[@id='contact-link']/a							|Contact					|
|Sign in		|//*[@id='_desktop_user_info']/div/a/i				|Login						|
|ict Logo		|//*[@id='_desktop_logo']/a/img						|Sogeti Book Shop			|
|PopProdLink1	|//*[@id='content']/section/div/article[1]/div/a/img|Neil's Quest for Quality	|
|PopProdLink2	|//*[@id='content']/section/div/article[2]/div/a/img|Quality Supervision		|
|PopProdLink3	|//*[@id='content']/section/div/article[3]/div/a/img|The App Effect				|
|PopProdLink4	|//*[@id='content']/section/div/article[4]/div/a/img|Dark Side of Social Media	|
|PopProdLink5	|//*[@id='content']/section/div/article[5]/div/a/img|IoTMap						|
|PopProdLink6	|//*[@id='content']/section/div/article[6]/div/a/img|Virtual Concept			|
|PopProdLink7	|//*[@id='content']/section/div/article[7]/div/a/img|Open for Business			|
|PopProdLink8	|//*[@id='content']/section/div/article[8]/div/a/img|VINT Report Game			|
|AllProductLink	|//*[@id='content']/section/a						|Home						|
|BksCollectdImg	|//*[@id='content']/a/img							|Welcome to ICT Books		|


@no
Scenario Outline: Verify home nav bar links 
			#(mouseover function - the sub menu drops when hovering over the home button)
			
Given I am on "HomePage"
When I hover over the "home" button (using xpath "//*[@id='category-2']/a")
And I click on "<SubMenuLink>" (using xpath "<xpath>")
Then I should see the pagetitle as "<Title>"

Examples:

|SubMenuLink				|xpath											|Title				|
|Architecture				|//*[@id='category-13']/a						|Architecture		|
|BI & Analytics				|//*[@id='category-14']/a						|BI & Analytics		|
|Cloud						|//*[@id='category-15']/a						|Cloud				|
|Cybersecurity				|//*[@id='category-16']/a						|Cybersecurity		|
|Digital					|//*[@id='category-17']/a						|Digital			|
|High Tech					|//*[@id='category-18']/a						|High Tech			|
|Innovation					|//*[@id='category-19']/a						|Innovation			|
|QA and Testing				|//*[@id='category-12']/a						|QA and Testing		|



