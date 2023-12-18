const router = require('express').Router()
const authMiddleware = require('../middlewares/authMiddleware')
const Theater = require('../models/theaterModel')
const Show = require("../models/showModel")

router.post('/add-theater',authMiddleware, async(req, res)=>{

    try{
        const newTheater = new Theater(req.body)
        await newTheater.save()
        res.send({
            success: true,
            message: "Theater added successfully"
        })
    }catch(error){
        res.send({
            success: false,
            message: error.message
        })
    }
})

// get all theatres
router.get("/get-all-theaters", authMiddleware, async (req, res) => {
    try {
      const theaters = await Theater.find().populate('owner').sort({ createdAt: -1 });
      res.send({
        success: true,
        message: "Theatres fetched successfully",
        data: theaters,
      });
    } catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
    }
  });

// get all theatres by owner
router.post("/get-all-theaters-by-owner", authMiddleware, async (req, res) => {
    try {
      const theaters = await Theater.find({ owner: req.body.owner }).sort({
        createdAt: -1,
      });
      res.send({
        success: true,
        message: "Theatres fetched successfully",
        data: theaters,
      });
    } catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
    }
  });

//update theater
router.post('/update-theater', async(req, res)=>{
    try{
        await Theater.findByIdAndUpdate(req.body.theaterId, req.body)
        res.send({
            success: true,
            message: "Theater updated successfully"
        })
    }catch(error){
        res.send({
            success: false,
            message: error.message,
        })
    }
})

//delete theater
router.post('/delete-theater', async(req, res)=>{
    try{
        await Theater.findByIdAndDelete(req.body.theaterId)
        res.send({
            success: true,
            message: "Theater deleted successfully"
        })
    }catch(error){
        res.send({
            success: false,
            message: error.message
        })
    }
})

//ADD SHOW

router.post("/add-show", async(req, res)=>{
  try{
    const newShow =new Show(req.body)
    await newShow.save()
    res.send({
      success: true,
      message:'Show added successfully'
    })
  }catch (error){
    res.send({
      success:false,
      message: error.message
    })
  }
})

// get  all shows by theater
router.post("/get-all-shows-by-theater",async(req,res)=>{
  try{
    const shows = await Show.find({theater: req.body.theaterId}).populate('movie').sort({
      createdAt:-1,
    })
    res.send({
      success:true,
      message:"Shows fetched successfully",
      data: shows,
    })
  }catch(error){
    res.send({
      success:false,
      message:error.message,

    })
  }
})
// delete show
router.post("/delete-show", authMiddleware, async (req, res) => {
  try {
    await Show.findByIdAndDelete(req.body.showId);
    res.send({
      success: true,
      message: "Show deleted successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});
  

module.exports = router