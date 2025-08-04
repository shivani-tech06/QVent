import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function RegisterQR() {
    const location = useLocation();
    const { eventId } = location.state || {}; // Get event ID

    const [formData, setFormData] = useState({
        username: '',
        mobileNo: '',
        name: ''
    });

    const [qrImage, setQrImage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!eventId) {
                alert("Event ID is missing.");
                return;
            }

            // Combine formData with event ID
            const combinedData = {
                ...formData,
                eventId: eventId
            };

            console.log("Submitting Data:", combinedData);

            // Send registration data
            await axios.post('http://localhost:8080/QR/QRData', combinedData);
            console.log("QR Data sent successfully");

            // Generate QR code
            const response = await axios.post(
                'http://localhost:8080/QR/generate',
                {
                    url: 'http://localhost:8080/Data/response',
                    ...combinedData
                },
                { responseType: 'blob' } // Expect binary data (image)
            );

            const imageUrl = URL.createObjectURL(response.data);
            console.log("QR Image URL:", imageUrl);
            setQrImage(imageUrl);

        } catch (error) {
            console.error('Error generating QR code:', error);
            alert('Failed to generate QR code. Check console for details.');
        }
    };

    const handleDownload = () => {
        if (qrImage) {
            const link = document.createElement('a');
            link.href = qrImage;
            link.download = 'qr-code.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '50px',
            backgroundColor: '#121212',
            height: '100vh',
            color: '#ffffff'
        }}>
            <h1 style={{
                color: '#f0f3f4',
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
            }}>Event Registration Form</h1>

            <form
                onSubmit={handleSubmit}
                style={{
                    width: '350px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    border: '2px solid rgb(13, 35, 58)',
                    borderRadius: '10px',
                    padding: '20px',
                    backgroundColor: '#1e1e1e',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)'
                }}
            >
                <label style={{ color: '#f4f6f7', fontWeight: 'bold' }}>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                        style={{
                            width: '100%',
                            padding: '8px',
                            margin: '5px 0',
                            borderRadius: '5px',
                            border: '1px solid rgb(42, 123, 208)',
                            backgroundColor: '#2c2c2c',
                            color: '#ffffff'
                        }}
                    />
                </label>

                <label style={{ color: '#f4f6f7', fontWeight: 'bold' }}>
                    Phone Number:
                    <input
                        type="text"
                        name="mobileNo"
                        value={formData.mobileNo}
                        onChange={handleInputChange}
                        required
                        style={{
                            width: '100%',
                            padding: '8px',
                            margin: '5px 0',
                            borderRadius: '5px',
                            border: '1px solid rgb(42, 123, 208)',
                            backgroundColor: '#2c2c2c',
                            color: '#ffffff'
                        }}
                    />
                </label>

                <label style={{ color: '#f4f6f7', fontWeight: 'bold' }}>
                    Full Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        style={{
                            width: '100%',
                            padding: '8px',
                            margin: '5px 0',
                            borderRadius: '5px',
                            border: '1px solid rgb(42, 123, 208)',
                            backgroundColor: '#2c2c2c',
                            color: '#ffffff'
                        }}
                    />
                </label>

                <button
                    type="submit"
                    style={{
                        padding: '10px',
                        backgroundColor: '#1f618d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#117a65'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#1f618d'}
                >
                    Register
                </button>
            </form>

            {qrImage && (
                <div style={{ marginTop: '20px' }}>
                    <h4 style={{ color: 'white' }}>Your QR Code:</h4>
                    <img src={qrImage} alt="QR Code" style={{ border: '2px solid rgb(13, 35, 58)', borderRadius: '10px' }} />
                    <br />
                    <button
                        onClick={handleDownload}
                        style={{
                            marginTop: '10px',
                            padding: '10px',
                            backgroundColor: 'rgb(13, 35, 58)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        Download QR Code
                    </button>
                </div>
            )}
        </div>
    );
}

export default RegisterQR;
