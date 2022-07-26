let shouldHidePopupBackground = true

window.onscroll = (e) => {

    e.preventDefault()

    toggleScrollTopButton()
}

window.onresize = (e: Event) => {

    e.preventDefault()

    reCenterPopupFormSmall()
    reCenterPopupFormProgressBar()
    reCenterScrollTopButton()
}

document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".scroll-top").addEventListener("click", (e: Event) => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" })
        e.preventDefault()
    })
})

const handleError = (response) => {
    if (!response.ok) {
        return response.text().
            then((error) => {
                throw Error(error)
            })
    }
    return response
}

const htmlDataType = (response) => {
    return response.text()
}

const jsonDataType = (response) => {
    return response.json()
}

const isVisible = (element) => {

    if (!!element) {

        const _style = window.getComputedStyle(element)

        return (
            _style.opacity !== "0" &&
            _style.display !== "none" &&
            _style.visibility !== "hidden")
    }
    else {
        return false
    }
}

const showPopupFormProgressBar = () => {
    const _backgroundPopup: HTMLDivElement = document.querySelector(".background-popup"),
        _popupFormProgressBar: HTMLDivElement = document.querySelector(".popup-form-progress-bar")

    _popupFormProgressBar.classList.remove("hide-popup-form-progress-bar")
    _popupFormProgressBar.classList.add("show-popup-form-progress-bar")

    centerPopupFormProgressBar(_popupFormProgressBar)

    if (isVisible(_backgroundPopup)) {
        shouldHidePopupBackground = false
        _backgroundPopup.style.cssText = "z-index:6"
    }
    else {
        shouldHidePopupBackground = true;
        showPopupBackground()
    }
}

const hidePopupFormProgressBar = () => {

    const _popupFormProgressBar: HTMLDivElement = document.querySelector(".popup-form-progress-bar")

    _popupFormProgressBar.classList.remove("show-popup-form-progress-bar")
    _popupFormProgressBar.classList.add("hide-popup-form-progress-bar")

    if (shouldHidePopupBackground) {
        hidePopupBackground()
    }
    else {
        (document.querySelector(".background-popup") as HTMLDivElement).style.cssText = "z-index:3"
    }
}

const showPopupFormHtml = (data) => {

    document.querySelector("#popupFormToShow").innerHTML = data

    hidePopupFormProgressBar()

    let _popupForm: HTMLDivElement

    if (!!document.querySelector(".popup-form-small")) {
        _popupForm = document.querySelector(".popup-form-small")

        centerPopupFormSmall(_popupForm)
    }

    if (!!_popupForm) {

        showPopupBackground()

        _popupForm.classList.remove("hide-popup-form")
        _popupForm.classList.add("show-popup-form")
    }
}

const hidePopupForm = () => {

    let _popupForm: HTMLDivElement

    if (!!document.querySelector(".popup-form-small")) {
        _popupForm = document.querySelector(".popup-form-small")
    }

    if (!!_popupForm) {

        _popupForm.classList.remove("show-popup-form")
        _popupForm.classList.add("hide-popup-form")

        hidePopupBackground()
    }
}

const toggleScrollTopButton = () => {

    if (window.pageYOffset >= 180) {

        const _scrollTop: HTMLDivElement = document.querySelector(".scroll-top")
        if (!!_scrollTop) {
            if (!_scrollTop.classList.contains("show-scroll-top")) {

                centerScrollTopButton(_scrollTop)

                _scrollTop.classList.remove("hide-scroll-top")
                _scrollTop.classList.add("show-scroll-top")
            }
        }
    }
    else {

        const _scrollTop: HTMLDivElement = document.querySelector(".scroll-top")
        if (!!_scrollTop) {
            if (!_scrollTop.classList.contains("hide-scroll-top")) {

                if (_scrollTop.classList.contains("show-scroll-top")) {

                    _scrollTop.classList.remove("show-scroll-top")
                    _scrollTop.classList.add("hide-scroll-top")
                }
            }
        }
    }
}

const reCenterPopupFormProgressBar = () => {

    const _popupForm: HTMLDivElement = document.querySelector(".popup-form-progress-bar")
    if (isVisible(_popupForm)) {
        centerPopupFormProgressBar(_popupForm)
    }
}

const reCenterPopupFormSmall = () => {

    const _popupForm: HTMLDivElement = document.querySelector(".popup-form-small")

    if (isVisible(_popupForm)) {
        centerPopupFormSmall(_popupForm)
    }
}

const reCenterScrollTopButton = () => {

    const _scrollTop: HTMLDivElement = document.querySelector(".scroll-top")
    if (isVisible(_scrollTop)) {
        centerScrollTopButton(_scrollTop)
    }
}

function hidePopupBackground() {

    const _backgroundPopup: HTMLDivElement = document.querySelector(".background-popup")

    _backgroundPopup.classList.remove("show-popup-background")
    _backgroundPopup.classList.add("hide-popup-background")
}

function showPopupBackground() {

    const _backgroundPopup: HTMLDivElement = document.querySelector(".background-popup")

    _backgroundPopup.classList.remove("hide-popup-background")
    _backgroundPopup.classList.add("show-popup-background")
}

function centerPopupFormProgressBar(popupForm: HTMLDivElement) {

    const _windowWidth = document.documentElement.clientWidth,
        _popupWidth = popupForm.clientWidth

    popupForm.style.cssText =
        `top:${window.pageYOffset + 6}px;left:${_windowWidth / 2 - _popupWidth / 2}px`
}

function centerPopupFormSmall(popupForm: HTMLDivElement) {

    const _windowWidth = document.documentElement.clientWidth,
        _popupWidth = popupForm.clientWidth

    popupForm.style.cssText =
        `top:${window.pageYOffset + 10}px;left:${_windowWidth / 2 - _popupWidth / 2}px`
}

function centerScrollTopButton(scrollTopElement: HTMLDivElement) {
    scrollTopElement.style.cssText = "bottom:0px; right:0px"
}

