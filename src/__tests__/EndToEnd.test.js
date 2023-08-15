import puppeteer from "puppeteer";

describe("filter events by city", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch(/* {
      headless: false,
      slowMo: 250,
      timeout: 0,
    } */);
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  let events;
  test("When user hasn't searched for a specific city, show upcoming events from all cities", async () => {
    events = await page.$$(".event");
    expect(events).toHaveLength(32);
  });

  test("User should see a list of suggestions when they search for a city", async () => {
    await page.type(".city", "Berlin");
    const suggestionListItems = await page.$$(".suggestions li");
    expect(suggestionListItems).toHaveLength(2);
  });

  test("User can select a city from the suggested list", async () => {
    await page.click(".suggestions li");
    events = await page.$$(".event");
    expect(events).toHaveLength(17);
  });
});

describe("show/hide an event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch(/* {
      headless: false,
      slowMo: 250,
      timeout: 0,
    } */);
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("an event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeNull();
  });

  test("user can expand an event to see its details", async () => {
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeDefined();
  });

  test("user can collapse an event to hide its details", async () => {
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeNull();
  });
});
