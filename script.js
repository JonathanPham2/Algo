import { chromium } from "playwright";

(async () => {
    // 2. launch the browser
    const browser = await chromium.launch({ headless: false }); 
  
    // 3. create a new browser context (incognito-ish session)
    const context = await browser.newContext();
  
    // 4. open a new page/tab
    const page = await context.newPage();
  
    // 5. navigate to your video page
    await page.goto('https://sexual-harassment-prevention-training.calcivilrights.ca.gov/SupervisoryEnglish/story.html');
    // while (true) {
    //     try {
    //       // wait up to 30s for the Next button to appear
    //       await page.waitForSelector('button:has-text("Next")', {
    //         state: 'visible',
    //         timeout: 30000
    //       });
    //       // click when it’s there
    //       await page.click('button:has-text("Next")');
    //     } catch {
    //       // if it never appears (timeout), break out
    //       break;
    //     }
    //   }
  
    // 6. wait for the “Next” button to appear
    const nextBtn = page.locator('button:has-text("Next")');
    // await nextBtn.waitFor({ state: 'visible' });
    for (let i = 0; i < 180; i++) {
        await nextBtn.waitFor({ state: 'visible', timeout: 30000 });
        await nextBtn.click();
      }
  
    // // 7. click it
    // await nextBtn.click();
  
    // 8. (optional) close the browser when you’re done
    // await browser.close();
  })();
  