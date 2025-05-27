let numbers = [];

        // Get 10 numbers from the user
        for (let i = 0; i < 10; i++) {
            let input = prompt("Enter number " + (i + 1) + ":");
            let num = parseInt(input);

            if (!isNaN(num)) {
                numbers.push(num);
            } else {
                alert("Invalid input. Please enter a number.");
                i--; // repeat this loop iteration
            }
        }

        // Bubble Sort function
        function bubbleSort(arr) {
            let n = arr.length;
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - 1 - i; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            return arr;
        }

        let sortedNumbers = bubbleSort(numbers);

        // Display the result
        document.getElementById("result").innerText = "Sorted Numbers: " + sortedNumbers.join(", ");
 
