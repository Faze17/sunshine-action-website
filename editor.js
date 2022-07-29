const express = require('express');
const open = require('open');
const fs = require('fs');
const app = express();
const port = 2999;
const { spawn } = require('child_process');
let preview = spawn('react-scripts', ['start']);
let kill = require('tree-kill');

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

let projectPageInfo;

fs.readFile(__dirname + "/src/components/pages/ProjectPages.js", (err, data) => {
  if (err) {
    console.log("Error while reading project info");
    process.exit();
  }
  let output = data.toString();
  output = output.replace("\n", "");
  projectPageInfo = JSON.parse(output.substring(output.indexOf("//PROJECTPAGEINFO") + 18 + 24, output.length));
  app.listen(port, async () => {
    await open('http://localhost:2999/EDITOR.html');
  });
});

function updateProjectPageInfo() {
  let output = ["", "\nexport {\nprojectPageInfo,\n"];
  for (let p in projectPageInfo) {
    output[0] += 'import ' + p + ' from "./projects/' + projectPageInfo[p][0] + '.js"\n';
    output[1] += p + ",\n";
  }
  output[1] = output[1].substring(0, output[1].length - 2);
  output = output[0] + output[1] + "\n}\n\n//PROJECTPAGEINFO\nconst projectPageInfo = " + JSON.stringify(projectPageInfo);
  fs.writeFile(__dirname + "/src/components/pages/ProjectPages.js", output, (err, data) => {
  });
}

app.get('/projects/get', (req, res) => {
  res.send(Object.keys(projectPageInfo).map(k => projectPageInfo[k][0]));
});
app.get('/projects/get/:project', (req, res) => {
  fs.readFile(__dirname + "/src/components/pages/projects/" + req.params.project + ".js", (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      const output = data.toString();
      res.send({ title: projectPageInfo[req.params.project + "Page"][1], cat: projectPageInfo[req.params.project + "Page"][2], img: projectPageInfo[req.params.project + "Page"][3], output: output.substring(output.indexOf('id = "BEGINREADHERE"') + 21, output.length - 35).split('\n').map(removeWhitespace)});
    }
  });
});
app.post('/projects/edit/:project', (req, res) => {
  let input = `//DO NOT EDIT DIRECTLY, USE THE PROJECT PAGES EDITOR\nimport React from 'react';\nimport '../../../App.css';\nimport '../Project.css';\nimport HeroComp from '../../HeroComp';\nimport Footer from '../../Footer';\nimport HomePageLogo from '../../HomePageLogo';\nfunction BigHeader(props) {\nreturn (<div className="p-4 text-dark rounded-3 bigHeader"><h1 className = "mb-0">{props.text}</h1></div>)\n}\nfunction SmallHeader(props) {\nreturn (<><br /><br /><p className = "smallHeader"><u>{props.text}</u></p></>)\n}\nfunction ImageComp(props) {\nreturn (<div className = "imageComp my-5 d-flex justify-content-center w-100"><img className = "mx-auto" src = {"images/" + props.src} /></div>)\n}\nexport default ` + req.body.name + `Page;\nfunction ` + req.body.name + `Page() {\nreturn (\n<>\n<HeroComp name = "` + req.body.title + `" />\n<HomePageLogo />\n<div className="projectBanner" style={{background: 'rgb(82,97,147'}}>\n<div className="container" id = "BEGINREADHERE">\n`;
  input += req.body.data.join("\n");
  input += `\n</div>\n</div>\n<Footer />\n</>\n);\n};`;
  fs.writeFile(__dirname + "/src/components/pages/projects/" + req.body.name + ".js", input, (err, data) => {
    const pageCat = typeof projectPageInfo[req.body.name + "Page"] != "undefined" ? projectPageInfo[req.body.name + "Page"][2] : 0;
    projectPageInfo[req.body.name + "Page"] = [req.body.name, req.body.title, Number(req.body.cat), req.body.img];
    if (err) {
      res.status(500).send(err);
    } else {
      if (req.body.name != req.params.project) {
        delete projectPageInfo[req.params.project + "Page"];
        fs.unlink(__dirname + "/src/components/pages/projects/" + req.params.project + ".js", (err) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).end();
          }
        });
      } else {
        res.status(200).end();
      }
      updateProjectPageInfo();
    }
  });
});
app.delete('/projects/delete/:project', (req, res) => {
  delete projectPageInfo[req.params.project + "Page"];
  updateProjectPageInfo();
  fs.unlink(__dirname + "/src/components/pages/projects/" + req.params.project + ".js", (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).end();
    }
  });
});
app.get('/exit', (req, res) => {
  res.status(200).end();
  kill(preview.pid);
  setTimeout(() => { process.exit() }, 100);
});