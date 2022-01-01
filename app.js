const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}


async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('purple', 1000)
    await delayedColorChange('grey', 1000)
    await delayedColorChange('orange', 1000)
    return "ALL DONE"

}
rainbow().then(()=> console.log("End of Rainbow"))

async function printRainbow() {
    await rainbow();
    console.log("End of Rainbow")
}