let lngButton = document.querySelector(".lng-button")
let counter = 0
function switchLang(){

    counter++
    lngButton.classList.toggle("on")
    /* Вибираємо елементи для перекладу*/
    let btnBig = document.querySelector(".btn--big")
    let heroText = document.querySelector(".eng__hero-text")
    let btn = document.querySelector(".btn")
    let blockquoteText = document.querySelector(".blockquote__text")
    let blockquoteAuthor = document.querySelector(".blockquote__author")
    let btnLarge = document.querySelector(".btn--large")
    let engBlockquotetext = document.querySelector(".eng__blockquote-text")
    let enbBlockquotetext = document.querySelector(".enb__blockquote-text")
    let navItems = document.querySelectorAll(".nav__item")
    let  langBlockquotetext = document.querySelector(".lang__blockquote-text")
    let langItemtitle = document.querySelectorAll(".lang__item-title")
console.log (langBlockquotetext)
    /* Вибираємо елементи для перекладу*/
    if (counter % 2 == 0){
        /* Переклад на українську*/
        btnBig.textContent = "Приєднатися до клану"
        heroText.textContent = "Хоробрий воїне, звертаюсь до тебе! \n Твій дух йде з Ейвою, \n твоє тіло залишається, \n щоб стати частиною Народу. \n Борись разом з нами!"
        btn.textContent = "Увійти"
        blockquoteText.textContent = "“БАГАТО ЛЮДЕЙ З НЕБА ПРИЙДЕ. ВОНИ \n ПРИЙДУТЬ, ЯК ГРОЗА, ЯКА НІКОЛИ НЕ ЗАКІНЧУЄТЬСЯ.”"
        blockquoteAuthor.textContent = "Джейк Саллі"
        btnLarge.textContent = "Дивитися Трейлер"
        engBlockquotetext.textContent = "“ВСЯ ЕНЕРГІЯ ЛИШЕ ЗАПОЗИЧЕНА, ОДНОГО ДНЯ \n ЇЇ ДОВЕДЕТЬСЯ ПОВЕРНУТИ.”"
        enbBlockquotetext.textContent = "Джейк Саллі"
        navItems[0].textContent = "Головна"
        navItems[1].textContent = "Про нас"
        navItems[2].textContent = "Контакти"
        langBlockquotetext.textContent = '“НАША ВЕЛИКА МАТИ НЕ СТАЄ НА ЯКУСЬ СТОРОНУ, \n ВОНА ЗАХИЩАЄ ЛИШЕ ЖИТТЄВИЙ БАЛАНС.”'
        langItemtitle[0].textContent = "Привіт"
        langItemtitle[1].textContent = "Як справи?"
        langItemtitle[2].textContent = "Все добре"
        langItemtitle[3].textContent = "Дякую"
        langItemtitle[4].textContent = "Я бачу тебе"
        langItemtitle[5].textContent = "Слідуй за мною!"

        /* Переклад на українську*/
    }
    else{
         /* Переклад на англійську*/
        btnBig.textContent = "Join Clan" 
        heroText.textContent = "I'm speaking with the warrior! \n Your spirit goes with Eywa, \n your body stays behind to \n becom \n part of the People. \n Fight with us!"
        btn.textContent = "Log In"
        blockquoteText.textContent = '“A LOT OF PEOPLE FROM THE SKY ARE GONNA COME. THEY’RE \n GONNA COME LIKE A RAIN THAT NEVER ENDS.”'
        btnLarge.textContent = "WATCH TRAILER"
        blockquoteAuthor.textContent = "JAKE SULLY"
        engBlockquotetext.textContent = '“ALL ENERGY IS ONLY BORROWED, AND ONE DAY \n  YOU HAVE TO GIVE IT BACK.”'
        navItems[0].textContent = "Main"
        navItems[1].textContent = "About us"
        navItems[2].textContent = "Contacts"
        langBlockquotetext.textContent = '“OUR GREAT MOTHER DOES NOT TAKE SIDES, \n SHE PROTECTS ONLY THE BALANCE OF LIFE.”'
        langItemtitle[0].textContent = "Hello"
        langItemtitle[1].textContent = "How Are You?"
        langItemtitle[2].textContent = "I'm Well"
        langItemtitle[3].textContent = "Thank you"
        langItemtitle[4].textContent = "I See You"
        langItemtitle[5].textContent = "Follow me!"
         /* Переклад на англійську*/
    }
    
}

