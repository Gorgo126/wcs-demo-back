/**
 * Students Routes
 */

const routes = require('express').Router()
const { createItem, getPreSignedUrl, listItems } = require('./handler')

routes.get('/', listItems)
routes.post('/', createItem)

routes.post('/presignedurl', getPreSignedUrl)

module.exports = routes
