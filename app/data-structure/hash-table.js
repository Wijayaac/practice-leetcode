// Hash table DS
const hash = (key, size) => {
  let hashedKey = 0;
  for (let i = 0; i < key.length; i++) {
    hashedKey = key.charCodeAt(i);
  }
  return hashedKey % size;
};

class HashTable {
  constructor() {
    this.size = 20;
    this.buckets = Array(this.size);

    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map();
    }
  }
  insert(key, value) {
    let idx = hash(key, this.size);
    this.buckets[idx].set(key, value);
  }
  remove(key) {
    let idx = hash(key, this.size);
    let deleted = this.buckets[idx].get(key);
    this.buckets[idx].delete(key);
    return deleted;
  }
  search(key) {
    let idx = hash(key, this.size);
    return this.buckets[idx].get(key);
  }
}

const hashTable = new HashTable();

hashTable.insert("serena", "moon");
hashTable.insert("amy", "mercury");
hashTable.insert("rei", "mars");
hashTable.insert("mina", "jupiter");
hashTable.insert("lita", "venus");
hashTable.insert("darien", "tuxedo mask");

console.log(hashTable);

console.log(hashTable.search("rei"));
console.log(hashTable.search("lita"));
console.log(hashTable.search("mina"));

console.log(hashTable.remove("darien"));
console.log(hashTable.remove("mina"));

console.log(hashTable);


// Object also considered as Hash Table in JavaScript

const obj = {
  prop1 : "Hello World",
  prop2: () => { console.log('I"m a property of the obj') }
}

console.log(obj.prop1)

console.log(obj['prop1'])

obj.prop2()

obj.prop3 = 125

console.log(obj.prop3)
