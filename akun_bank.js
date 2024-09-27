let saldo = 0;

function updateSaldo() {
    document.getElementById("saldo").textContent = saldo.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}

function tambahSaldo() {
    let input = window.prompt("Masukkan jumlah saldo yang ingin ditambahkan:");
    let jumlah = parseFloat(input);
    if (!isNaN(jumlah) && jumlah > 0) {
        saldo += jumlah;
        updateSaldo();
        window.alert("Saldo baru Anda adalah: " + saldo);
    } else {
        window.alert("Harap Masukkan Angka Positif Saya Ya Maniez");
    }
}

function kurangiSaldo() {
    let input = window.prompt("Masukkan jumlah saldo yang ingin dikurangi:");
    let jumlah = parseFloat(input);
    if (!isNaN(jumlah) && jumlah > 0) {
        if (saldo >= jumlah) {
            saldo -= jumlah;
            window.alert("Saldo baru Anda adalah: " + saldo);
            updateSaldo();
        } else {
            window.alert("Saldo tidak cukup.");
        }
    } else {
        window.alert("Harap Masukkan Angka Positif Saya Ya Maniez");
        
    } 
}
