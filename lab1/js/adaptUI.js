window.addEventListener('resize', setNavPadding);

function linearInterpolation(windowSize, sizeWindow, list) {
    let padding;
    let m;
    let b;

    m = (list[1] - list[0]) / (sizeWindow[1] - sizeWindow[0]);
    b = list[0] - m * sizeWindow[0];
    padding = Math.round(m * windowSize + b);
    return padding;
}

function setNavPadding() {
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const header_td = document.querySelectorAll('.head_table td');
    const contact_table = document.querySelectorAll('.contact_table td')
    const profile_png = document.querySelector('.profile')
    const screenWidth = window.innerWidth;
     
    const sizeWindow = [768, 1800];
    const bodyMarginBySize = [94, 72];
    const paddingBySize = [26, 18];
    const profileByHeight = [260, 200];
    const fontHeaderBySize = [28, 24];
    const fontContactBySize = [24, 20];

    let count;

    count = linearInterpolation(screenWidth, sizeWindow, bodyMarginBySize);
    body.style.marginTop = `${count}px`;
    console.log("body: " + count);

    count = linearInterpolation(screenWidth, sizeWindow, paddingBySize);
    header.style.padding = `${count}px`;
    console.log("header: " + count);

    count = linearInterpolation(screenWidth, sizeWindow, profileByHeight);
    profile_png.style.width = `${count * 3 / 4}px`;
    profile_png.style.height = `${count}px`;
    console.log("profile png: " + count);

    count = linearInterpolation(screenWidth, sizeWindow, fontHeaderBySize);
    header_td.forEach(td => {
        td.style.fontSize = `${count}px`;
    });
    console.log("header_td: " + count);

    count = linearInterpolation(screenWidth, sizeWindow, fontContactBySize);
    contact_table.forEach(td => {
        td.style.fontSize = `${count}px`
    })
    console.log("contact_table: " + count);
}

setNavPadding();
