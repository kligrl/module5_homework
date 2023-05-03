let obj = new Map();
obj.set("key1", "value1");
obj.set(2, "value2");
obj.set(true, "value3");

for (let object of obj.keys()) {
  console.log(`Ключ - ${object}, значение - ${obj.get(object)}`);
}