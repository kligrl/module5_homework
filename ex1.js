let value = prompt("Введите число");

if (value == null || value == "")
  console.log("Вы ничего не ввели");
else {
  value++;
  if (typeof(value) == "number" && !isNaN(value)) {
    let result = (value - 1) % 2 == 0 ? "Число четное" : "Число нечетное";
    console.log(result);
  }
  else
    console.log("Упс, кажется, вы ошиблись")
}