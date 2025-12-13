import {} from '@wdio/globals'

class BurgerPage {
    get Burger() {
        return $('~View menu')
    }
    get catalog() {
        return $('id:com.saucelabs.mydemoapp.android:id/itemTV')
    }
    get resetAPP() {
        return $('android=new UiSelector().text("Catalog")')
    }
    get ButtonConfirm() {
        return $('android=new UiSelector().resourceId("android:id/button1")')
    }
    get ButtonCancel() {
        return $('android=new UiSelector().resourceId("android:id/button2")')
    }
    get LoginButton() {
        return $('~Login Menu Item')
    }
    get LogoutButton() {
        return $('~Login Menu Item')
    }
}