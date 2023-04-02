class dic<K, V> {
    // 定义两个数组，来装对应的键集合或者值集合
    private keys: K[] = [];
    private vals: V[] = [];
  
   
    set(key: K, val: V) {
      // 判断键集合中是否存在，存在则直接来改
      const index = this.keys.indexOf(key);
      if (index >= 0) {
        // 存在直接修改
        this.vals[index] = val;
      } else {
        // 不存在，直接添加
        this.keys.push(key);
        this.vals.push(val);
      }
    }
   
    del(key: K): Boolean {
      const index = this.keys.indexOf(key);
      if (index < 0) {
        // 不存在，直接抛出错误，说该键不存在
        throw new Error('this key is not exist');
      } else {
        // 存在，直接删除
        this.keys.splice(index, 1);
        this.vals.splice(index, 1);
        return true;
      }
    }
    
    has(key: K): Boolean {
      return this.keys.includes(key);
    }
    
    get size(): Number {
      return this.keys.length;
    }
  
  
    clear() {
      this.keys = [];
      this.vals = [];
    }
}

  
const dics = new dic<string, number>();

dics.set('a', 11);
dics.set('b', 22);
dics.set('a', 33);
dics.set('c', 43);
dics.del('c');

console.log(dics.has('c'));
console.log(dics.has('a'));

console.log('获取键的数量：', dics.size);

dics.clear();
console.log('清除后键值对的长度', dics.size);

// https://www.tslang.cn/play/index.html