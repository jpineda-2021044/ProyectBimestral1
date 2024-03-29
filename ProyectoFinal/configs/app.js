
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from 'dotenv'
import userRoutes from '../src/user/user.routes.js'
import categoryRoutes from '../src/category/category.routes.js'
import productRoutes from '../src/product/product.routes.js'
import shopCartRoutes from '../src/ShopCart/shopCart.routes.js'
import purchaseRouter from '../src/purchase/purchase.routes.js'


const app = express() 
config()
const port = process.env.PORT || 3200

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors()) 
app.use(helmet()) 
app.use(morgan('dev')) 

app.use('/user', userRoutes)
app.use('/category', categoryRoutes)
app.use('/product', productRoutes)
app.use('/shop', shopCartRoutes)
app.use('/buy', purchaseRouter)

export const initServer = ()=>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}