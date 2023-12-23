// pagination
let link = document.getElementsByClassName("link");
let currentValue = 1;

function activeLink() {
    for(l of link){
        l.classList.remove("active");
    }
    event.target.classList.add("active");
    currentValue = event.target.value;
}

function prevBtn() {
    if(currentValue > 1) {
        for(l of link) {
            l.classList.remove("active");
        }
        currentValue--;
        link[currentvalue - 1].classList.add("active");
    }
}

function nextBtn() {
    if(currentValue < 3) {
        for(l of link) {
            l.classList.remove("active");
        }
        currentValue++;
        link[currentvalue - 1].classList.add("active");
    }
}


// filtering
let field = document.querySelector('.card-container');
let li = Array.from(field.children);
let select = document.getElementById('select');
let ar = [];

for(let i of li) {
    const last = i.lastElementChild;
    const x = last.textContent.trim();
    const y = Number(x.substring(1));
    i.setAttribute('data-date', y);
    ar.push(i);
}

function sortValue() {
    if(this.value === 'default') {
        while(field.firstChild) {
            field.removeChild(field.firstChild);
        }
        field.append(...ar);
    }
    if(this.value === 'newest') {
        sortElem(field, li, true);
    }
    field.append(...ar);
    if(this.value === 'oldest') {
        sortElem(field, li, false)
    }
}

function sortElem(field, li, asc) {
    let dm, sortLi;
    dm = asc ? 1 : -1;
    sortLi = li.sort((a, b) => {
        const ax = a.getAttribute('data-date');
        const bx = b.getAttribute('data-date');

        return ax > bx ? (1*dm) : (-1*dm);
    });
    while(field.firstChild) {
        field.removeChild(field.firstChild);
    }
    field.append(...sortLi);
}
