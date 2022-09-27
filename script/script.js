//функция переключения вкладок на странице с курсами

function hideContent(status) {
    let tabs = document.getElementsByClassName('tabs-btn');
    let courses = document.getElementsByClassName('courses__content');

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.toggle('tabs__active');
        if (tabs[i].classList.contains('tabs__done') && tabs[i].classList.contains('tabs__active')) {
            // console.log(1);
            courses[0].style.display = 'none'
        }
        if (tabs[i].classList.contains('tabs__nodone') && tabs[i].classList.contains('tabs__active')) {
            courses[0].style.display = 'block';
        }

    }
}

//сортировка таблицы
function sortTable(n, tableid) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, tableid, switchcount = 0;
    table = document.getElementById(tableid);
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByTagName("TR");
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

//снятие выделения со всех чекбоксов
function allCheckboxOff() {
    let arrCheckbox = document.getElementsByClassName('custom-checkbox');
    for (let i = 0; i < arrCheckbox.length; i++) {
        arrCheckbox[i].checked = false;
    }
}

//выделение чекбоксов
function allCheckboxChecked(cls) {
    let checbox = document.getElementsByClassName(cls);
    let checkboxArr = document.getElementsByClassName('custom-checkbox');

    if (checbox[0].checked == true) {

        if (checkboxArr.length != 0) {
            for (let i = 0; i < checkboxArr.length; i++) {
                checkboxArr[i].checked = true;
            }
        }
    } else {
        if (checkboxArr.length != 0) {
            for (let i = 0; i < checkboxArr.length; i++) {
                checkboxArr[i].checked = false;
            }
        }
    }
}




//очищение радиобаттонов\чекбоксов в таблице
function clearAllRadio(cls) {
    let radioArr = document.getElementsByClassName(cls);
    for (let item of radioArr) {
        item.checked = false;
    }
}

//показать\скрыть переписку
function showRecomendation(classname) {
    let rec = document.getElementsByClassName(classname);
    if (rec[0].style.display == 'block') {
        rec[0].style.display = 'none';
    } else {
        rec[0].style.display = 'block';
    }
}


