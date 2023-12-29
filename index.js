const btn = document.getElementById("btn")

btn.addEventListener("click", duplicateElf)

function duplicateElf(){
  /** Challenge:
    - Write a function to duplicate the elf when the button is clicked.
    - See index.css for optional styling challenges.
  **/
  const elfHangoutZone = document.querySelector(".elf-hangout-zone");
  const elfEmojis = Array.from(elfHangoutZone.querySelectorAll(".elf"));

  // Check for total elf limit
  if (elfEmojis.length >= 100) {
    alert("The elf population has reached its maximum capacity!");
    return;
  }

  // Calculate column index for placement
  const columnIndex = elfEmojis.length % 6;
  const rowIndex = Math.floor(elfEmojis.length / 6);

  // Check for row limit and create a new row if needed
  if (columnIndex === 0) {
    const newRow = document.createElement("div");
    // Insert the elf in the appropriate direction
    const newElf = document.createElement("div");
    newElf.classList.add("elf");
    newElf.textContent = "🧝";
    newRow.appendChild(newElf); // Append to the end of the row
    elfHangoutZone.appendChild(newRow); // Append the new row immediately
  } else {
    const newRow = elfEmojis[elfEmojis.length - 1].parentNode; // Use existing row if not full
    // Insert the elf in the appropriate direction
    const newElf = document.createElement("div");
    newElf.classList.add("elf");
    newElf.textContent = "🧝";
    newRow.appendChild(newElf); // Append to the end of the row
  }
}

/** Stretch goals:
  - Write a function to give the elves some tools, or a cup of tea!
  - Limit the total number of elves to 100.
**/
