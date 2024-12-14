const express = require('express')
const fs = require('fs')

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../../dev-data/tours-simple.json`))

exports.getAllUsers = (req, res) => {
	try {
		res.status(500).json({
			status: `error`,
			message: 'Not yet defined'
		})
	} catch (error) {
		console.log(`ERROR : ${error}`);
	}
}
exports.getUser = (req, res) => {
	try {
		res.status(500).json({
			status: `error`,
			message: 'Not yet defined'
		})
	} catch (error) {
		console.log(`ERROR : ${error}`);
	}
}
exports.createUser = (req, res) => {
	try {
		res.status(500).json({
			status: `error`,
			message: 'Not yet defined'
		})
	} catch (error) {
		console.log(`ERROR : ${error}`);
	}
}
exports.updateUser = (req, res) => {
	try {
		res.status(500).json({
			status: `error`,
			message: 'Not yet defined'
		})
	} catch (error) {
		console.log(`ERROR : ${error}`);
	}
}
exports.deleteUser = (req, res) => {
	try {
		res.status(500).json({
			status: `error`,
			message: 'Not yet defined'
		})
	} catch (error) {
		console.log(`ERROR : ${error}`);
	}
}
