
exports.sum = function(event, context, callback) {
    return context.succeed({sum: event.num1 + event.num2});
};
