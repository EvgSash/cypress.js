function getRandomInt(max) {
    return Math.floor(Math.random() * max);                                   // подключаем библиотеку
  }
describe('Тестирование PokemonBattle', function () {
   it('Покупка аватара', function () {
        cy.visit('https://pokemonbattle.me/login');                            // заходим на сайт

        cy.get(':nth-child(1) > .auth__input').type('evgeniy.sashikhin@yandex.ru')  // вводим почту
        cy.get('#password').type('zemportnoi123A')                                  // вводим пароль
        cy.get('.auth__button').click()                                             // жмём войти

        cy.get('.header__btns > [href="/shop"]').click()                            // заходим в магазин
        
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(getRandomInt(10)).click()  // выбор рандомного аватара
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('3562119094349646')                 // вводим номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1025')                                                // вводим срок действия карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125')                               // вводим cvv
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('vasa puupkin').type('{enter}')              // вводим имя, нажимаем enter
        cy.get('#cardnumber').type('56456')                                                                      // вводим проверочный код
        cy.get('.payment__submit-button').click()                                                                // нажимаем отправить
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно')                                  // проверяем текст
    })
    
})
