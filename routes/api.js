var router = require('express').Router();
var db = require('../models');


router
    .get("/event", (req, res) => {
        db.Event
            .findAll({})
            .then((response) => {
                res.json(response)
            })
            .catch((err) => {
                res.status(500).json(
                        {
                        error: err.message,
                        message: "Something went wrong while trying to access the database!"
                        }
                    );
            });
    })
    .get("/event/:id", (req, res) => {
        db.Event
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then((response) => {
                res.json(response);
            })
            .catch((err) => {
                res.status(500).json(
                        {
                        error: err.message,
                        message: "Something went wrong while trying to access the database!"
                        }
                    );
            });
    })
    .post("/event", (req, res) => {
        const newEvent = {
           name: req.body.name,
           description: req.body.description,
           completed: false
        }
        db.Event
            .create(newEvent)
            .then((response) => {
                res.json(response)
            })
            .catch((err) => {
                res.status(500).json(
                    {
                    error: err.message,
                    message: "Something went wrong while trying to access the database!"
                    }
                );
            });
    })
    .put("/event", (req, res) => {
        const newEvent = {
            name: req.body.name,
            description: req.body.description,
            completed: req.body.completed
         }
         db.Event
            .update(newEvent, {
                where: {
                    id: req.body.id
                }
            })
            .then((response) => {
                res.json(response);
            })
            .catch((err) => {
                res.status(500).json(
                    {
                    error: err.message,
                    message: "Something went wrong while trying to access the database!"
                    }
                );
            });
    })
    .delete("/event/:id", (req, res) => {
        db.Event
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then((response) => {
                res.json(response);
            })
            .catch((err) => {
                res.status(500).json(
                    {
                    error: err.message,
                    message: "Something went wrong while trying to access the database!"
                    }
                );
            });
    });

module.exports = router;