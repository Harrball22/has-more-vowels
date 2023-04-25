function moreVowels(string){
    let vowelPositivity = 0
    string = string.toLowerCase()
    for (i = 0; i !== string.length; i++){
        switch (string[i]){ // we could also make all the characters uppercase so we don't have to check as many cases
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                vowelPositivity++
                break
            case " ":
                break
            default:
                vowelPositivity--
        }
    }
    console.log(string, vowelPositivity)
    return vowelPositivity > 0
}

moreVowels("cat")
console.log(moreVowels("alphabet"))
console.log(moreVowels("noodle"))
console.log(moreVowels("ant eater"))
console.log(moreVowels("eat"))
console.log(moreVowels("Aal"))
