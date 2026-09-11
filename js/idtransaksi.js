/* =========================================================
   TRANSACTION ID
========================================================= */

function generateTransactionId() {

    const data = new Uint8Array(16);

    crypto.getRandomValues(data);

    // UUID v4
    data[6] = (data[6] & 0x0f) | 0x40;
    data[8] = (data[8] & 0x3f) | 0x80;

    const hex = [...data].map(
        byte => byte.toString(16).padStart(2, "0")
    );

    return (
        hex[0] + hex[1] + hex[2] + hex[3] + "-" +
        hex[4] + hex[5] + "-" +
        hex[6] + hex[7] + "-" +
        hex[8] + hex[9] + "-" +
        hex[10] + hex[11] +
        hex[12] + hex[13] +
        hex[14] + hex[15]
    );
}


let transactionId = "";


/* Generate ID baru */
function generateNewId() {

    transactionId = generateTransactionId();

    const element =
        document.getElementById("idTransaksi");

    element.textContent = transactionId;

    element.classList.remove("pop");

    // Trigger animation
    void element.offsetWidth;

    element.classList.add("pop");

    showStatus("✨ ID transaksi baru berhasil dibuat!");
}


/* =========================================================
   COPY ID
========================================================= */

async function copyId() {

    if (!transactionId) {
        showStatus(
            "⚠️ ID transaksi belum tersedia."
        );

        return;
    }

    try {

        await navigator.clipboard.writeText(
            transactionId
        );

        const button =
            document.getElementById("copyButton");

        const original =
            button.innerHTML;

        button.innerHTML =
            "✅ <span>Tersalin!</span>";

        showStatus(
            "📋 ID transaksi berhasil disalin!"
        );

        setTimeout(() => {

            button.innerHTML = original;

        }, 2000);

    } catch (error) {

        // Fallback untuk browser tertentu
        const textarea =
            document.createElement("textarea");

        textarea.value = transactionId;

        document.body.appendChild(textarea);

        textarea.select();

        document.execCommand("copy");

        textarea.remove();

        showStatus(
            "📋 ID transaksi berhasil disalin!"
        );
    }
}


/* =========================================================
   STATUS
========================================================= */

let statusTimer;

function showStatus(message) {

    const toast =
        document.getElementById("status");

    const icon =
        document.getElementById("statusIcon");

    const text =
        document.getElementById("statusText");


    clearTimeout(statusTimer);


    // Masukkan pesan
    text.textContent = message;


    // Tentukan icon berdasarkan pesan
    if (message.includes("⚠️")) {

        icon.textContent = "!";
        icon.style.background = "#f59e0b";

    } else if (message.includes("❌")) {

        icon.textContent = "×";
        icon.style.background = "#ef4444";

    } else {

        icon.textContent = "✓";
        icon.style.background = "#10b981";

    }


    // Tampilkan toast
    toast.classList.add("show");


    // Sembunyikan setelah 2.5 detik
    statusTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}



/* =========================================================
   RANDOM CODE
========================================================= */

let kodeSekarang = "";


/* Generate kode 7 digit */
function generateKode() {

    return Math.floor(
        1000000 +
        Math.random() * 9000000
    ).toString();

}


/* Generate kode baru */
function refreshKode() {

    const element =
        document.getElementById("kode");

    element.style.opacity = "0";
    element.style.transform = "scale(0.8)";

    setTimeout(() => {

        kodeSekarang = generateKode();

        element.textContent = kodeSekarang;

        element.style.opacity = "1";
        element.style.transform = "scale(1)";

        showStatus("✨ Kode baru berhasil dibuat!");

    }, 150);

}


/* Copy kode */
async function copyKode() {

    if (!kodeSekarang) {

        showStatus(
            "⚠️ Kode belum tersedia."
        );

        return;

    }


    try {

        await navigator.clipboard.writeText(
            kodeSekarang
        );


        const button =
            document.getElementById(
                "copyKodeButton"
            );


        const original =
            button.innerHTML;


        button.innerHTML =
            "✅ <span>Tersalin!</span>";


        showStatus(
            "📋 Kode berhasil disalin!"
        );


        setTimeout(() => {

            button.innerHTML = original;

        }, 2000);


    } catch (error) {

        // Fallback browser
        const textarea =
            document.createElement("textarea");

        textarea.value = kodeSekarang;

        document.body.appendChild(textarea);

        textarea.select();

        document.execCommand("copy");

        textarea.remove();


        showStatus(
            "📋 Kode berhasil disalin!"
        );

    }

}



/* =========================================================
   INITIALIZE
========================================================= */

generateNewId();

refreshKode();
