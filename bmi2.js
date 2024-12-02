document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = parseInt(document.getElementById('weight').value, 10);
    const heightInCm = parseFloat(document.getElementById('height').value);
    const heightInMeters = heightInCm / 100; // Convert cm to meters

    if (isNaN(weight) || weight <= 0 || isNaN(heightInCm) || heightInMeters <= 0) {
        document.getElementById('bmiResult').innerText = "Please enter valid weight and height.";
        return;
    }

    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    document.getElementById('bmiResult').innerText = `Your BMI is ${bmi}`;
});

function generateCertificate() {
    const userName = prompt("Please enter your name:");
    if (!userName) {
        document.getElementById('certificateMessage').innerText = "Name is required to generate a certificate.";
        return;
    }

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0'); // Pad with leading zero if needed
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`; // Format as DD/MM/YYYY
    
    document.getElementById('userNameDisplay').innerText = userName;
    document.getElementById('dateDisplay').innerText = formattedDate;
    document.getElementById('certificateSection').style.display = 'block';
    document.getElementById('certificateMessage').innerText = ""; // Clear previous messages
}


function downloadCertificate() {
    const certificateContent = document.getElementById('certificateContent').innerHTML;
    const blob = new Blob([certificateContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Certificate_of_Completion.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Clean up
}

function downloadCertificate() {
    const certificateContent = `
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    text-align: center;
                }
                #certificateContent {
                    border: 2px solid #4CAF50;
                    padding: 20px;
                    position: relative;
                    height: 450px;
                }
                #certificateContent img {
                    width: 100px;
                    height: auto;
                    margin-bottom: 20px;
                }
                #certificateContent h2 {
                    color: #4CAF50;
                }
                #certificateContent p {
                    margin: 10px 0;
                }
                hr {
                    border: none;
                    border-top: 1px solid #4CAF50;
                    margin: 20px 0;
                }
            </style>
        </head>
        <body>
            <div id="certificateContent">
                <img src="https://yt3.googleusercontent.com/d-B-ZBPsz6oE8Wmyhg_GSg1HzyWL1qhCmo1yr2ppaANowk1AxpJINkBv8IPY0wp7VSlL1jz2oA=s900-c-k-c0x00ffffff-no-rj" alt="Fitness Freak Logo">
                <h3>Congratulations, ${document.getElementById('userNameDisplay').innerText}!</h3>
                <p>This certifies that you have successfully completed the</p>
                <h2 style="color: #4CAF50;">Fitness Freak Program</h2>
                <p>Date: ${document.getElementById('dateDisplay').innerText}</p>
                <hr>
                <p style="font-weight: bold;">Issued by Prashant Bhardwaj</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkN86io-G_a0L7NiC3t44LoTUDStgAnIooBQ&s" alt="Digital Signature">
            </div>
        </body>
        </html>
    `;
    const blob = new Blob([certificateContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Certificate_of_Completion.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Clean up
}


