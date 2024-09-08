document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateButton');
    const textInput = document.getElementById('textInput');
    const qrcodeContainer = document.getElementById('qrcode');

    // Função para gerar o QR Code
    function generateQRCode(text) {
        // Limpar o container do QR Code antes de gerar um novo
        qrcodeContainer.innerHTML = '';

        // Gerar o QR Code
        new QRCode(qrcodeContainer, {
            text: text,
            width: 128,
            height: 128,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }

    // Evento de clique no botão para gerar QR Code
    generateButton.addEventListener('click', function() {
        const text = textInput.value;
        if (text.trim() !== '') {
            generateQRCode(text);
        } else {
            alert('Por favor, insira um texto ou URL.');
        }
    });
});
