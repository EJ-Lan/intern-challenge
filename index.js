const isPal = (s) => {

    // Function to check if the character is alphanumeric with unicode values
    const isAlphaNumeric = (c) => ((c.toLowerCase() >= 'a' && c.toLowerCase() <= 'z') || (c >= '0' && c <= '9'));

    // Two pointer approach
    let left = 0;
    let right = s.length - 1;

    // While the two pointers do not equal eachother
    while (left < right) {

        // If not alphanumeric then skip to next char
        if (!isAlphaNumeric(s.charAt(left))) {
            left++;
            continue;
        }

        // If not alphanumeric then skip to next char
        if (!isAlphaNumeric(s.charAt(right))) {
            right--;
            continue;
        }

        // If the chars at left and right pointers are not equal at the current pointers then not palindrome
        if (s.charAt(left).toLowerCase() !== s.charAt(right).toLowerCase()) {
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

const str1 = "RaceCar";
const str2 = "Hello";
const str3 = "Do geese see God?";

isPal(str1);
isPal(str2);
isPal(str3);