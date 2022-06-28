const express = require("express");
const app = express();
const port = 3003;
const cors = require("cors");

app.use(cors());

const mysql = require("mysql");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "rocky_db", //susikurtos database pavadinimas is phpMyAdmin
});

//Routes, 'kelias'
app.get("/", (req, res) => {
  res.send("Good, World!");
});

app.get("/zuikis", (req, res) => {
  res.send("Labas, Zuiki");
});

// Read metodas get
app.get("/medziai", (req, res) => {
  const sql = ` 
    SELECT
    t.title AS title, g.title AS good, height, type, t.id
    FROM trees AS t
    LEFT JOIN goods AS g
    ON t.good_id = g.id
  `;
  con.query(sql, (err, result) => {
    if (err) throw err;

    res.send(result);
  });
});

app.get("/front/medziai", (req, res) => {
  const sql = ` 
    SELECT
    t.title AS title, g.title AS good, height, type, t.id, GROUP_CONCAT(c.comm, '-^o^-') AS comms
    FROM trees AS t
    LEFT JOIN goods AS g
    ON t.good_id = g.id
    LEFT JOIN comments AS c
    ON c.tree_id = t.id
    GROUP BY t.id 
  `;
  con.query(sql, (err, result) => {
    if (err) throw err;

    res.send(result);
  });
});

//create metodas yra post su url ir duomenimis
app.post("/medziai", (req, res) => {
  const sql = ` 
    INSERT INTO trees
    (title, type, height, good_id)
    VALUES (?, ?, ?, ?) 
    
  `; /// klaustukai atitinka kintamuosius

  con.query(sql, [req.body.title, req.body.type, req.body.height ? req.body.height : null, req.body.good === '0' ? req.body.good : null ], (err, result) => {
    if (err) throw err;

    res.send({result, msg: {text: 'OK, Zuiki', type: 'success'}});
  });
});
//delete metodas yra delete siunciam url su parametru
app.delete("/medziai/:id", (req, res) => {
  const sql = ` 
    DELETE FROM trees
    WHERE id = ?
  `; // i klaustuka perduodame id 

  con.query(sql,[req.params.id], (err, result) => {
    if (err) throw err;

    res.send({ result, msg: { text: 'OK, Bebrai', type: 'info' } });
  });
});

//Edit  metodas put siunciam url su parametru ir duomenimis
app.put("/medziai/:treeId", (req, res) => {
  const sql = ` 
    UPDATE  trees
    SET title = ?, type = ?, height = ?, good_id = ? 
    WHERE id = ?
  `;
  console.log(sql);; // i klaustuka perduodame id 

  con.query(sql,[req.body.title, req.body.type, req.body.height, req.body.good,req.params.treeId], (err, result) => {
    if (err) throw err;

    res.send({ result, msg: { text: 'OK, Barsukai', type: 'danger' } });
  });
});

app.post("/gerybes", (req, res) => {
  const sql = ` 
    INSERT INTO goods
    (title)
    VALUES (?) 
    
  `; /// klaustukai atitinka kintamuosius

  con.query(sql, [req.body.title], (err, result) => {
    if (err) throw err;

    res.send({result, msg: {text: 'OK, Zuiki', type: 'success'}});
  });
});


app.post("/front/komentarai", (req, res) => {
  const sql = ` 
    INSERT INTO comments
    (comm, tree_id)
    VALUES (?, ?) 
    
  `; /// klaustukai atitinka kintamuosius

  con.query(sql, [req.body.com, req.body.treeId], (err, result) => {
    if (err) throw err;

    res.send({result, msg: {text: 'OK, Zuiki', type: 'success'}});
  });
});
// Read metodas get
app.get("/gerybes", (req, res) => {
  const sql = ` 
    SELECT
    g.title, g.id, COUNT(t.id) AS trees_count
    FROM trees AS t
    RIGHT JOIN goods AS g
    ON t.good_id = g.id
    Group BY g.id
    ORDER BY g.title 
  `;
  con.query(sql, (err, result) => {
    if (err) throw err;

    res.send(result);
  });
});

///Front gerybes 
app.get("/front/gerybes", (req, res) => {
  const sql = ` 
    SELECT
    g.title, g.id, COUNT(t.id) AS trees_count, GROUP_CONCAT(t.title) as trees_title
    FROM trees AS t
    RIGHT JOIN goods AS g
    ON t.good_id = g.id
    Group BY g.id
    ORDER BY g.title 
  `;
  con.query(sql, (err, result) => {
    if (err) throw err;

    res.send(result);
  });
});

//delete goods
app.delete("/gerybes/:id", (req, res) => {
  const sql = ` 
    DELETE FROM goods
    WHERE id = ?
  `; // i klaustuka perduodame id 

  con.query(sql,[req.params.id], (err, result) => {
    if (err) throw err;

    res.send({ result, msg: { text: 'OK, Bebrai', type: 'info' } });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});