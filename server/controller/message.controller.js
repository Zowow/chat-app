import Message from "../model/Message.model.js";
import Conversation from "../model/Conversation.model.js";

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })     
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        // await conversation.save();
        // await newMessage.save();

        // The above two lines is replaced with the following line (Optimized);
        await Promise.all([conversation.save(),newMessage.save()]);

        res.status(200).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller:", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        console.log(req.params);
        console.log(senderId);

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId]},
        }).populate("messages");

        console.log(conversation);

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessage controller:", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}