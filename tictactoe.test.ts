import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

describe('tic tac toe functionality tests', ()=> {
test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click()
    await driver.sleep(4000)
    
});

test('Can I click the upper left square', async ()=> {
    let lSquare = await driver.findElement(By.id("cell-0"))
    await lSquare.click()
    await driver.sleep(4000)
});

test('Can I click the upper right square', async ()=> {
    let rSquare = await driver.findElement(By.id("cell-2"))
    await rSquare.click()
    await driver.sleep(4000)
});

test('Can I click the lower right square', async ()=> {
    let lRSquare = await driver.findElement(By.id("cell-8"))
    await lRSquare.click()
    await driver.sleep(4000)
});

});