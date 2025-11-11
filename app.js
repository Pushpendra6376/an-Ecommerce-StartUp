const express = require('express')

const app = express();

const cartRouter = require('./routes/cart')
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')

app.use(express.static('public'))
app.use(express.json());

// parse form URL-encoded requests ✅ (THIS WAS MISSING)
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRouter);
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);

app.listen(3000, ()=>{
    console.log("server is running...")
})