import express from 'express'
import RestaurantCntrl from './restaurants.controller.js'

const router = express.Router()

router.route("/").get(RestaurantCntrl.apiGetRestaurants)




export default router