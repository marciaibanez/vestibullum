Chart.defaults.global.legend.display = false;
Chart.defaults.global.tooltips.enabled = false;

const chartConfig = [{
        id: 'chart1',
        blueValue: 50,
        redValue: 50
    },
    {
        id: 'chart2',
        blueValue: 70,
        redValue: 30
    },
    {
        id: 'chart3',
        blueValue: 80,
        redValue: 20
    },
    {
        id: 'chart4',
        blueValue: 100,
        redValue: 0
    }
];

chartConfig.forEach((config, i) => {
    new Chart(document.getElementById(config.id).getContext("2d"), {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [
                    config.blueValue,
                    config.redValue
                ],
                backgroundColor: [
                    '#e8665c',
                    '#6ab3ac'
                ],
                hoverBackgroundColor: [
                    '#e8665c',
                    '#6ab3ac'
                ],
                borderWidth: [0, 0]
            }],
        },
        options: {
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            cutoutPercentage: 70,
            title: false,
            animation: {
                animateRotate: true
            }
        }
    });
});

const portfolioButton = document.getElementById("portfolio");
const portfolioMenu = document.getElementById("portfolioMenu");
const dropdownMenuArrow = document.getElementById("dropdownMenuArrow");
const burgerMenu = document.getElementById("burgerMenu");
const nav = document.getElementById("nav");
const allButHeader = document.querySelectorAll("body > *:not(header)");
const wallopEl = document.querySelector('.Wallop');

const slider = new Wallop(wallopEl);

let isBurgerMenuOpened = false;
burgerMenu.addEventListener("click", () => {
    if (!isBurgerMenuOpened) {
        nav.style.display = 'block';
        isBurgerMenuOpened = true;
    } else {
        nav.style.display = 'none';
        isBurgerMenuOpened = false;
    }
});

let isMenuOpened = false;
portfolioButton.addEventListener("click", () => {
    if (!isMenuOpened) {
        portfolioMenu.style.display = 'block';
        dropdownMenuArrow.style.display = 'block';
        isMenuOpened = true;
    } else {
        portfolioMenu.style.display = 'none';
        dropdownMenuArrow.style.display = 'none';
        isMenuOpened = false;
    }
});

allButHeader.forEach((el, i) => {
    el.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 39.9375em)").matches) {
            portfolioMenu.style.display = 'none';
            dropdownMenuArrow.style.display = 'none';
            isMenuOpened = false;
            nav.style.display = 'none';
            isBurgerMenuOpened = false;
        }
    });
});

window.addEventListener('resize', function (event) {
    if (window.matchMedia("(min-width: 40em)").matches) {
        nav.style.display = 'flex';
        isBurgerMenuOpened = true;
    } else {
        nav.style.display = 'none';
        isBurgerMenuOpened = false;
    }
});