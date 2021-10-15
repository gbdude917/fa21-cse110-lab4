Part 2
1. It will print i, which is 3 since var is global-scoped.
2. discountedPrice, which is 150, will be displayed since it is a var.
3. finalPrice, which is 150, will be displayed since it is a var.
4. The function returns the discounted array.
5. Line 12 will produce an error since i only exists within the for loop.
6. The same thing will happen to line 13.
7. finalPrice, which is 150, will be printed since the variable exists within that block.
8. The function will return the value in discounted which is [50, 100, 150];
9. Line 11 will not work since i only exists within the for loop.
10. Line 12 will output the length of the array prices; in this case, it will output 3.
11. This will output the array [50, 100, 150].
12. (A) student.name, (B) student['Grad Year'], (C) student.greeting(), (D) student['Favorite Teacher'].name, (E) student.courseLoad[0]
13. (A) '32' since the first operator is a string, it concatenates '3' and 2 together to form '32'. (B) 1 because you cannot subtract strings. So, JavaScript turns everything into numbers and we get 1. (C) 3 since adding null is essentially adding nothing. (D) '3null' because the first operator is a string, it concatenates the two operators. (E) 4 because true is equal to 1 numerically, and adding that to 3 gives us 4. (F) 0 because false is numerically equivalent to 0 and adding that to null gives us 0. (G) '3undefined' because adding something to a string in JavaScript is concatenation. (H) NaN since subtaction makes the first string into a number and performs normal subtraction. However, undefined is transformed into NaN, thus giving that output.
14. (A) true since '2' is converted to a number. (B) false because the two strings are compared lexicographical order, and '2' > '1'. (C) true since '2' is converted to integer. (D) false since they are two different types. (E) false since true is equal to 1 and is not equal to 2. (F) true since the Boolean() creates a value true when it isn't empty.
15. '==' does type conversion then compares the two values. Whereas '===' keeps the types as they are and compares the two values.
16. Answer in part2-question6.js file
17. The result is [2, 4, 6]. This is because when we passed in the function doSomething into callback variable, and we call it every time we want to add a new element into the output array.
18. In part2-question18.js file
19. The output is:
1
4
3
2

This occurs this way because 1 is executed immediately. 4 is next since 3 is slightly delayed. 3 is next since setTimeout will print out 3 after the function call reaches the end. 2 is last since it is delayed the most.