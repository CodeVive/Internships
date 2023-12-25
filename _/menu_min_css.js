const form = document.querySelector("form");
const resultDiv = document.querySelector("#result");

// Function to download certificate without showing link in browser
function downloadCertificate(url, fileName) {
  fetch(url, {
    responseType: 'blob'
  })
    .then(response => {
      const blob = new Blob([response.data], {type: 'application/pdf'});
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.setAttribute('style', 'display: none');
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    });
}


form.addEventListener("submit", function (event) {
  event.preventDefault();
  resultDiv.innerHTML = "";
  const certificateId = form.elements.certificateId.value;
  
  // Verify the certificate here
  if (certificateId === "UTS/INT/017/2023") {
    resultDiv.innerHTML = `
      <p>Date of Joining: 10/02/2023</p>
      <p>Name: Md. Arman</p>
      <p>College Name: Government Engineering College Nawada</p>
      <p>Work Role: Content Writing</p>
      <p>Date of Completion: 10/04/2023</p>
      <p>Certificate ID: ${certificateId}</p>
      
    `;
  } else if (certificateId === "UTS/INT/029/2023") {
    resultDiv.innerHTML = `
      <p>Date of Joining: 10/02/2023</p>
      <p>Name: Ritesh Kumar</p>
      <p>College Name: Government Engineering College Nawada</p>
      <p>Work Role: Content Writing</p>
      <p>Date of Completion: 10/04/2023</p>
      <p>Certificate ID: ${certificateId}</p>
      
    `;
  } else if (certificateId === "UTS/INT/043/2023") {
    resultDiv.innerHTML = `
      <p>Date of Joining: 10/02/2023</p>
      <p>Name: Gautam  Kumar</p>
      <p>College Name: Government Engineering College Nawada</p>
      <p>Work Role: Content Writing</p>
      <p>Date of Completion: 10/04/2023</p>
      <p>Certificate ID: ${certificateId}</p>
      
    `;
  } else if (certificateId === "UTS/INT/032/2023") {
    resultDiv.innerHTML = `
      <p>Date of Joining: 10/02/2023</p>
      <p>Name: Sharmishtha Muskan</p>
      <p>College Name: Government Engineering College Nawada</p>
      <p>Work Role: Content Writing</p>
      <p>Date of Completion: 10/04/2023</p>
      <p>Certificate ID: ${certificateId}</p>
      
    `;
  } else {
    resultDiv.innerHTML = "<p>Invalid Certificate</p>";
  }
});

// Add the CSS for the download button
const style = document.createElement("style");
style.innerHTML = `
  .download-button {
    background-color: green;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
  }
`;
document.head.appendChild(style);