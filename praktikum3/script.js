// Bagian A: tabel perkalian dengan for
function buatTabelPerkalian(n) {
    let isi = "<tr><th>Operasi</th><th>Hasil</th></tr>";
    for (let i = 1; i <= 10; i++) {
        const hasil = n * i;
        const kelas = hasil % 2 === 0 ? "genap" : "";
        isi += `<tr class="${kelas}"><td>${n} x ${i}</td><td>${hasil}</td></tr>`;
    }
    document.getElementById("tabelKali").innerHTML = isi;
}

document.getElementById("buat").addEventListener("click", function () {
    buatTabelPerkalian(Number(document.getElementById("angka").value));
})
buatTabelPerkalian(7); // Tampilan Awal

// Bagian B: Array of object dengan for...of
const mataKuliah = [
    {kode: "IF201", nama: "Pemerograman Web", sks: 3},
    {kode: "IF202", nama: "Basis Data", sks: 3},
    {kode: "IF203", nama: "Sistem Operasi", sks: 3},
    {kode: "IF204", nama: "Statistika", sks: 2},
    // Tambahan Mata kuliah
    {kode: "IF205", nama: "Etika Profesi", sks: 2},
    {kode: "IF206", nama: "Interaksi Manusia dan Komputer", sks: 2}

];

let baris = "<tr><th>No</th><th>Kode</th><th>Mata Kuliah</th><th>SKS</th></tr>";
let total = 0;
let no = 1;

for (const mk of mataKuliah) {
    baris += `<tr><td>${no}</td><td>${mk.kode}</td>
    <td>${mk.nama}</td><td>${mk.sks}</td></tr>`;
    total += mk.sks;
    no++;
}

document.getElementById("tabelMK").innerHTML = baris;
document.getElementById("totalSks").textContent = `Total SKS: ${total}`;