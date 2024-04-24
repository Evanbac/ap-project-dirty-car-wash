function determineCarCleanliness (num: number, list: Image[]) {
    mycar = list[num - 1]
    mycar1 = sprites.create(mycar, SpriteKind.Projectile)
    mycar1.setPosition(80, 60)
    mycar1.setScale(4, ScaleAnchor.Middle)
    pause(1000)
    if (num == 1) {
        game.splash("this car is ", listcardirtyness[num - 1])
        checkPayment(num)
    } else if (num == 2) {
        game.splash("This car is ", listcardirtyness[num - 1])
        checkPayment(num)
    } else if (num == 3) {
        game.splash("this car is ", listcardirtyness[num - 1])
        checkPayment(num)
    }
}
function levelUpCarWash () {
    info.player2.changeScoreBy(1)
    info.changeScoreBy(0 - washlevel)
    washlevel += 50
}
function randomCar (list: any[]) {
    while (running == true) {
        if (info.score() >= washlevel) {
            levelUpCarWash()
            effects.confetti.startScreenEffect(500)
            game.splash("your car wash has leveled up, now save up to level up again!")
        }
        random = randint(1, 3)
        if (random == 1) {
            determineCarCleanliness(1, list)
        } else if (random == 2) {
            determineCarCleanliness(2, list)
        } else if (random == 3) {
            determineCarCleanliness(3, list)
        }
    }
}
function checkPayment (num: number) {
    howmuchuthinkugonnapay = game.askForNumber("how much are you charging for this wash?")
    listofmoneypayments = [10, 20, 0]
    mon = listofmoneypayments[num - 1]
    if (howmuchuthinkugonnapay == mon) {
        info.changeScoreBy(mon)
        game.splash("you made $", mon)
        effects.bubbles.startScreenEffect()
        pause(1000)
    } else {
        game.splash("you didnt do payments correct, and the till is off. You are fired.")
        running = false
    }
}
let mon = 0
let listofmoneypayments: number[] = []
let howmuchuthinkugonnapay = 0
let random = 0
let mycar1: Sprite = null
let mycar: Image = null
let washlevel = 0
let running = false
let listcardirtyness: string[] = []
let listcarimages = [img`
    . . . . . . . e e e e e . . . . 
    . . . . . e e 2 2 2 2 2 e . . . 
    . . . . e e 2 2 2 2 2 2 2 e . . 
    . . . . e 9 4 2 2 2 2 d d b e . 
    . . e e 9 9 4 4 2 2 d d 4 9 b e 
    . e 2 2 9 9 4 4 4 d 2 d d 9 9 e 
    e d d 2 9 9 2 4 d d 4 4 2 d d e 
    e d d 2 9 9 e d e e d e e 9 9 e 
    e d d 2 9 d e d b b e d e b 9 e 
    e d d e e d d b b b e b d d d e 
    e d d 3 e d 2 2 2 2 e 2 2 d d e 
    d 3 3 d e d e e e e e e e e d e 
    e e e e d e e e e e e e e e e e 
    e e e e d f f e e e e f f f e e 
    . e e f b c c f e e f b c c f . 
    . . . . b b f . . . . b b f . . 
    `, img`
    . . . . . . . . . . . . . d . . 
    . . . . . . 6 6 6 6 6 6 d d d . 
    . . . . . 6 c 6 6 6 6 d d 9 d . 
    . . . . 6 c c d d d 6 d 6 9 d 6 
    . . d d d d d 6 9 9 d d 9 9 c d 
    . d 6 d d d b 8 8 d 8 8 d 8 6 d 
    . 6 6 d d d 8 8 b d b 8 d b 8 d 
    . 6 d 6 d 6 8 b d b b 8 d b b 8 
    . 6 d 6 6 d 6 6 d 6 6 8 d 6 6 8 
    . 6 d d 6 d f 8 d 8 f 8 d d 8 8 
    . d d 6 8 d 8 d 8 8 f 8 d d 8 8 
    . 8 d 8 8 d 8 d f f f 8 8 d d 8 
    . 8 d 8 8 d d f 8 8 8 8 f d d f 
    . . . 8 f f d f f 8 8 f f f f f 
    . . . . f f d f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 c 3 3 3 3 3 3 d 3 . 
    . . . . 3 c c 3 3 3 3 3 3 d c 3 
    . . d 3 d c c 3 d d d d d d c c 
    . d 3 3 d c b a a a a a a a 3 c 
    . 3 3 3 d b a a b b b a b b a 3 
    . 3 3 3 3 3 a b b b b a b b b a 
    . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
    . 3 d d 3 a f a a a f a a a a a 
    . d d 3 a a a f a a f a a a a a 
    . a a a a a a a f f f a a a a a 
    . a a a a f f f a a a a f f f f 
    . . . a f f f f f a a f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `]
listcardirtyness = ["slightly dirty", "dirty", "clean"]
running = true
info.setScore(0)
info.player2.setScore(1)
washlevel = 100
randomCar(listcarimages)
game.gameOver(false)
