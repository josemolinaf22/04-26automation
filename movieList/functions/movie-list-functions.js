const { By } = require('selenium-webdriver')


// require('chromedriver')

// const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('tenet')
    
    await driver.findElement(By.xpath('//button')).click()

    const movie = await driver.findElement(By.xpath('(//li)[1]'))

    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy()
}

const deleteMovie = async (driver) => {

    await driver.findElement(By.xpath('//*[contains(text(),"x")]')).click()

    const ul = await driver.findElement(By.xpath('//ul'))

    expect(ul.hasChildren).toBeFalsy()

}

const crossOffMovie = async (driver) => {
    await driver.findElement(By.xpath('(//span)[1]')).click()

    const checked = await driver.findElement(By.xpath('//*[@class="checked"]'))
    
    expect(checked).toBeTruthy()

}


module.exports = {
    addMovie,
    deleteMovie,
    crossOffMovie
}