import inquirer from 'inquirer';

const isPal = (s) => {
    // Function to check if the character is alphanumeric with unicode values
    const isAlphaNumeric = (c) => ((c.toLowerCase() >= 'a' && c.toLowerCase() <= 'z') || (c >= '0' && c <= '9'));

    // Two pointer approach
    let left = 0;
    let right = s.input.length - 1;

    // While the two pointers do not equal eachother
    while (left < right) {

        // If not alphanumeric then skip to next char
        if (!isAlphaNumeric(s.input.charAt(left))) {
            left++;
            continue;
        }

        // If not alphanumeric then skip to next char
        if (!isAlphaNumeric(s.input.charAt(right))) {
            right--;
            continue; 
        }

        // If the chars at left and right pointers are not equal at the current pointers then not palindrome
        if (s.input.charAt(left).toLowerCase() !== s.input.charAt(right).toLowerCase()) {
            console.log("Is not Pal!");
            return false;
        }

        // If both equal and are alphanumeric the pointers move close to the middle
        left++;
        right--;
    }

    // If succesfully come out of the while loop then the string is a palindrome
    console.log("Is Pal!");
    return true;
}

const checkPal = async () => {
    const input = await inquirer.prompt([
        {
            type: 'input',
            name: 'input',
            message: 'Enter any string to check if it is a palindrome'
        }
    ]);
    isPal(input);
}

checkPal()