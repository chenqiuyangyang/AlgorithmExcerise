class ArrayStack<T> {
    private _array: T[]
    constructor() {
      this._array = []
    }
  
    push(...elements: T[]): void {
      this._array.push(...elements)
    }
  
    pop(): T {
      return this._array.pop()
    }
  
    peek(): T {
      let len = this._array.length
      return this._array[len - 1]
    }
  
    isEmpty(): boolean {
      return this._array.length <= 0
    }
  
    clear(): void {
      this._array.length = 0
    }
  
    size(): number {
      return this._array.length
    }
  }

  class Queue<T> {
    private _array: T[]
    constructor() {
      this._array = [];
    }
    enqueue(...elements: T[]): void{
      this._array.push(...elements);
    }
    dequeue(): T {
      return this._array.shift();
    }
    front(): T {
      return this._array[0];
    }
    isEmpty(): boolean {
      return this._array.length == 0;
    }
    clear(): void {
        this._array.length = 0
      }
    size(): number {
      return this._array.length;
    }

  }
  
//十进制转二进制  decimal变量名和变量类型
  const decimalToBinary = (decimal: number): string => {
    const stack = new Stack<string>()
    let n: number = decimal
    let binaryStr: string = ''
    while (n > 0) {
      stack.push((n % 2) + '')
      n = Math.floor(n / 2)
    }
    while (!stack.isEmpty()) {
      binaryStr += stack.pop()
    }
    return binaryStr
  }
  

//   interface Map<K, V> {
//     hasKey(key: K): boolean;
//     set?(key: K, value: V): boolean;
//     put?(key: K, value: V): boolean;
//     hashCode?(key: K): number;
//     remove(key: K): boolean;
//     get(key: K): V|undefined;
//     keyValues(): ValuePair<K, V>[];
//     keys(): K[];
//     values(): V[];
//     forEach(callbackFn: (key: K, value: V) => any): void;
//     size(): number;
//     isEmpty(): boolean;
//     clear():void;
//     toString():string;
// }
// class Dictionary<K, V> implements Map<K, V> {