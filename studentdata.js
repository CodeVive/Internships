const form = document.getElementById("certificateForm");
const resultDiv = document.getElementById("result");

// Set default certificate ID from the URL query parameter
document.addEventListener("DOMContentLoaded", function () {
  const certificateIdInput = document.getElementById("certificateId");

  // Get the certificate ID from the URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const defaultCertificateId = urlParams.get('certificateId') || "ivcw20241550";

  // Set the certificate ID in the input field
  certificateIdInput.value = defaultCertificateId;
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  resultDiv.innerHTML = "";
  const certificateId = form.elements.certificateId.value;

  // Verify the certificate here using else if
  if (certificateId === "ivwd20241549") {
    const studentData = {
      "Student Name": "MD Akram",
      "Domain": "Web Development",
      "Duration": "8 weeks",
      "Certification No": "ivwd20241549",
      "Starting Date": "05/Jan/2024",
      "Award Date": "01/Mar/2024"
    };
    displayStudentData(studentData);
  } else if (certificateId === "ivcw20241550") {
    const studentData = {
      "Student Name": "Uttam Kumar",
      "Domain": "Content Writing",
      "Duration": "8 weeks",
      "Certification No": "ivcw20241550",
      "Starting Date": "01/Jan/2024",
      "Award Date": "29/Feb/2024"
    };
    displayStudentData(studentData);
  } else if (certificateId === "") {
    // Add data for another certificate ID
  } else {
    resultDiv.innerHTML = "<p>Invalid Certificate ID</p>";
  }
});

function displayStudentData(studentData) {
  const table = document.createElement("table");
  for (const [key, value] of Object.entries(studentData)) {
    const row = table.insertRow();
    const cell = row.insertCell(0);
    cell.textContent = `${key}: ${value}`;
  }
  resultDiv.appendChild(table);
}