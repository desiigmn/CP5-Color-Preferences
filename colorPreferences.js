function colors() {
    let favColors = [];

    for (let i = 0; i < 3; i++) {
        let colors = prompt("Enter your favorite colors.");
        favColors.push(colors);
        alert(favColors)
    }
}