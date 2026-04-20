# # T=int(input())
# # for _ in range(T):
# #     s=input().strip() 
# #     n=len(s)
# #     if n%2==0:
# #         lef2t=s[:n//2]
# #         right=s[n//2:]
# #     else:
# #         left=s[:n//2]
# #         right=s[n//2+1:]
# #     if sorted(left)==sorted(right):
# #         print("YES")
# #     else:
# #         print("NO") 

# class OrderedStream:

#     def __init__(self, n: int):
#         self.stream = [None] * (n + 1)  # 1-based indexing
#         self.ptr = 1

#     def insert(self, idKey: int, value: str):
#         self.stream[idKey] = value
#         result = []

#         # Collect consecutive values starting from ptr
#         while self.ptr < len(self.stream) and self.stream[self.ptr] is not None:
#             result.append(self.stream[self.ptr])
#             self.ptr += 1
#         return result
    
# os=OrderedStream(5)
# print(os.insert(2,"bbbbb"))
# print(os.insert(1,"aaaaa"))
# print(os.insert(3,"ccccc"))
# print(os.insert(5,"eeeee"))
# print(os.insert(4,"ddddd"))         


n=int(input())
def fibonacci(n):
    fib=[]
    a,b=0,1
    for i in range(n):
        fib.append(a)
        a, b=b, a+b
    return fib

fib_list=fibonacci(n)
result=list(map(lambda x:x**3,fib_list))
print(result)