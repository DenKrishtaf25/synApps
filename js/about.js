document.querySelectorAll('.about__box').forEach(elem => {
    elem.addEventListener('mouseover', (e) => {
        document.querySelectorAll('.about__box').forEach(elem => elem.classList.remove('active'))
        let id = e.currentTarget.dataset.about
        e.currentTarget.classList.add('active')
        document.querySelectorAll('.about__txt').forEach(txt => txt.classList.remove('active'))
        document.getElementById(id).classList.add('active')
    })
})