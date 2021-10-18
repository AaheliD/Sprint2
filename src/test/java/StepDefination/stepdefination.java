package StepDefination;

import junit.framework.Assert;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.Hookclass;


public class stepdefination {
 
	WebDriver driver=Hookclass.driver;
	Actions actions = new Actions(driver);
	
	
	@Given("User is on the sign in page")
	public void user_is_on_the_sign_in_page() {
		System.out.println("User is in the Login in page.");
	}

	@When("User enters {string} and {string}")
	public void user_enters_and(String uname, String pass) {
		try
		{
			driver.findElement(By.name("username")).sendKeys(uname);
		    driver.findElement(By.name("password")).sendKeys(pass);
		    System.out.println("Credentials added successfully!");	
	}
		catch(Exception e)
		{
			System.out.println("Error: User unable to provide credentials. "+e);	
			Assert.fail();
			}
	}

	@When("clicks on login")
	public void clicks_on_login() {
		try {
			  driver.findElement(By.xpath("//*[@class='btn btn-primary']")).click();
			  System.out.println("Login Successful!");	
		}
		catch(Exception e)
		{
			System.out.println("Error: User unable to login. "+e);
			Assert.fail();
		}
	}

	@Then("User is redirected to the dashboard")
	public void user_is_redirected_to_the_dashboard() {
	   try
	   {
		   String s=driver.getTitle();
		   String ex="Dashboard";
		   Assert.assertEquals(s,ex);
		   System.out.println("User is in the Dashboard");
	   }
	    catch(Exception e) {
	    System.out.println("Error: Headings dont match. "+e);
	    Assert.fail();
	}
	}
	
	@When("User clicks on the Product page")
	public void user_clicks_on_the_Product_page() {
		try {
			  driver.findElement(By.xpath("//*[@id='menu-catalog']/a")).click();
			  driver.findElement(By.xpath("//*[@id='menu-catalog']/ul/li[2]/a")).click();
			  
		   }
		    catch(Exception e) {
		    System.out.println("Error: Unable to travel to Products page. "+e);
		    Assert.fail();
		}
	}

	@Then("user is redirected to Products page")
	public void user_is_redirected_to_Products_page() {
		try
		   {
			   String s=driver.getTitle();
			   String ex="Products";
			   Assert.assertEquals(s,ex);
			   System.out.println("User is in the Product page");
		   }
		    catch(Exception e) {
		    System.out.println("Error: Headings dont match. "+e);
		    Assert.fail();
		}
	}

	@Given("User clicks on Add Products")
	public void user_clicks_on_Add_Products() {
		try {
			  driver.findElement(By.xpath("//*[@id='content']/div[1]/div/div/a")).click();
		}
		catch(Exception e)
		{
			System.out.println("Error: Unable to travel to Add Product page. "+e);
			Assert.fail();
		}
	}

	@When("user is redirected to Add Products page")
	public void user_is_redirected_to_Add_Products_page() {
		try {
		   String s=driver.findElement(By.xpath("//*[@id='content']/div[2]/div/div[1]/h3")).getText();
		   String ex="Add Product";
		   Assert.assertEquals(s,ex);
		   System.out.println("User is in the Add Product page");
	   }
	    catch(Exception e) {
	    System.out.println("Error: Headings dont match. "+e);
	    Assert.fail();
	}
	}

	@When("user adds {string}, {string}, {string}, {string}, {string}, {string} and {string}")
	public void user_adds(String product, String desc, String meta, String metadesc, String metakey, String protag, String model) {
		try
		{
			driver.findElement(By.id("input-name1")).sendKeys(product);
		    driver.findElement(By.xpath("//*[@id='language1']/div[2]/div/div/div[3]/div[2]")).sendKeys(desc);
		    driver.findElement(By.id("input-meta-title1")).sendKeys(meta);
		    driver.findElement(By.id("input-meta-description1")).sendKeys(metadesc);
		    driver.findElement(By.id("input-meta-keyword1")).sendKeys(metakey);
		    driver.findElement(By.id("input-tag1")).sendKeys(protag);
		    driver.findElement(By.xpath("//*[@id='form-product']/ul/li[2]/a")).click();
		    driver.findElement(By.id("input-model")).sendKeys(model);
		   
	}
		catch(Exception e)
		{
			System.out.println("Error: Unable to enter details "+e);	
			Assert.fail();
			}
	}

