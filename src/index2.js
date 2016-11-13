/* Клиент делает GET запрос с параметром Query: ?fullname в виде Имя Отчество Фамилия (или Имя Фамилия или Фамилия), ваша задача сделать вывести инициалы в таком виде: Фамилия И. О. ( или Фамилия И.).
Результат нужно вывести в виде строки, при неверных входных данных нужно вывести слово Invalid fullname.

Пример 1
?fullname=Steven Paul Jobs
Jobs S. P.
*/

import express from 'express'

import cors from 'cors'

var app = express();
app.use(cors());

app.get('/sistemnik2B', (req, res) => {
  const fio = req.query.fullname || 'Invalid fullname';


  var r = /(\w+)\s(\w+)\s(\w+)/;
  var re = fio.replace(r, "$3 $1 $2");
  var txt = re.split(" ");
  var name1 = txt[1].substr(0,1);
  var name2 = txt[2].substr(0,1);

  const fullname = txt[0] + " " + name1 + ". " + name2 + ".";
  res.send( fullname );
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
