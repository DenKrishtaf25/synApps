const select = document.querySelector('.select')

select.addEventListener("change", () => {
    let dataAtr = select.options[select.selectedIndex].getAttribute('data-placeholder')
    document.querySelector('.multi').placeholder = dataAtr
})