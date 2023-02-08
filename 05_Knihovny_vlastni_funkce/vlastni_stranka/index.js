// 2. Mimozemsky zivot

const now = dayjs();

const inaugurace = dayjs('2023-03-09');

const elem = document.querySelector('#msg');

if (now.isAfter(inaugurace)) {
    elem.innerHTML = "ANO, KONECNE!";
} else {
    elem.innerHTML = "Ne, porad tam je loutka Zeman";
}