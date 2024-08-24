const { chromium, expect } = require("@playwright/test");

exports.PlaywrightCore = class PlaywrightCore {
  static async allTextContents(locator) {
    try {
      return await locator.allTextContents();
    } catch (error) {
      console.warn(
        `An error occurred while fetching text contents of ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async check(locator, options = {}) {
    try {
      await locator.check(options);
    } catch (error) {
      console.warn(
        `An error occurred while checking ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async clear(locator, options = {}) {
    try {
      await locator.clear(options);
    } catch (error) {
      console.warn(
        `An error occurred while clearing ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async click(locator, options = {}) {
    try {
      await locator.click(options);
    } catch (error) {
      console.warn(
        `An error occurred while clicking ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async count(locator) {
    try {
      return await locator.count();
    } catch (error) {
      console.warn(
        `An error occurred while counting elements of ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async doubleClick(locator, options = {}) {
    try {
      await locator.dblclick(options);
    } catch (error) {
      console.warn(
        `An error occurred while double-clicking ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async dragAndDrop(sourceLocator, targetLocator, options = {}) {
    try {
      await sourceLocator.dragTo(targetLocator, options);
    } catch (error) {
      console.warn(
        `An error occurred while dragging from ${sourceLocator} to ${targetLocator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async fill(locator, textToFill, options = {}) {
    try {
      await locator.fill(textToFill, options);
    } catch (error) {
      console.warn(
        `An error occurred while filling ${locator} with text, Error:`,
        error
      );
      throw error;
    }
  }

  static async filter(locator, options = {}) {
    try {
      return await locator.filter(options);
    } catch (error) {
      console.warn(
        `An error occurred while filtering ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async first(locator) {
    try {
      return await locator.first();
    } catch (error) {
      console.warn(
        `An error occurred while fetching the first element of ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async focus(locator, options = {}) {
    try {
      await locator.focus(options);
    } catch (error) {
      console.warn(
        `An error occurred while focusing on ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async goTo(page, url, options = {}) {
    try {
      await page.goto(url, options);
    } catch (error) {
      console.warn(
        `An error occurred while navigating to ${url}, Error:`,
        error
      );
      throw error;
    }
  }

  static async getAttribute(locator, attributeName, options = {}) {
    try {
      return await locator.getAttribute(attributeName, options);
    } catch (error) {
      console.warn(
        `An error occurred while getting attribute ${attributeName} of ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async hover(locator, options = {}) {
    try {
      await locator.hover(options);
    } catch (error) {
      console.warn(
        `An error occurred while hovering over ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async innerHTML(locator, options = {}) {
    try {
      return await locator.innerHTML(options);
    } catch (error) {
      console.warn(
        `An error occurred while getting innerHTML of ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async innerText(locator, options = {}) {
    try {
      return await locator.innerText(options);
    } catch (error) {
      console.warn(
        `An error occurred while getting innerText of ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async inputValue(locator, options = {}) {
    try {
      return await locator.inputValue(options);
    } catch (error) {
      console.warn(
        `An error occurred while getting input value of ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async isChecked(locator, options = {}) {
    try {
      return await locator.isChecked(options);
    } catch (error) {
      console.warn(
        `An error occurred while checking if ${locator} is checked, Error:`,
        error
      );
      throw error;
    }
  }

  static async isDisabled(locator, options = {}) {
    try {
      return await locator.isDisabled(options);
    } catch (error) {
      console.warn(
        `An error occurred while checking if ${locator} is disabled, Error:`,
        error
      );
      throw error;
    }
  }

  static async isEditable(locator, options = {}) {
    try {
      return await locator.isEditable(options);
    } catch (error) {
      console.warn(
        `An error occurred while checking if ${locator} is editable, Error:`,
        error
      );
      throw error;
    }
  }

  static async isEnabled(locator, options = {}) {
    try {
      return await locator.isEnabled(options);
    } catch (error) {
      console.warn(
        `An error occurred while checking if ${locator} is enabled, Error:`,
        error
      );
      throw error;
    }
  }

  static async isHidden(locator, options = {}) {
    try {
      return await locator.isHidden(options);
    } catch (error) {
      console.warn(
        `An error occurred while checking if ${locator} is hidden, Error:`,
        error
      );
      throw error;
    }
  }

  static async isVisible(locator, options = {}) {
    try {
      return await locator.isVisible(options);
    } catch (error) {
      console.warn(
        `An error occurred while checking if ${locator} is visible, Error:`,
        error
      );
      throw error;
    }
  }

  static async locator(locator, selector, options = {}) {
    try {
      return locator.locator(selector, options);
    } catch (error) {
      console.warn(
        `An error occurred while creating locator for ${selector} in ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async press(locator, textTopress, options = {}) {
    try {
      await locator.press(textTopress, options);
    } catch (error) {
      console.warn(
        `An error occurred while pressing ${textTopress} on ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async scrollIntoViewIfNeeded(locator, options = {}) {
    try {
      await locator.scrollIntoViewIfNeeded(options);
    } catch (error) {
      console.warn(
        `An error occurred while scrolling into view for ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async selectDropDownOption(locator, optionToSelect, options = {}) {
    try {
      await locator.selectOption(optionToSelect, options);
    } catch (error) {
      console.warn(
        `An error occurred while selecting option ${optionToSelect} in ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async setCheckBox(locator, toCheck, options = {}) {
    try {
      await locator.setChecked(toCheck, options);
    } catch (error) {
      console.warn(
        `An error occurred while setting checkbox for ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async setRadioBtn(locator, options = {}) {
    try {
      await locator.check(options);
    } catch (error) {
      console.warn(
        `An error occurred while setting radio button for ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async textContent(locator, options = {}) {
    try {
      return await locator.textContent(options);
    } catch (error) {
      console.warn(
        `An error occurred while fetching text content of ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async uncheck(locator, options = {}) {
    try {
      await locator.uncheck(options);
    } catch (error) {
      console.warn(
        `An error occurred while unchecking ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async waitFor(locator, options = {}) {
    try {
      await locator.waitFor(options);
    } catch (error) {
      console.warn(
        `An error occurred while waiting for ${locator}, Error:`,
        error
      );
      throw error;
    }
  }

  static async waitForEvent(page, event, options = {}) {
    try {
      return page.waitForEvent(event, options);
    } catch (error) {
      console.warn(
        `An error occurred while waiting for event ${event} on page, Error:`,
        error
      );
      throw error;
    }
  }

  static async chromiumLaunch() {
    try {
      return await chromium.launch();
    } catch (error) {
      console.warn(`An error occurred while launching Chromium, Error:`, error);
      throw error;
    }
  }

  static async newBrowserContext(browser) {
    try {
      let context = await browser.newContext();
      return context;
    } catch (error) {
      console.warn(
        `An error occurred while creating a new browser context, Error:`,
        error
      );
      throw error;
    }
  }

  static async newPage(context) {
    try {
      let page = await context.newPage();
      return page;
    } catch (error) {
      console.warn(
        `An error occurred while creating a new page, Error:`,
        error
      );
      throw error;
    }
  }

  static async selectingDropDownByLabel(page, label, input) {
    try {
      await page.getByLabel(label).click();
      await page.getByRole("option", { name: input }).click();
    } catch (error) {
      console.warn(`An error occurred while selecting, Error:`, error);
      throw error;
    }
  }

  static async selectingDropDownByText(page, Text, input) {
    try {
      await page.getByText(Text).click();
      await page.getByRole("option", { name: input }).click();
    } catch (error) {
      console.warn(`An error occurred while selecting, Error:`, error);
      throw error;
    }
  }

  static async ClickByText(page, Text) {
    try {
      await page.getByText(Text).click();
    } catch (error) {
      console.warn(`An error occurred while clicking, Error:`, error);
      throw error;
    }
  }

  static async slidingElement(page, element, key, code, duration = null) {
    try {
      if (duration) {
        const startTime = Date.now();

        while (Date.now() - startTime < duration) {
          await page.getByRole(element).press(key);
        }
      } else {
        const count = code?.length * 4;
        for (let i = 0; i <= count; i++) {
          await page.getByRole(element).press(key);
        }
      }
    } catch (error) {
      console.warn(`An error occurred while sliding, Error:`, error);
      throw error;
    }
  }

  static async fileUpload(locator, path) {
    try {
      await locator.setInputFiles(path);
    } catch (error) {
      console.warn(`An error occurred while uploading, Error:`, error);
      throw error;
    }
  }

  static async waitForElementToDisappear(
    page,
    selector,
    timeout = 60000,
    interval = 3000
  ) {
    const start = Date.now();
    while (Date.now() - start < timeout) {
      try {
        const element = await page.$(selector);
        if (!element) {
          console.log(`Element ${selector} has disappeared.`);
          return;
        }
      } catch (error) {
        console.error(`Error occurred while checking ${selector}:`, error);
      }
      // Custom wait with setTimeout for polling interval
      await new Promise((resolve) => setTimeout(resolve, interval));
    }
    console.error(
      `Timeout exceeded: Element ${selector} did not disappear within ${
        timeout / 1000
      } seconds.`
    );
  }
};
