function darkMode(){
    document.documentElement.classList.toggle("dark")
}

{
    // M-1
    let kun = 9
    let javob =""
    switch (kun) {
        case 0:
            javob ="Yakshanba"
            break;
        case 1:
            javob ="Dushanba"
            break;
        case 2:
            javob ="Seyshanba"
            break;
        case 3:
            javob ="Chorshanba"
            break;
        case 4:
            javob ="Payshanba"
            break;
        case 5:
            javob ="Juma"
            break;
        case 6:
            javob ="Shanba"
            break;
        default:
            javob ="Unaqa kun yok"
            break;
    }
    console.log(javob);
    
}
{
    // M-2
    let baho = 3
    let javob =""
    switch (baho) {
        case 1:
            javob ="Yomon"
            break;
        case 2:
            javob ="Qoniqarsiz"
            break;
        case 3:
            javob ="Qonqarli"
            break;
        case 4:
            javob ="Yahshi"
            break;
        case 5:
            javob ="A'lo"
            break;
        default:
            javob ="Unaqa baho yok"
            break;
    }
    console.log(javob);
    
}

{
    // M-3
    let kun = 1
    let javob =""
    switch (kun) {
        case 1:
            case 2:
                case 12:
            javob ="Winter"

            break;
        case 3:
            case 4:
                case 5:
            javob ="Spring"

            break;
        case 6:
            case 7:
                case 8:
            javob ="Summer"

            break;
        case 9:
            case 10:
                case 11:
            javob ="Auttumn"

            break;
        default:
            javob ="Unaqa fasil yok"
            break;
    }
    console.log(javob);
    
}
{
    // M-4
    let kun = 2
    let javob =""
    switch (kun) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            javob ="31 kun"

            break;
        case 2:
            javob ="28 kun"

            break;
        case 4:
        case 6:
        case 9:
        case 11:
            javob ="30 kun"

            break;
        default:
            javob ="Unaqa oylar yok"
            break;
    }
    console.log(javob);
    
}

{
    // M-5
    const a = 10, b = 5, operation = 3;
    let op =""
    switch (operation) {
    case 1:
        console.log(a + b);
        op ="сложение"
        break;
    case 2:
        console.log(a - b);
        op ="вычитание"
        break;
    case 3:
        console.log(a * b);
        op ="умножение"
        break;
    case 4:
        if (b !== 0) {
            console.log(a / b);
            op ="деление"
        } else {
            console.log("hattolik: bollu nolga");
        }
        break;
    default:
        console.log("Hattolik yuz berdi");
}
    console.log(op);

}


{
    // M-6
    const uzun = 5, value = 800;
    switch (uzun) {
        case 1:
            console.log(value * 0.1);
            break;
        case 2:
            console.log(value * 1000);
            break;
        case 3:
            console.log(value * 1);
            break;
        case 4:
            console.log(value * 0.001);
            break;
        case 5:
            console.log(value * 0.01);
            break;
        default:
            console.log("Hatollik: Notogri .");
    }
}


{
    // M-7
    const massa = 4, value = 2;
    switch (massa) {
        case 1:
            console.log(value * 1);
            break;
        case 2:
            console.log(value * 0.000001);
            break;
        case 3:
            console.log(value * 0.001);
            break;
        case 4:
            console.log(value * 1000);
            break;
        case 5:
            console.log(value * 100);
            break;
        default:
            console.log("Hatollik: Notogri.");
    }
}