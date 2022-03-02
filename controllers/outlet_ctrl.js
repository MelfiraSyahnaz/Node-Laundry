'use strict' 

const db = require('../db')

module.exports = {
    getAll: (req, res) => {
        const sql = 'select * from outlet'
        db.query(sql, (err, results) => {
            if (err) throw (err)
            res.json({
                message: "Berhasil Menampilkan Semua Data",
                data: results
            })
        })
    },
    getId: (req, res) => {
        const id = req.params.id
        db.query(`select * from outlet where id = '${id}'`, (err, results) => {
            if (err) throw (err)
            res.json({
                message: "Berhasil Menampilkan Data",
                data: results
            })
        })
    },
    add: (req, res) => {
        let outlet = {
            nama_outlet: req.body.nama_outlet,
            alamat: req.body.alamat,
            telepon: req.body.telepon
        }
        db.query(`insert into outlet set ?`, outlet, (err, results) => {
            let response = null
            if (err) {
                response = {
                    message: err.message
                }
            } else {
                res.send({
                    message: "Berhasil Menambahkan Data",
                    data: results
                })
            }
        })
    },
    update: (req, res) => {
        const id = req.params.id
        let outlet = {
            nama_outlet: req.body.nama_outlet,
            alamat: req.body.alamat,
            telepon: req.body.telepon
        }
        db.query(`update outlet set ? where id = '${id}'`, outlet, (err, results) => {
            let response = null
            if (err) {
                response = {
                    message: err.message
                }
            } else {
                res.send({
                    message: "Berhasil Update Data",
                    data: results
                })
            }
        })
    },
    delete: (req, res) => {
        const id = req.params.id
        db.query(`delete from outlet where id = '${id}'`, (err, results) => {
            let response = null
            if (err) {
                response = {
                    message: err.message
                }
            } else {
                res.send({
                    message: "Berhasil Hapus Data",
                    data: results
                })
            }
        })
    }
}