import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const WifiQRCodeGenerator = () => {
    const ssid = "Glamping";
    const password = "domyslonca";
    const security = 'WPA'; // Zmienić na inny typ zabezpieczeń, jeśli jest inny

    // Formatowanie danych konfiguracyjnych Wi-Fi w formie URI
    const wifiConfig = `WIFI:S:${ssid};T:${security};P:${password};;`;

    const handleDownloadQRCode = () => {
        const qrCodeElement = document.getElementById('qr-code');
        if (qrCodeElement) {
        html2canvas(qrCodeElement)
            .then(function (canvas) {
            canvas.toBlob(function (blob) {
                saveAs(blob, 'wifi_qr_code.png');
            });
            });
        }
    };

    return (
        <div>
            {/* Komponent QRCode przyjmuje jako props tekst, który ma zostać umieszczony w kodzie QR */}
            <QRCode value={wifiConfig} id="qr-code" />

            {/* Dodaj przycisk do pobrania kodu QR */}
            <button onClick={handleDownloadQRCode}>Pobierz kod QR</button>
        </div>
    )
}

export default WifiQRCodeGenerator;