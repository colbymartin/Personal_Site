window.addEventListener('load', function () {
    let portfolioBtn = document.querySelector('.portBtn');
    portfolioBtn.addEventListener('click', function () { 
        let portfolio = document.querySelector('.portfolio');
        let portShow = portfolio.classList.contains('hide');
        if (portShow === true) {
            portfolio.classList.remove('hide');
        } else {
            portfolio.classList.add('hide');
        }
    });
    let skillsBtn = document.querySelector('.skillsBtn');
    skillsBtn.addEventListener('click', function () {
        let skills = document.querySelector('.skills');
        let skillsShow = skills.classList.contains('hide');
        if (skillsShow === true) {
            skills.classList.remove('hide');
        } else {
            skills.classList.add('hide');
        }
    })

})