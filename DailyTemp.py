# Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

# Example 1:

# Input: temperatures = [73,74,75,71,69,72,76,73]
# Output: [1,1,4,2,1,1,0,0]
# Example 2:

# Input: temperatures = [30,40,50,60]
# Output: [1,1,1,0]
# Example 3:

# Input: temperatures = [30,60,90]
# Output: [1,1,0]

# initial approach was to using monotonic dereasing stack to keep track
# of indices where we have not found a warmer day yet
# loop through the temps array
# at each index we check :
    # if the temperature at current index is greater than 
    # temperature of the index at the top of the stack if yes:
    # we go in to our while loop and pop that index out and calculate the day
    # then we push the day differences to our answer array at the popped index
    # if not we append the index to our stack 
    # return answer after for loop is done this is o(n) time complexity because we loop through temp array



def dailyTemperatures(temps):
    #* first we initialize a stack
    stack = []
    answer  = [0] * len(temps)
    for i in range(len(temps)):
        while stack and temps[stack[-1]]  < temps[i]: #!Always remember to compare top of the stack temperature(not the index) to the temp at current index
            print(stack)
            pop_index  = stack.pop()
            answer[pop_index] = i - pop_index
        stack.append(i)
        #* append the current index to the stack
    return answer       
        
        
# test = [73,74,75,71,69,72,76,73]# Output: [1,1,4,2,1,1,0,0]
# print(dailyTemperatures(test))

