// Função para mostrar o pop-up
function mostrarPopup() {
    const valor = document.getElementById('valor-deposito').value;
    if (!valor || valor <= 0) {
        alert('Por favor, insira um valor válido para o depósito.');
        return;
    }

    // Simula a geração de uma chave Pix (você pode integrar com uma API real aqui)
    const chavePix = '123e4567-e89b-12d3-a456-426614174000'; // Exemplo estático
    document.getElementById('chave-pix-text').textContent = chavePix;

    // Mostra o pop-up
    document.getElementById('popup-pix').style.display = 'block';
}

// Função para fechar o pop-up
function fecharPopup() {
    document.getElementById('popup-pix').style.display = 'none';
}

// Função para copiar a chave Pix
function copiarChavePix() {
    const chavePix = document.getElementById('chave-pix-text').textContent;
    navigator.clipboard.writeText(chavePix).then(() => {
        alert('Chave Pix copiada com sucesso!');
    }).catch(err => {
        console.error('Erro ao copiar a chave Pix:', err);
        alert('Erro ao copiar a chave Pix.');
    });
}

// Adiciona evento ao div de depósito
document.querySelector('.deposito').addEventListener('click', mostrarPopup);

// Objeto com os códigos Pix e QR codes correspondentes aos valores
const codigosPix = {
    180: {
        chave: 'pix-180-2025-08-04-123e4567-e89b-12d3-a456-426614174180', // Substitua pelo código Pix real de 180
        qrCode: 'qrcode-180.png' // Substitua pelo caminho da imagem QR code de 180
    },
    280: {
        chave: 'pix-280-2025-08-04-123e4567-e89b-12d3-a456-426614174280', // Substitua pelo código Pix real de 280
        qrCode: 'qrcode-280.png' // Substitua pelo caminho da imagem QR code de 280
    },
    500: {
        chave: 'pix-500-2025-08-04-123e4567-e89b-12d3-a456-426614174500', // Substitua pelo código Pix real de 500
        qrCode: 'qrcode-500.png' // Substitua pelo caminho da imagem QR code de 500
    }
};

// Função para mostrar o pop-up
function mostrarPopup() {
    const valor = parseFloat(document.getElementById('valor-deposito').value);
    
    // Verifica se o valor é válido (180, 280 ou 500)
    if (![180, 280, 500].includes(valor)) {
        alert('Por favor, insira um valor válido para a promoção.');
        return;
    }

    // Obtém o código Pix e QR code correspondentes ao valor
    const pixData = codigosPix[valor];
    document.getElementById('chave-pix-text').textContent = pixData.chave;
    document.getElementById('qr-code-img').src = pixData.qrCode;

    // Mostra o pop-up
    document.getElementById('popup-pix').style.display = 'block';
}

// Função para fechar o pop-up
function fecharPopup() {
    document.getElementById('popup-pix').style.display = 'none';
}

// Função para copiar a chave Pix
function copiarChavePix() {
    const chavePix = document.getElementById('chave-pix-text').textContent;
    navigator.clipboard.writeText(chavePix).then(() => {
        alert('Chave Pix copiada com sucesso!');
    }).catch(err => {
        console.error('Erro ao copiar a chave Pix:', err);
        alert('Erro ao copiar a chave Pix.');
    });
}

// Adiciona evento ao div de depósito
document.querySelector('.deposito').addEventListener('click', mostrarPopup);