package hooks;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hookclass {
	
	
	
	public static WebDriver driver;
	
	@Before
	public void initialization()
	{
		System.setProperty("webdriver.chrome.driver", "E:\\WORK\\Capgemini Training\\CGProject\\Capg_SEL\\chromedriver.exe");
	    driver = new ChromeDriver();
		driver.get("http://retailm1.upskills.in/admin/index.php?route=common/login");
	}

	@After
	public void closedriver()
	{
		System.out.println("The browser is closing now");
		driver.quit();
	}
}