const readline = require('readline');
class SaldoManager {
    constructor() {
        this.saldo = 0;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.updateSaldoDisplay();
    }
    formatRupiah(angka) {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka).replace('IDR', 'Rp').replace(',00', '');
    }
    updateSaldoDisplay() {
        console.log(`Saldo Anda: ${this.formatRupiah(this.saldo)}`);
    }
    askQuestion(query) {
        return new Promise((resolve) => {
            this.rl.question(query, (answer) => {
                resolve(answer);
            });
        });
    }
    async tambahSaldo() {
        const input = await this.askQuestion("Masukkan jumlah saldo yang ingin ditambahkan: ");
        const tambah = parseInt(input, 10);
        if (!isNaN(tambah) && tambah > 0) {
            this.saldo += tambah;
            this.updateSaldoDisplay();
        } else {
            console.log("Masukkan jumlah yang valid.");
        }
    }
    async kurangiSaldo() {
        if (this.saldo === 0) {
            console.log("Saldo Anda sudah 0.");
            return;
        }
        const input = await this.askQuestion("Masukkan jumlah saldo yang ingin dikurangi: ");
        const kurangi = parseInt(input, 10);
        if (!isNaN(kurangi) && kurangi > 0 && kurangi <= this.saldo) {
            this.saldo -= kurangi;
            this.updateSaldoDisplay();
        } else if (kurangi > this.saldo) {
            console.log("Saldo tidak cukup.");
        } else {
            console.log("Masukkan jumlah yang valid.");
        }
    }
    close() {
        this.rl.close();
    }
}
(async () => {
    const saldoManager = new SaldoManager();
    await saldoManager.tambahSaldo();
    await saldoManager.kurangiSaldo();
    saldoManager.close();
})();