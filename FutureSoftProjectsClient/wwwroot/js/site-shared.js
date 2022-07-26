var showErrorPopupForm = function (error) {
    fetch("/Shared/Ok?okMessage=".concat(error, "&messageSymbol=x")).
        then(handleError).
        then(htmlDataType).
        then(function (data) {
        showPopupFormHtml(data);
    }).
        catch(function (error) {
        console.log(error);
    });
};
var gridViewMessage = function (message) {
    return "<div class=\"gv-row-message\">\n            <span class=\"gv-message-value\">".concat(message, "</span>\n            </div>");
};
//# sourceMappingURL=site-shared.js.map