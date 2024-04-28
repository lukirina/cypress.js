describe('Автотесты на покупку нового аватара', function () {
    it('Авторизация на сайте', function () {
        cy.visit('https://pokemonbattle.me/'); //посетить сайт
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); //ввести логин
        cy.get('#password').type('USER_PASSWORD');//ввести пароль
        cy.get('.auth__button').click(); //нажать войти
        cy.get('.header__btns > [href="/shop"]').click(); //нажать Магазин
        cy.get('.available > button').first().click(); //клик по первому доступному аватару
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4548484161148447');//ввести карту
        cy.get(':nth-child(1) > .pay_base-input-v2').type('0529');//ввести срок карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');//ввести cvv
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Innokentij');//ввести имя
        cy.get('.pay-btn').click(); //нажать Оплатить
        cy.get('#cardnumber').type('56456');//ввести пароль
        cy.get('.payment__submit-button').click(); //нажать отправить
        cy.get('.payment__font-for-success').should('be.visible'); // текст видимый
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); //корректный текст
        cy.get('.payment__adv').click();

 })
})