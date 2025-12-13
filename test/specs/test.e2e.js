import { driver, $ } from '@wdio/globals'

describe('Product List', () => {
    it('test burger', async function() {
        await $('~View menu').click()

        await $('android=new UiSelector().text("Reset App State")').click()
        await driver.pause(3000)
        await $('android=new UiSelector().resourceId("android:id/button1")').click()
    })

    // it('click first product', async function() {

    //     //const productImage = $('~Product Image');
    //     // atau pilih salah satu:
    //     //const productImage = $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV")');
    //     const productImage1 = $('(//android.widget.ImageView[@content-desc="Product Image"])[1]');
    //     await productImage1.click();

    //     // const firstProdct = await $('//*[@content-desc="Product Image"]')
    //     // await firstProdct.click()
    //     // await driver.pause(3000)
    // })

    // // it('click second product', async function() {
    //     const productImage2 = $('(//android.widget.ImageView[@content-desc="Product Image"])[2]');
    //     await productImage2.click()


    // })
})