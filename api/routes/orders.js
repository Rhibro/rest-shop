const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        messge: "Orders were fetched!"
    });
});

// create order
router.post("/", (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        messge: "Order was created!",
        order: order
    });
});

router.get("/:orderId", (req, res, next) => {
    res.status(200).json({
        messge: "Order details",
        orderId: req.params.orderId
    });
});

router.delete("/:orderId", (req, res, next) => {
    res.status(200).json({
        messge: "Order deleted",
        orderId: req.params.orderId
    });
});



module.exports = router;