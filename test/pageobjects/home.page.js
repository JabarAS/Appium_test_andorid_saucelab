import {} from '@wdio/globals'

class HomePage {
    get Title() {
        return $('~title')
    }

}