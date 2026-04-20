def containsDuplicate(nums):
    seen={}
    for num in nums:
        if num in seen:
            return True
        seen[num]=1
    return False
nums=[1,2,3,4]
print(containsDuplicate(nums))