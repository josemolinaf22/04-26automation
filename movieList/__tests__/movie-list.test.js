const {Builder, Capabilities} = require('selenium-webdriver')
require('chromedriver')


const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const { addMovie, crossOffMovie, deleteMovie} = require('../functions/movie-list-functions.js')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})
afterAll(async () =>{
    await driver.quit()
})

test('Add a movie', async () => {
    await addMovie(driver)
    await driver.sleep(3000)
})

test('Cross Off movie', async () => {
    await crossOffMovie(driver)
    await driver.sleep(3000)
})

test('Delete movie', async () => {
    await deleteMovie(driver)
    await driver.sleep(3000)
})
