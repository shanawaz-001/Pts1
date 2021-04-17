const mongoose = require("mongoose");

const projectTaskSchema = new mongoose.Schema({
    // taskId:{
    //     type: String,
    //     unique:[true, 'Already exixts'],
    //     required: true
    // },
    taskDesc:{
        type: String,
    },
    priority:{
        type:String,
        validate:{
            validator: value =>[ 'Low', 'Normal', 'High'].includes(value),
            message: 'Invalid Priority'
        },
        default: 'Normal'
    },
    startDate:{
        type: Date,
        required:[true, ''],
        default: Date.now
    },
    endDate:{
        type: Date
    },
    status:{
        type: String,
        required: true,
        validate: {
            validator: value => ["Not started","Active","On-hold","Completed"].includes(value),
            message: 'Invalid Status'
          },
          default: 'Not started'
    },
    projectRef:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Project',
        required: true
    },

},
{
    collection:'projectTask'
});

module.exports = mongoose.model("ProjectTask", projectTaskSchema);