	@When("clicks on save")
	public void clicks_on_save() {
		try {
			  driver.findElement(By.xpath("//*[@id='content']/div[1]/div/div/button/i")).click();
		}
		catch(Exception e)
		{
			System.out.println("Error: Unable to save "+e);
			Assert.fail();
		}
	}
	

	@Then("user gets {string} and check if the {string} {string} entered is same as seen in the record")
	public void user_gets_and_check_if_the_entered_is_same_as_seen_in_the_record(String str, String name, String model) {
		
		try{
			String s;
			String page=driver.findElement(By.xpath("//*[@id='content']/div[2]/div/div[1]/h3")).getText();
			if(page.equalsIgnoreCase("Product List"))
			 {
				s=driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
				Assert.assertTrue(s.contains(str));
				System.out.println(str);
				
				String st=driver.findElement(By.xpath("//td[contains(text(),'"+name+"')]")).getText();
				String st1=driver.findElement(By.xpath("//td[contains(text(),'"+name+"')]//following-sibling::td[1]")).getText();
				
				
					if(st.equals(name))
						
						System.out.println("Name does not match");	
					
					if(st1.equals(model))
						
						System.out.println("Sort does not match");	
			 }
			
			else
			{ s=driver.findElement(By.xpath("//*[@id='content']/div[2]/div[1]")).getText();
			 Assert.assertTrue(s.contains(str));
			 
			 String pname=driver.findElement(By.xpath("//*[@id='language1']/div[1]/div/div")).getText();
			 String meta=driver.findElement(By.xpath("//*[@id='language1']/div[3]/div/div")).getText();
			
			 
			 if(pname.equals("Product Name must be greater than 3 and less than 255 characters!"))
				 System.out.println("Product Name must be greater than 3 and less than 255 characters!");
			 
			 if(meta.equals("Meta Title must be greater than 3 and less than 255 characters!"))
				 System.out.println("Meta Title must be greater than 3 and less than 255 characters!");
			 
			
			}
			
		}
		catch(Exception e)
		{
			System.out.println("Error: Unable to modify the product "+e);
			Assert.fail();
		}
	}
	

	@Then("clicks on cancel")
	public void clicks_on_cancel() {
		try {
			  driver.findElement(By.xpath("//*[@id='content']/div[1]/div/div/a")).click();
		}
		catch(Exception e)
		{
			System.out.println("Error: Unable to click on Cancel "+e);
			Assert.fail();
		}
	}

	@Then("user is redirected back")
	public void user_is_redirected_back() {
		try {
			   String s=driver.findElement(By.xpath("//*[@id='content']/div[2]/div/div[1]/h3")).getText();
			   String ex="Product List";
			   Assert.assertEquals(s,ex);
			   System.out.println("User is redirected the Add Product page");
		   }
		    catch(Exception e) {
		    System.out.println("Error: Headings dont match. "+e);
		    Assert.fail();
		}
	}
	
	@Given("User clicks on Edit Products")
	public void user_clicks_on_Edit_Products() {
		try {
			  driver.findElement(By.xpath("//td[contains(text(),'Balloon@123')]//following::a")).click();
		}
		catch(Exception e)
		{
			System.out.println("Error: User can't travel to Edit Products page "+e);
			Assert.fail();
		}
	}

	@When("user is redirected to Edit Products page")
	public void user_is_redirected_to_Edit_Products_page() {
		try {
			   String s=driver.findElement(By.xpath("//*[@id='content']/div[2]/div/div[1]/h3")).getText();
			   String ex="Edit Product";
			   Assert.assertEquals(s,ex);
			   System.out.println("User is redirected to the Edit Product page");
		   }
		    catch(Exception e) {
		    System.out.println("Error: Headings dont match. "+e);
		    Assert.fail();
		}
	}


@When("user edits {string}, {string}, {string}, {string}, {string}, {string} and {string}")

