export async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }

}
// Get the form element and add a submit event listener
// const emailForm = document.getElementById("contactForm");

// export function sendMail() {
//     emailForm.addEventListener("submit", function (e) {
//         e.preventDefault(); // prevent the default form submission

//         // Create a FormData object with the form data
//         var formData = new FormData(this);

//         // Use the Fetch API to send the request to the PHP script
//         fetch("/mailer.php", {
//             method: "POST", // the HTTP method to use
//             body: formData, // the FormData object to send
//         })
//             .then(function (response) {
//                 // handle the response from the PHP script
//                 if (!response.ok) {
//                     // if the response status is not OK, throw an error
//                     throw new Error(response.statusText);
//                 }
//                 return response.text(); // otherwise, return the response text
//             })
//             .then(function (data) {
//                 // handle the data from the response text
//                 console.log(data); // for debugging purposes
//                 alert("Email sent successfully!"); // for example
//             })
//             .catch(function (error) {
//                 // handle the error from the Fetch API or the PHP script
//                 console.error(error); // for debugging purposes
//                 alert("Email failed to send!"); // for example
//             });
//     });
// }

