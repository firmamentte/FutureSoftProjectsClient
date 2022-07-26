var getProjects = function (searchValue) {
    showPopupFormProgressBar();
    var _globalSearchTextBox = document.querySelector(".global-search-text-box");
    fetch("/Project/GetProjects?searchValue=".concat(searchValue)).
        then(handleError).
        then(htmlDataType).
        then(function (data) {
        document.querySelector("#divProjectsGrid").innerHTML = data;
        document.querySelectorAll("#divProjectsGrid .grid-view .gv-row .main-grid .grid-content span").forEach(function (element) {
            element.innerHTML = stringHighlightText(element.innerHTML, _globalSearchTextBox.value);
        });
        document.querySelectorAll("#divProjectsGrid .grid-view ul li").forEach(function (element) {
            element.innerHTML = stringHighlightText(element.innerHTML, _globalSearchTextBox.value);
        });
        hidePopupFormProgressBar();
    }).
        catch(function (error) {
        showErrorPopupForm(error);
        _globalSearchTextBox.value = "";
    });
};
var stringHighlightText = function (stringValue, stringToHighlight) {
    var reg = new RegExp(stringToHighlight, 'gi');
    return stringValue.replace(reg, function (str) {
        return '<span style="background-color:#ffbf00;font-style:italic;">' + str + '</span>';
    });
};
//# sourceMappingURL=project.js.map