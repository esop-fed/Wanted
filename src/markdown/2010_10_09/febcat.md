# diff算法概述
### 1.传统的diff算法为何是n^3
有新旧两个节点beforeNode, afterNode
+ 取新旧两个节点的最大长度来遍 历对比(**for循环n^2**)
```javascript
let result = []; // 记录节点需要进行的操作
const diffNodes = function (beforeNode, afterNode) {
    // 获取较大节点树的长度
    let count = Math.max(beforeNode.children.length, afterNode.children.length);
    // 循环遍历进行新旧每个节点的对比(n^2)
    for (let i = 0; i < count; i++) {
        const beforeTag = beforeNode.children[i];
        const afterTag = afterNode.children[i];
         ...
    }
    return result;
}
```
- 分析情况做出相应操作
1. 第一种情况
```javascript
if (beforeTag === undefined) {
      result.push({ type: "add", el: afterTag }); // 旧的位置没有
}
```
2. 第二种情况
```javascript
if (afterTag === undefined) {
      result.push({ type: "remove", el: beforeTag }); // 旧的位置没有
}
```
3. 第三种情况
```javascript
if (beforeTag.tagName !== afterTag.tagName) {
      // 节点名改变时，删除 beforeTag 节点，添加 afterTag 节点
      result.push({ type: "remove", element: beforeTag });
      result.push({ type: "add", element: afterTag });
}
```
1. 第一种情况
```javascript
if (beforeTag === undefined) {
      result.push({ type: "add", el: afterTag }); // 旧的位置没有
}
```
2. 第二种情况
```javascript
if (afterTag === undefined) {
      result.push({ type: "remove", el: beforeTag }); // 旧的位置没有
}
```
3. 第三种情况
```javascript
if (beforeTag.tagName !== afterTag.tagName) {
      // 节点名改变时，删除 beforeTag 节点，添加 afterTag 节点
      result.push({ type: "remove", element: beforeTag });
      result.push({ type: "add", element: afterTag });
}1. 第一种情况
```javascript
if (beforeTag === undefined) {
      result.push({ type: "add", el: afterTag }); // 旧的位置没有
}
```
2. 第二种情况
```javascript
if (afterTag === undefined) {
      result.push({ type: "remove", el: beforeTag }); // 旧的位置没有
}
```
3. 第三种情况
```javascript
if (beforeTag.tagName !== afterTag.tagName) {
      // 节点名改变时，删除 beforeTag 节点，添加 afterTag 节点
      result.push({ type: "remove", element: beforeTag });
      result.push({ type: "add", element: afterTag });
}





