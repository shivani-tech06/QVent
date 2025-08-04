import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        event: "",
        date: "",
    });
    const [qrValue, setQrValue] = useState("");
    const qrRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.phone && formData.event && formData.date) {
            const data = JSON.stringify(formData);
            setQrValue(data);
        } else {
            alert("Please fill in all fields");
        }
    };

    const handleDownload = () => {
        const canvas = qrRef.current.querySelector("canvas");
        const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        const downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "qrcode.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <div className="p-4 flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 shadow-lg rounded-2xl w-full max-w-md">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                    className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="text"
                    name="event"
                    placeholder="Event Name"
                    onChange={handleChange}
                    className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="date"
                    name="date"
                    onChange={handleChange}
                    className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">Generate QR Code</button>
            </form>

            {qrValue && (
                <div ref={qrRef} className="mt-6 bg-white p-4 shadow-lg rounded-2xl flex flex-col items-center">
                    <h3 className="mb-2 font-semibold">Scan this QR Code:</h3>
                    <QRCodeCanvas value={qrValue} size={200} />
                    <button onClick={handleDownload} className="mt-4 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">Download QR Code</button>
                </div>
            )}
        </div>
    );
}
