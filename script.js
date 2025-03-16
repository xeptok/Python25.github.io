let th = window.Telegram.WebApp

tg.expand()

let btn = document.querySelector('#click')

btn.oneclick = () => {
    if (tg.MainButton.isVisible)
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Гарик Харламоооов!")
        tg.MainButton.show()}