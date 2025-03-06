//your JS code here. If required.
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Promises and Chains</title>
</head>
<body>
  <form id="userForm">
    <label for="name">Name:</label>
    <input type="text" id="name" placeholder="Enter your name">

    <label for="age">Age:</label>
    <input type="number" id="age" placeholder="Enter your age">

    <button type="submit" id="btn">Submit</button>
  </form>

  <script>
    document.getElementById("userForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const age = parseInt(document.getElementById("age").value.trim(), 10);

      if (!name || isNaN(age)) {
        alert("Please enter valid details.");
        return;
      }

      const ageCheck = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000);
      });

      ageCheck
        .then(message => alert(message))
        .catch(error => alert(error));
    });