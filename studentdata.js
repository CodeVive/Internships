const form = document.getElementById("certificateForm");
const resultDiv = document.getElementById("result");

// Set default certificate ID from the URL query parameter
document.addEventListener("DOMContentLoaded", function () {
  const certificateIdInput = document.getElementById("certificateId");

  // Get the certificate ID from the URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const defaultCertificateId = urlParams.get('certificateId') || "";

  // Set the certificate ID in the input field
  certificateIdInput.value = defaultCertificateId;
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  resultDiv.innerHTML = "";
  const certificateId = form.elements.certificateId.value;

  // Verify the certificate here using else if
  if (certificateId === "IVWD2024011543") {
    const studentData = {
      "Student Name": "MD Akram",
      "Domain": "Web Development",
      "Duration": "8 weeks",
      "Certification No": "IVWD2024011543",
      "Starting Date": "01/Jan/2024",
      "Award Date": "29/Feb/2024"
    };
    displayStudentData(studentData);
  } 
  
  else if (certificateId === "IVWD2023021219") {
    const studentData = {
      "Student Name": "Ajeet Kumar",
      "Domain": "Web Development",
      "Duration": "6 weeks",
      "Certification No": "IVWD2023021219",
      "Starting Date": "10/Feb/2023",
      "Award Date": "25/Mar/2023"
    };
    displayStudentData(studentData);
  } 
  else if (certificateId === "IVWD2023021218") {
    const studentData = {
      "Student Name": "Ajay Kumar",
      "Domain": "Web Development",
      "Duration": "6 weeks",
      "Certification No": "IVWD2023021218",
      "Starting Date": "10/Feb/2023",
      "Award Date": "25/Mar/2023"
    };
    displayStudentData(studentData);
  } 
  else if (certificateId === "IVWD2023021221") {
    const studentData = {
      "Student Name": "Sonu Singh",
      "Domain": "Web Development",
      "Duration": "4 weeks",
      "Certification No": "IVWD2023021221",
      "Starting Date": "10/Feb/2023",
      "Award Date": "10/Mar/2023"
    };
    displayStudentData(studentData);
  } 
  
  else if (certificateId === "IVWD2023021220") {
    const studentData = {
      "Student Name": "Rahul Kumar",
      "Domain": "Web Development",
      "Duration": "6 weeks",
      "Certification No": "IVWD2023021220",
      "Starting Date": "10/Feb/2023",
      "Award Date": "25/Mar/2023"
    };
    displayStudentData(studentData);
  } 
  
  
  
  
  
  
  
  
  
  
  
  else {
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
