const slumptal = Math.floor(Math.random() * 9) + 1
let antalgissningar = 0

slump = Math.random()

function gissaTal() {
    console.log(`slump= ${slumptal}`)
    let textfelt_gissa = document.getElementById("gissa").value
    let gissa_int = Number(textfelt_gissa)
    let vinn = false
    let p_svar = document.getElementById("p_svar")
    if (antalgissningar < 3) {
        if (slumptal === gissa_int) {
            console.log(`Rätt svar`)
            vinn = true
            p_svar.innerHTML = "du vann"
        }
        else {
            console.log(`fel svar`)
            if (antalgissningar === 2) {
                p_svar.innerHTML = "loser"
            }
            else {
                p_svar.innerHTML = `fel svar ${gissa_int}`


            }

            document.getElementById("gissa").value = ""
            document.getElementById("gissa").focus()


        }

        antalgissningar++
    }

    else{
        p_svar.innerHTML="loser"
    }

}
