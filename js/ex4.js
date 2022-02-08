let words = []

while (true) {
    const input = prompt('Enter a word')

    if (input.toLowerCase() === 'stop') break
    words.push(input)
}

if (words.length > 0) {
    console.log("You entered the following words:")
    for (let i = 0; i < words.length; i++) {
        console.log(words[i])
    }
} else {
    console.log('No words to display, Stop was the first word entered')
}
