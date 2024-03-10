describe('Тестирование авторизации', function () {

    it('Верный логин и пароль', function () {

       cy.visit('https://login.qa.studio/');           // открыть сайт 

       cy.get('#mail').type('german@dolnikov.ru')      // ввести логин 
       cy.get('#pass').type('iLoveqastudio1')          // ввести пароль
       cy.get('#loginButton').click()                  // нажать на кнопку "войти"

       cy.get('#messageHeader').contains('Авторизация прошла успешно')  // проверяем текст
       cy.get('#exitMessageButton > .exitIcon')                         // проверяем наличие крестика
    })

    it('Логика восстановления пароля', function () {

        cy.visit('https://login.qa.studio/');             // открыть сайт 

        cy.get('#forgotEmailButton').click()              // нажать "забыли пароль?"
        cy.get('#mailForgot').type('german@dolnikov.ru')  // ввести email
        cy.get('#restoreEmailButton').click()             // нажать "Отправить код"

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')      // проверяем текст
        cy.get('#exitMessageButton > .exitIcon')                                     // проверяем наличие крестика
    })

    it('Верный логин, неверный пароль', function () {

        cy.visit('https://login.qa.studio/');           // открыть сайт 
 
        cy.get('#mail').type('german@dolnikov.ru')      // ввести логин 
        cy.get('#pass').type('iLoveqastudio2')          // ввести неверный пароль
        cy.get('#loginButton').click()                  // нажать на кнопку "войти"

        cy.get('#messageHeader').contains('Такого логина или пароля нет') // проверяем текст
        cy.get('#exitMessageButton > .exitIcon')                          // проверяем наличие крестика
    })

    it('Неверный логин, верный пароль', function () {

        cy.visit('https://login.qa.studio/');            // открыть сайт 
 
        cy.get('#mail').type('german@dolnikovv.ru')      // ввести неверный логин 
        cy.get('#pass').type('iLoveqastudio1')           // ввести пароль
        cy.get('#loginButton').click()                   // нажать на кнопку "войти"
 
        cy.get('#messageHeader').contains('Такого логина или пароля нет') // проверяем текст
        cy.get('#exitMessageButton > .exitIcon')                          // проверяем наличие крестика
    })

    it('Логин без "@", верный пароль', function () {

        cy.visit('https://login.qa.studio/');            // открыть сайт 
 
        cy.get('#mail').type('germandolnikovv.ru')      // ввести логин без "@"
        cy.get('#pass').type('iLoveqastudio1')           // ввести пароль
        cy.get('#loginButton').click()                   // нажать на кнопку "войти"
 
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации')  // проверяем текст
        cy.get('#exitMessageButton > .exitIcon')                                 // проверяем наличие крестика
    })

    it('приведение к строчным буквам', function () {

        cy.visit('https://login.qa.studio/');            // открыть сайт 
 
        cy.get('#mail').type('gerMAndolnikoV.ru')      // ввести логин с разным регистром
        cy.get('#pass').type('iLoveqastudio1')           // ввести пароль
        cy.get('#loginButton').click()                   // нажать на кнопку "войти"
 
       cy.get('#messageHeader').contains('Авторизация прошла успешно')  // проверяем текст
       cy.get('#exitMessageButton > .exitIcon')                         // проверяем наличие крестика
    })
})