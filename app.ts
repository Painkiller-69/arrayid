let array: number[] = [];

function insertElements(): void {
  const numElementsInput: HTMLInputElement = document.getElementById("numElementsInput") as HTMLInputElement;
  const numElements: number = parseInt(numElementsInput.value);
  array = [];

  for (let i = 1; i <= numElements; i++) {
    const element = prompt(`Enter element ${i}:`);
    array.push(parseInt(element));
  }

  displayArray();
  
  const inputSection: HTMLElement = document.getElementById("inputSection") as HTMLElement;
  const arraySection: HTMLElement = document.getElementById("arraySection") as HTMLElement;
  const numElementsToRemoveInput: HTMLInputElement = document.getElementById("numElementsToRemoveInput") as HTMLInputElement;

  inputSection.style.display = "none";
  arraySection.style.display = "block";
  numElementsToRemoveInput.focus();
}

function removeElements(): void {
  const numElementsToRemoveInput: HTMLInputElement = document.getElementById("numElementsToRemoveInput") as HTMLInputElement;
  const numElementsToRemove: number = parseInt(numElementsToRemoveInput.value);

  for (let i = 1; i <= numElementsToRemove; i++) {
    const elementToRemove = prompt(`Enter element ${i} to remove:`);
    const indices: number[] = [];

    // Find all occurrences of the element and store their indices
    for (let j = 0; j < array.length; j++) {
      if (array[j] === parseInt(elementToRemove)) {
        indices.push(j);
      }
    }

    // Remove the elements in reverse order of their indices
    for (let j = indices.length - 1; j >= 0; j--) {
      array.splice(indices[j], 1);
    }
  }

  displayArray();
}


function displayArray(): void {
  const arrayOutputDiv: HTMLElement = document.getElementById("arrayOutput") as HTMLElement;
  arrayOutputDiv.innerHTML = `Array: ${array.join(", ")}`;
}

window.onload = function () {
  const numElementsInput: HTMLInputElement = document.getElementById("numElementsInput") as HTMLInputElement;

  numElementsInput.focus();

  numElementsInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementsByTagName("button")[0].click();
    }
  });
};