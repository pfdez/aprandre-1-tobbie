input.onButtonPressed(Button.A, function () {
    conpteur += 1
    basic.showNumber(conpteur)
    comtteur_de_rotasion = 0
    while (comtteur_de_rotasion < conpteur) {
        TobbieII.rightward()
        basic.pause(500)
        TobbieII.stopturn()
        comtteur_de_rotasion += 1
    }
})
let comtteur_de_rotasion = 0
let conpteur = 0
conpteur = 0
basic.showNumber(conpteur)
