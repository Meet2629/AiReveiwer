const aiService = require('../services/ai.service')


module.exports.getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).json({ message: "prompt is required" });
    }

    try {
        const response = await aiService(code);
        res.send(response);
    } catch (error) {
        console.error('AI review error:', error);
        res.status(500).json({ message: error.message || 'Failed to generate review' });
    }
}