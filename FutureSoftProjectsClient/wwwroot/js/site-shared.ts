const showErrorPopupForm = (error: string) => {

    fetch(`/Shared/Ok?okMessage=${error}&messageSymbol=x`).
        then(handleError).
        then(htmlDataType).
        then((data) => {
            showPopupFormHtml(data)
        }).
        catch((error) => {
            console.log(error)
        })
}

const gridViewMessage = (message) => {
    return `<div class="gv-row-message">
            <span class="gv-message-value">${message}</span>
            </div>`
}