	public void user_edits_and(String product, String desc, String meta, String metadesc, String metakey, String protag, String model) {
		try
		{
			driver.findElement(By.id("input-name1")).clear();
			driver.findElement(By.id("input-name1")).sendKeys(product);
		    driver.findElement(By.xpath("//*[@id=\"language1\"]/div[2]/div/div/div[3]/div[2]")).clear();
		    driver.findElement(By.xpath("//*[@id=\"language1\"]/div[2]/div/div/div[3]/div[2]")).sendKeys(desc);
		    driver.findElement(By.id("input-meta-title1")).clear();
		    driver.findElement(By.id("input-meta-title1")).sendKeys(meta);
		    driver.findElement(By.id("input-meta-description1")).clear();
		    driver.findElement(By.id("input-meta-description1")).sendKeys(metadesc);
		    driver.findElement(By.id("input-meta-keyword1")).clear();
		    driver.findElement(By.id("input-meta-keyword1")).sendKeys(metakey);
		    driver.findElement(By.id("input-tag1")).clear();
		    driver.findElement(By.id("input-tag1")).sendKeys(protag);
		   
		    driver.findElement(By.xpath("//*[@id=\"form-product\"]/ul/li[2]/a")).click();
		    driver.findElement(By.id("input-model")).clear();
		    driver.findElement(By.id("input-model")).sendKeys(model);
		    
		    driver.findElement(By.xpath("//*[@id=\"input-keyword\"]")).clear();
		   
	}
		catch(Exception e)
		{
			System.out.println("Error: User unbale to modify the existing product "+e);	
			Assert.fail();
			}
	}


@Given("User is on the Products page")
public void user_is_on_the_Products_page() {
	try {
		   String s=driver.findElement(By.xpath("//*[@id='content']/div[2]/div/div[1]/h3")).getText();
		   String ex="Product List";
		   Assert.assertEquals(s,ex);
		   System.out.println("User is in the Product page");
	   }
	    catch(Exception e) {
	    System.out.println("Error: Headings dont match. "+e);
	    Assert.fail();
	}
}

@When("user fills in {string},{string}, {string} and {string}")
public void user_fills_in_and(String pname, String price, String model, String quantity) {
	try
	{
	    driver.findElement(By.xpath("//*[@id='input-name']")).sendKeys(pname);
	    driver.findElement(By.xpath("//*[@id='input-price']")).sendKeys(price);
	    driver.findElement(By.xpath("//*[@id='input-model']")).sendKeys(model);
	    driver.findElement(By.xpath("//*[@id='input-quantity']")).sendKeys(quantity);

}
	catch(Exception e)
	{
		System.out.println("Error: Unable to provide filter details "+e);	
		Assert.fail();
		}
}

@When("selects {string} and {string}")
public void selects_and(String status, String image) {
	try
	{
		
		if(status.equals("*"))
	    driver.findElement(By.xpath("//select[@name='filter_status']//following::option[1]")).click();
		else if(status.equals("1"))
		driver.findElement(By.xpath("//select[@name='filter_status']//following::option[2]")).click();
		else if(status.equals("0"))
	    driver.findElement(By.xpath("//select[@name='filter_status']//following::option[3]")).click();
		
		if(image.equals("*"))
		    driver.findElement(By.xpath("//select[@name='filter_image']//following::option[1]")).click();
			else if(image.equals("1"))
			driver.findElement(By.xpath("//select[@name='filter_image']//following::option[2]")).click();
			else if(image.equals("0"))
		    driver.findElement(By.xpath("//select[@name='filter_image']//following::option[3]")).click();
		    System.out.println("Filter details added");

}
	catch(Exception e)
	{
		System.out.println("Error: Unable to provide filter details "+e);	
		Assert.fail();
		}
}

@When("clicks on filter")
public void clicks_on_filter() {
	try {
		  driver.findElement(By.xpath("//*[@id='button-filter']/i")).click();
	}
	catch(Exception e)
	{
		System.out.println("Error: Unable to click on filter button "+e);
		Assert.fail();
	}

}

@Then("user gets results according to his filtered choices")
public void user_gets_results_according_to_his_filtered_choices() {
  try
  {    
	  String s=driver.findElement(By.xpath("//*[@id='content']/div[2]/div/div[2]/div[2]/div[2]")).getText();
	  if(s.equals("Showing 0 to 0 of 0 (0 Pages)"))
	  {
		 String comment= driver.findElement(By.xpath("//*[@id='form-product']/div/table/tbody/tr/td")).getText();
		 String excomment="No results!";
		 Assert.assertEquals(comment,excomment);
		 System.out.println(excomment);
	  }
	  
	  else
	  {
		  String pname= driver.findElement(By.xpath("//*[@id='form-product']/div/table/tbody/tr[1]/td[3]")).getText();
			 String expname="Airpods@123";
			 Assert.assertEquals(pname,expname);
			 System.out.println(pname+" has been filtered ");
	  }
  }
  catch(Exception e)
  {
	  System.out.println("Error: Filter is failing "+e);
		Assert.fail();
  }
}


@When("User checks product to be copied")
public void user_checks_product_to_be_copied() {
	
	try {
		driver.findElement(By.xpath("//td[contains(text(),'Airpods@123')]/..//descendant::input[1]")).click();
		System.out.println("Product/s has been checked");

	}
	catch(Exception e)
	{
		System.out.println("Error: Unable to check products "+e);
		Assert.fail();
	}
}

@When("clicks on Copy")
public void clicks_on_Copy() {
	
	try {
		driver.findElement(By.xpath("//*[@data-original-title='Copy']")).click();
		

	}
	catch(Exception e)
	{
		System.out.println("Error: Unable to click on copy button "+e);
		Assert.fail();
	}
}

@Then("the product is modified")
public void the_product_is_modified() {
	try{
			String s=driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
			String str="Success: You have modified products!";
			Assert.assertTrue(s.contains(str));
		 }
	catch(Exception e)
	{
		System.out.println("Error: Product could not be modified "+e);
		Assert.fail();
	}
}
@When("User checks product to be deleted")
public void user_checks_product_to_be_deleted() {
	
	try {
		driver.findElement(By.xpath("//td[contains(text(),'Airpods@123')]/..//descendant::input[1]")).click();
		System.out.println("Product/s has been checked");

	}
	catch(Exception e)
	{
		System.out.println("Error: Unable to check products "+e);
		Assert.fail();
	}
}

@When("clicks on Delete")
public void clicks_on_Delete() {
	
	 try {
		 driver.findElement(By.xpath("//*[@data-original-title='Delete']")).click();
		 Alert alert=driver.switchTo().alert();   
		 alert.accept();
		}
		catch(Exception e)
		{
			System.out.println("Error: Unable to click on delete button "+e);
			Assert.fail();
		}
}

@When("User clicks on Product Name")
public void user_clicks_on_Product_Name() {
	
	try {
		driver.findElement(By.xpath("//a[contains(text(),'Product Name')]")).click();

	}
	catch(Exception e)
	{
		System.out.println("Error: Unable to click on 'Product Name' "+e);
		Assert.fail();
	}
}

@Then("Product Names get sorted in descending order")
public void product_Names_get_sorted_in_descending_order() {
	try{
		String s1=driver.findElement(By.xpath("//table//following::tr[2]/td[3]")).getText();	
	String s2=driver.findElement(By.xpath("//table//following::tr[3]/td[3]")).getText();
	Assert.assertTrue(s1.compareTo(s2)>0 || s1.compareTo(s2)==0);
	
	System.out.println("Sorted according to Product Name");
	}
	catch(Exception e) {
	System.out.println("Error: Sorting not working");
	Assert.fail();
}
}

@When("User clicks on Model")
public void user_clicks_on_Model() {

	try {
		driver.findElement(By.xpath("//a[contains(text(),'Model')]")).click();

	}
	catch(Exception e)
	{
		System.out.println("Error: Unable to click on 'Model Name' "+e);
		Assert.fail();
	}
}

@Then("Model get sorted in ascending order")
public void model_get_sorted_in_ascending_order() {
	try {
	String s1=driver.findElement(By.xpath("//table//following::tr[2]/td[4]")).getText();	
	String s2=driver.findElement(By.xpath("//table//following::tr[3]/td[4]")).getText();
	Assert.assertTrue(s1.compareTo(s2)<0 || s1.compareTo(s2)==0);
	
	System.out.println("Sorted according to Model");
}
	catch(Exception e)
	{
		System.out.println("Error: Sorting not working");
		Assert.fail();
	}
}

@When("User clicks on Price")
public void user_clicks_on_Price() {
	
	try {
		driver.findElement(By.xpath("//a[contains(text(),'Price')]")).click();

	}
	catch(Exception e)
	{
		System.out.println("Error: Unable to click on 'Price' "+e);
		Assert.fail();
	}
    
}
@Then("Price get sorted in descending order")
public void price_get_sorted_in_descending_order() {
	try {
	String s1=driver.findElement(By.xpath("//table//following::tr[2]/td[5]")).getText();	
	String s2=driver.findElement(By.xpath("//table//following::tr[3]/td[5]")).getText();
	Assert.assertTrue(s1.compareTo(s2)>0 || s1.compareTo(s2)==0);
	
	System.out.println("Sorted according to Price");
	}
	catch(Exception e)
	{
		System.out.println("Error: Sorting not working");
		Assert.fail();
	}
}

@When("User clicks on Quantity")
public void user_clicks_on_Quantity() {

	try {
		driver.findElement(By.xpath("//a[contains(text(),'Quantity')]")).click();

	}
	catch(Exception e)
	{
		System.out.println("Error: Unable to click on 'Quantity' "+e);
		Assert.fail();
	}
}
@Then("Quantity get sorted in descending order")
public void quantity_get_sorted_in_descending_order() {
	try{
		String s1=driver.findElement(By.xpath("//table//following::tr[2]/td[6]")).getText();	
	String s2=driver.findElement(By.xpath("//table//following::tr[3]/td[6]")).getText();
	Assert.assertTrue(s1.compareTo(s2)>0 || s1.compareTo(s2)==0);
	
	System.out.println("Sorted according to Quantity");
	}
	catch(Exception e)
	{
		System.out.println("Error: Sorting not working");
		Assert.fail();
	}
}

@When("User clicks on Status")
public void user_clicks_on_Status() {
	
	try {
		driver.findElement(By.xpath("//td/descendant::a[contains(text(),'Status')]")).click();

	}
	catch(Exception e)
	{
		System.out.println("Error: Unable to click on 'Status' "+e);
		Assert.fail();
	}
}

@Then("Status get sorted with Enabled ones showing first")
public void status_get_sorted_with_Enabled_ones_showing_first() {
	try{
		
		String s1=driver.findElement(By.xpath("//table//following::tr[2]/td[7]")).getText();	
	String s2=driver.findElement(By.xpath("//table//following::tr[3]/td[7]")).getText();
	Assert.assertTrue(s1.compareTo(s2)==0);
	
	System.out.println("Sorted according to Status");
	}
	catch(Exception e)
	{
		System.out.println("Error: Sorting not working");
		Assert.fail();
	}
}

@When("User clicks {string}")
public void user_clicks(String string) {
	
	 try {
			
	 driver.findElement(By.xpath("//a[contains(text(),'"+string+"')]")).click();

		}
		catch(Exception e)
		{
			System.out.println("Error: Unable to click on 'page' "+e);
			Assert.fail();
		}
}

@Then("User is directed to page no. {string}")
public void user_is_directed_to_page_no(String string) {
	
	
	  try { 
		  String page = driver.findElement(By.xpath("//li[@class='active']//span")).getText();
	       Assert.assertEquals(page, string); 
	  }
	  catch(Exception e) {
		  
	  System.out.println("Navigation Failed");
	  Assert.fail();
	  }
	 
}
@When("User Clicks >|")
public void user_Clicks() {

	try {
		driver.findElement(By.xpath("//a[contains(text(),'>|')]")).click();

	}
	catch(Exception e)
	{
		System.out.println("Error: Unable to click on >| "+e);
		Assert.fail();
	}
}



@When("User Clicks on |<")
public void user_clicks_on() {
	

	try {
		driver.findElement(By.xpath("//a[contains(text(),'|<')]")).click();

	}
	catch(Exception e)
	{
		System.out.println("Error: Unable to click on |< "+e);
		Assert.fail();
	}
}



@Given("User checks the first checkbox")
public void user_checks_the_first_checkbox() {
	
	try {
		driver.findElement(By.xpath("//input[@type='checkbox']")).click();

	}
	catch(Exception e)
	{
		System.out.println("Error: Unable to check checkbox1 "+e);
		Assert.fail();
	}
}

@Then("all the checkboxes will be checked")
public void all_the_checkboxes_will_be_checked() {
    
	try {
	 boolean b1= driver.findElement(By.xpath("//input[@type='checkbox']//following::input[1]")).isSelected();
	  boolean b2=driver.findElement(By.xpath("//input[@type='checkbox']//following::input[2]")).isSelected();
	  boolean b3=driver.findElement(By.xpath("//input[@type='checkbox']//following::input[3]")).isSelected();
	  
	  if(b1==true&&b2==true&&b3==true)
	  {
		  System.out.println("Checkboxes are Working");
	  }
	}
	catch(Exception e)
	{
		 System.out.println("Error: Checkbox are not checked "+e);
	Assert.fail();
	}
    
}


}





