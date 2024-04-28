describe('Автотесты на форму логина и пароля', function () {
    it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //посетить сайт
        cy.get('#mail').type('german@dolnikov.ru'); //ввести логин
        cy.get('#pass').type('iLoveqastudio1');//ввести пароль
        cy.get('#loginButton').click(); //нажать войти
        cy.get('#messageHeader').should('be.visible'); // текст видимый
        cy.get('#messageHeader').contains('Авторизация прошла успешно');//корректный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//крестик видимый
 })

 it('Логика восстановления пароля', function () {
    cy.visit('https://login.qa.studio/'); //посетить сайт
    cy.get('#forgotEmailButton').click(); //нажать Забыли пароль
    cy.get('#mailForgot').type('german@dolnikov.ru'); //ввести логин
    cy.get('#restoreEmailButton').click(); //нажать восстановить пароль
    cy.get('#messageHeader').should('be.visible'); // текст видимый
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//корректный текст
    cy.get('#exitMessageButton').should('be.visible');//крестик видимый
})

it('Верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio/'); //посетить сайт
    cy.get('#mail').type('german@dolnikov.ru'); //ввести логин
    cy.get('#pass').type('iLoveqastudio');//ввести неверный пароль
    cy.get('#loginButton').click(); //нажать войти
    cy.get('#messageHeader').should('be.visible'); // текст видимый
    cy.get('#messageHeader').contains('Такого логина или пароля нет');//корректный текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//крестик видимый
})

it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); //посетить сайт
    cy.get('#mail').type('german@dolnik.ru'); //ввести неверный логин
    cy.get('#pass').type('iLoveqastudio1');//ввести верный пароль
    cy.get('#loginButton').click(); //нажать войти
    cy.get('#messageHeader').should('be.visible'); // текст видимый
    cy.get('#messageHeader').contains('Такого логина или пароля нет');//корректный текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//крестик видимый
})

it('Валидация email без @', function () {
    cy.visit('https://login.qa.studio/'); //посетить сайт
    cy.get('#mail').type('germandolnikov.ru'); //ввести логин без @
    cy.get('#pass').type('iLoveqastudio1');//ввести верный пароль
    cy.get('#loginButton').click(); //нажать войти
    cy.get('#messageHeader').should('be.visible'); // текст видимый
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//корректный текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//крестик видимый
})

it('Приведение к строчным буквам логина', function () {
    cy.visit('https://login.qa.studio/'); //посетить сайт
    cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввести логин в обоих регистрах
    cy.get('#pass').type('iLoveqastudio1');//ввести верный пароль
    cy.get('#loginButton').click(); //нажать войти
    cy.get('#messageHeader').should('be.visible'); // текст видимый
    cy.get('#messageHeader').contains('Авторизация прошла успешно');//корректный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//крестик видимый
})

})