# def fn(x):
#     result = [0,0]
#     print(l)
#     for i in range(len(l)):
#         print(l[i].lower()),l[i].upper()
#         if l[i] == l[i].lower():
#             result[0] += 1
#         elif l[i] == l[i].upper():
#             result[1] += 1
#     return tuple(result)

# print(fn('ABcdeFn'))l
import pickle

stus = {'1':'88','2':'99','3':'100'}
with open('成绩表.txt','wr') in stus:
    pickle.dump(len(stus),stus)
    for i in stus.items():
        pickle.dump(i,)
