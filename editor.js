const express = require('express');
const open = require('open');
const fs = require('fs');
const app = express();
const port = 2999;

app.use(express.json());
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/EDITOR.html');
});

function removeWhitespace(l) {
  let beginning = 0;
  for (let i = 0; i < l.length; i++) {
    if (l[i] != ' ') {
      beginning = i;
      break;
    }
  }
  return l.substring(beginning);
}

app.get('/projects/get', (req, res) => {
  const output = fs.readdirSync(__dirname + '/src/components/pages/projects', {withFileTypes: true}).filter(item => !item.isDirectory()).map(item => item.name).filter(item => item.indexOf(".js") != -1);
  res.send(output);
});
app.get('/projects/get/:project', (req, res) => {
  fs.readFile(__dirname + "/src/components/pages/projects/" + req.params.project + ".js", (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      const output = data.toString();
      res.send(output.substring(output.indexOf('id = "BEGINREADHERE"') + 21, output.length - 79).split('\n').map(removeWhitespace));
    }
  });
});
app.post('/projects/edit/:project', (req, res) => {
  let input = `import React from 'react';\nimport '../../../App.css';\nimport '../Project.css';\nimport HeroComp from '../../HeroComp';\nimport Footer from '../../Footer';\nimport HomePageLogo from '../../HomePageLogo';\nfunction BigHeader(props) {\nreturn (<div className="p-4 text-dark rounded-3 bigHeader"><h1 className = "mb-0">{props.text}</h1></div>)\n}\nfunction SmallHeader(props) {\nreturn (<><br /><br /><p className = "smallHeader"><u>{props.text}</u></p></>)\n}\nfunction ImageComp(props) {\nreturn (<div className = "imageComp my-5 d-flex justify-content-center w-100"><img className = "mx-auto" src = {"images/" + props.src} /></div>)\n}\nexport default ` + req.body.title + `Page;\nfunction ` + req.body.title + `Page() {\nreturn (\n<>\n<HeroComp name = "` + req.body.name + `" />\n<HomePageLogo />\n<div className="projectBanner" style={{background: 'rgb(82,97,147'}}>\n<div className="container" id = "BEGINREADHERE">\n`;
  input += req.body.data.join("\n");
  input += `\n</div>\n</div>\n<Footer />\n</>\n);\n};`;
  fs.writeFile(__dirname + "/src/components/pages/projects/" + req.body.title + ".js", input, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).end();
    }
  });
});

app.listen(port, async () => {
  await open('http://localhost:2999/EDITOR.html');
});