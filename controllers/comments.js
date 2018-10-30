
module.exports = (app) => {
    const Review = require('../models/review')
    const Comment = require('../models/comment')
    app.post('/reviews/comments', (req, res) => {
        Comment.create(req.body).then(comment => {
            res.redirect(`/reviews/${comment.reviewId}`);
        }).catch((err) => {
            console.log(err.message);
        });
    });
}