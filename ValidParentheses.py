# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.
 

# Example 1:

# Input: s = "()"

# Output: true

# Example 2:

# Input: s = "()[]{}"

# Output: true

# Example 3:

# Input: s = "(]"

# Output: false

# Example 4:

# Input: s = "([])"

# Output: true

# Approach:
    # Using a stack and hash map
    # Hash map store closing parenthese as a key and open parathenese as a value
    # initialize a stack
    # loop through the string
    # Whenever we encounter a open  parentheses push it into the stack
    # when we encounter a closing parenthese. We pop the parenthese at the top of out stack

    