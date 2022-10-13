// concat input to string
function catString(cn) {
    var concat = "";
    let d = document.querySelectorAll('.' + cn);
    for (let i = 0; i < d.length; i++) {
        concat += d[i].value;
    }
    return concat;
}

function submitString(concat, tipe, tabel) {
    if (concat.toUpperCase() == "" && tipe == "m1") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "" && tipe == "m1") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "" && tipe == "d2") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "" && tipe == "d3") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "" && tipe == "m2") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "" && tipe == "m3") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "" && tipe == "d4") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "" && tipe == "m4") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "" && tipe == "m5") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "" && tipe == "d5") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "" && tipe == "m6") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "" && tipe == "d6") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "" && tipe == "d7") {
        pengulanganTabel(tabel);
    }
}