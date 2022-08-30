const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const open = require('open');
const admin = require('firebase-admin');
const serviceAccount = require("./cred/sunshine-action-app-firebase-adminsdk-xh1q3-d0bbe4041c.json");
const { readyException } = require('jquery');
const app = express();
const port = 3001;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "sunshine-action-app.appspot.com"
});

const db = admin.firestore();
const bucket = admin.storage().bucket();
const multerMid = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 20 * 1024 * 1024
    }
});

app.use(express.json());
app.use(express.static('./public'));
app.use(multerMid.single('image'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/refresh', (req, res) => {
    db.collection("accounts").get().then(aqs => {
        aqs.forEach(ad => {
            accounts[ad.id] = ad.data();
        });
        db.collection("events").get().then(eqs => {
            eqs.forEach(ed => {
                events[ed.id] = ed.data();
            });
            db.collection("feeds").get().then(fqs => {
                fqs.forEach(fd => {
                    feeds[fd.id] = fd.data();
                });
                res.send(200).end();
            });
        });
    });
});
app.post('/stop', (req, res) => {
    res.status(200).end();
    setTimeout(() => { process.exit() }, 100);
});

app.get('/events', (req, res) => {
    res.status(200).send(events);
});
app.get('/users', (req, res) => {
    res.status(200).send(accounts);
});
app.get('/posts', (req, res) => {
    res.status(200).send(feeds);
});

app.post('/event/create', (req, res) => {
    let ref = db.collection("events").doc();
    events[ref.id] = { ...req.body, id: ref.id, registered: [], extra: {}, image: false };
    ref.set(events[ref.id]).then(() => {
        res.status(200).send(ref.id);
    }).catch((err) => {
        res.status(500).send(err);
    });
});
app.post('/event/:id', (req, res) => {
    Object.assign(events[req.params.id], req.body);
    db.collection("events").doc(req.params.id).update(events[req.params.id]).then(() => {
        res.status(200).end();
    }).catch((err) => {
        res.status(500).send(err);
    });
});
app.post('/event/:id/image', (req, res) => {
    let ext = "";
    function uploadImage(file) {
        return new Promise((resolve, reject) => {
            const { originalname, buffer } = file;
            const blob = bucket.file('events/' + req.params.id + originalname.substring(originalname.lastIndexOf(".")));
            ext = originalname.substring(originalname.lastIndexOf(".") + 1);
            const blobStream = blob.createWriteStream({ resumable: false });
            blobStream.on("finish", () => {
                resolve();
            }).on("error", () => {
                reject();
            }).end(buffer);
        });
    }
    uploadImage(req.file).then(() => {
        db.collection("events").doc(req.params.id).update({ image: ext }).then(() => {
            events[req.params.id].image = ext;
            res.status(200).end();
        }).catch((err) => {
            res.status(500).send(err);
        });
    }).catch(() => {
        res.status(500).end();
    });
});
app.post('/posts/create', (req, res) => {
    const id = req.body.time.toString();
    let ref = db.collection("feeds").doc("hk").collection("posts").doc(id);
    feeds[id] = { ...req.body, image: false };
    ref.set(feeds[id]).then(() => {
        res.status(200).end();
    }).catch((err) => {
        res.status(500).send(err);
    });
});
app.post('/posts/:id', (req, res) => {
    Object.assign(feeds[req.params.id], req.body);
    db.collection("feeds").doc("hk").collection("posts").doc(req.params.id).update(feeds[req.params.id]).then(() => {
        res.status(200).end();
    }).catch((err) => {
        res.status(500).send(err);
    });
});
app.post('/posts/:id/image', (req, res) => {
    let ext = "";
    function uploadImage(file) {
        return new Promise((resolve, reject) => {
            const { originalname, buffer } = file;
            const blob = bucket.file('posts/' + req.params.id + originalname.substring(originalname.lastIndexOf(".")));
            ext = originalname.substring(originalname.lastIndexOf(".") + 1);
            const blobStream = blob.createWriteStream({ resumable: false });
            blobStream.on("finish", () => {
                resolve();
            }).on("error", () => {
                reject();
            }).end(buffer);
        });
    }
    uploadImage(req.file).then(() => {
        db.collection("feeds").doc("hk").collection("posts").doc(req.params.id).update({ image: ext }).then(() => {
            feeds[req.params.id].image = ext;
            res.status(200).end();
        }).catch((err) => {
            res.status(500).send(err);
        });
    }).catch(() => {
        res.status(500).end();
    });
});

app.delete('/event/:id', (req, res) => {
    const removeRegistration = [];
    events[req.params.id].registered.forEach(u => {
        accounts[u].registered.splice(accounts[u].registered.indexOf(req.params.id));
        removeRegistration.push(db.collection("accounts").doc(u).update({ registered: admin.firestore.FieldValue.arrayRemove(req.params.id) }));
    });
    Promise.all(removeRegistration).then(() => {
        db.collection("events").doc(req.params.id).delete().then(() => {
            if (events[req.params.id].image) {
                bucket.file("events/" + req.params.id + "." + events[req.params.id].image).delete((err) => {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        delete events[req.params.id];
                        res.status(200).end();
                    }
                });
            } else {
                delete events[req.params.id];
                res.status(200).end();
            }
        }).catch((err) => {
            res.status(500).send(err);
        });
    }).catch((err) => {
        res.status(500).send(err);
    });
});
app.delete('/event/:id/image', (req, res) => {
    if (!events[req.params.id].image) {
        res.status(200).end();
    } else {
        bucket.file("events/" + req.params.id + "." + events[req.params.id].image).delete((err) => {
            if (err) {
                res.status(500).send(err);
            } else {
                db.collection("events").doc(req.params.id).update({ image: false }).then(() => {
                    events[req.params.id].image = false;
                    res.status(200).end();
                }).catch((err) => {
                    res.status(500).send(err);
                });
            }
        });
    }
});
app.delete('/posts/:id', (req, res) => {
    db.collection("feeds").doc("hk").collection("posts").doc(req.params.id).delete().then(() => {
        if (feeds[req.params.id].image) {
            bucket.file("posts/" + req.params.id + "." + feeds[req.params.id].image).delete((err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    delete feeds[req.params.id];
                    res.status(200).end();
                }
            });
        } else {
            delete feeds[req.params.id];
            res.status(200).end();
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
});
app.delete('/posts/:id/image', (req, res) => {
    if (!feeds[req.params.id].image) {
        res.status(200).end();
    } else {
        bucket.file("posts/" + req.params.id + "." + feeds[req.params.id].image).delete((err) => {
            if (err) {
                res.status(500).send(err);
            } else {
                db.collection("feeds").doc("hk").collection("posts").doc(req.params.id).update({ image: false }).then(() => {
                    feeds[req.params.id].image = false;
                    res.status(200).end();
                }).catch((err) => {
                    res.status(500).send(err);
                });
            }
        });
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/ADMIN.html');
});

app.get('/exit', (req, res) => {
    res.status(200).end();
    setTimeout(() => { process.exit() }, 100);
});

const events = {};
const accounts = {};
const feeds = {};

db.collection("accounts").get().then(aqs => {
    aqs.forEach(ad => {
        accounts[ad.id] = ad.data();
    });
    db.collection("events").get().then(eqs => {
        eqs.forEach(ed => {
            events[ed.id] = ed.data();
        });
        db.collection("feeds").doc("hk").collection("posts").get().then(fqs => {
            fqs.forEach(fd => {
                feeds[fd.id] = fd.data();
            });
            app.listen(port, async () => {
                await open('http://localhost:3001/admin.html');
            });
        });
    });
});