document.addEventListener("DOMContentLoaded", function () {
    // Select all player name elements (adjust selector as needed)
    let playerNames = document.querySelectorAll(".player-name");

    playerNames.forEach(nameElement => {
        let fullName = nameElement.textContent.trim();
        
        // Split the name into first and last parts
        let nameParts = fullName.split(" ");

        if (nameParts.length >= 2) {
            let firstName = nameParts[0]; 
            let lastName = nameParts.slice(1).join(" "); // Keep the full last name

            // Shorten first name to first initial
            let shortenedFirstName = firstName.charAt(0) + ".";

            // Update the name display
            nameElement.textContent = `${shortenedFirstName} ${lastName}`;
        }
    });
});

