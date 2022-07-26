var shouldHidePopupBackground = true;
window.onscroll = function (e) {
    e.preventDefault();
    toggleScrollTopButton();
};
window.onresize = function (e) {
    e.preventDefault();
    reCenterPopupFormSmall();
    reCenterPopupFormProgressBar();
    reCenterScrollTopButton();
};
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".scroll-top").addEventListener("click", function (e) {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
        e.preventDefault();
    });
});
var handleError = function (response) {
    if (!response.ok) {
        return response.text().
            then(function (error) {
            throw Error(error);
        });
    }
    return response;
};
var htmlDataType = function (response) {
    return response.text();
};
var jsonDataType = function (response) {
    return response.json();
};
var isVisible = function (element) {
    if (!!element) {
        var _style = window.getComputedStyle(element);
        return (_style.opacity !== "0" &&
            _style.display !== "none" &&
            _style.visibility !== "hidden");
    }
    else {
        return false;
    }
};
var showPopupFormProgressBar = function () {
    var _backgroundPopup = document.querySelector(".background-popup"), _popupFormProgressBar = document.querySelector(".popup-form-progress-bar");
    _popupFormProgressBar.classList.remove("hide-popup-form-progress-bar");
    _popupFormProgressBar.classList.add("show-popup-form-progress-bar");
    centerPopupFormProgressBar(_popupFormProgressBar);
    if (isVisible(_backgroundPopup)) {
        shouldHidePopupBackground = false;
        _backgroundPopup.style.cssText = "z-index:6";
    }
    else {
        shouldHidePopupBackground = true;
        showPopupBackground();
    }
};
var hidePopupFormProgressBar = function () {
    var _popupFormProgressBar = document.querySelector(".popup-form-progress-bar");
    _popupFormProgressBar.classList.remove("show-popup-form-progress-bar");
    _popupFormProgressBar.classList.add("hide-popup-form-progress-bar");
    if (shouldHidePopupBackground) {
        hidePopupBackground();
    }
    else {
        document.querySelector(".background-popup").style.cssText = "z-index:3";
    }
};
var showPopupFormHtml = function (data) {
    document.querySelector("#popupFormToShow").innerHTML = data;
    hidePopupFormProgressBar();
    var _popupForm;
    if (!!document.querySelector(".popup-form-small")) {
        _popupForm = document.querySelector(".popup-form-small");
        centerPopupFormSmall(_popupForm);
    }
    if (!!_popupForm) {
        showPopupBackground();
        _popupForm.classList.remove("hide-popup-form");
        _popupForm.classList.add("show-popup-form");
    }
};
var hidePopupForm = function () {
    var _popupForm;
    if (!!document.querySelector(".popup-form-small")) {
        _popupForm = document.querySelector(".popup-form-small");
    }
    if (!!_popupForm) {
        _popupForm.classList.remove("show-popup-form");
        _popupForm.classList.add("hide-popup-form");
        hidePopupBackground();
    }
};
var toggleScrollTopButton = function () {
    if (window.pageYOffset >= 180) {
        var _scrollTop = document.querySelector(".scroll-top");
        if (!!_scrollTop) {
            if (!_scrollTop.classList.contains("show-scroll-top")) {
                centerScrollTopButton(_scrollTop);
                _scrollTop.classList.remove("hide-scroll-top");
                _scrollTop.classList.add("show-scroll-top");
            }
        }
    }
    else {
        var _scrollTop = document.querySelector(".scroll-top");
        if (!!_scrollTop) {
            if (!_scrollTop.classList.contains("hide-scroll-top")) {
                if (_scrollTop.classList.contains("show-scroll-top")) {
                    _scrollTop.classList.remove("show-scroll-top");
                    _scrollTop.classList.add("hide-scroll-top");
                }
            }
        }
    }
};
var reCenterPopupFormProgressBar = function () {
    var _popupForm = document.querySelector(".popup-form-progress-bar");
    if (isVisible(_popupForm)) {
        centerPopupFormProgressBar(_popupForm);
    }
};
var reCenterPopupFormSmall = function () {
    var _popupForm = document.querySelector(".popup-form-small");
    if (isVisible(_popupForm)) {
        centerPopupFormSmall(_popupForm);
    }
};
var reCenterScrollTopButton = function () {
    var _scrollTop = document.querySelector(".scroll-top");
    if (isVisible(_scrollTop)) {
        centerScrollTopButton(_scrollTop);
    }
};
function hidePopupBackground() {
    var _backgroundPopup = document.querySelector(".background-popup");
    _backgroundPopup.classList.remove("show-popup-background");
    _backgroundPopup.classList.add("hide-popup-background");
}
function showPopupBackground() {
    var _backgroundPopup = document.querySelector(".background-popup");
    _backgroundPopup.classList.remove("hide-popup-background");
    _backgroundPopup.classList.add("show-popup-background");
}
function centerPopupFormProgressBar(popupForm) {
    var _windowWidth = document.documentElement.clientWidth, _popupWidth = popupForm.clientWidth;
    popupForm.style.cssText =
        "top:".concat(window.pageYOffset + 6, "px;left:").concat(_windowWidth / 2 - _popupWidth / 2, "px");
}
function centerPopupFormSmall(popupForm) {
    var _windowWidth = document.documentElement.clientWidth, _popupWidth = popupForm.clientWidth;
    popupForm.style.cssText =
        "top:".concat(window.pageYOffset + 10, "px;left:").concat(_windowWidth / 2 - _popupWidth / 2, "px");
}
function centerScrollTopButton(scrollTopElement) {
    scrollTopElement.style.cssText = "bottom:0px; right:0px";
}
//# sourceMappingURL=site-design.js.map