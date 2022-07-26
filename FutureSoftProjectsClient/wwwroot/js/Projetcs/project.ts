const getProjects = (searchValue: string) => {

    showPopupFormProgressBar()

    const _globalSearchTextBox: HTMLInputElement = document.querySelector(".global-search-text-box")

    fetch(`/Project/GetProjects?searchValue=${searchValue}`).
        then(handleError).
        then(htmlDataType).
        then((data) => {

            document.querySelector("#divProjectsGrid").innerHTML = data

            document.querySelectorAll("#divProjectsGrid .grid-view .gv-row .main-grid .grid-content span").forEach((element: HTMLSpanElement) => {
                element.innerHTML = stringHighlightText(element.innerHTML, _globalSearchTextBox.value)
            })

            document.querySelectorAll("#divProjectsGrid .grid-view ul li").forEach((element: HTMLLIElement) => {
                element.innerHTML = stringHighlightText(element.innerHTML, _globalSearchTextBox.value)
            })

            hidePopupFormProgressBar()
        }).
        catch((error) => {
            showErrorPopupForm(error)

            _globalSearchTextBox.value = ""
        })
}

const stringHighlightText = (stringValue: string, stringToHighlight: string): string => {
    var reg = new RegExp(stringToHighlight, 'gi');
    return stringValue.replace(reg, function (str) {
        return '<span style="background-color:#ffbf00;font-style:italic;">' + str + '</span>'
    });
}
