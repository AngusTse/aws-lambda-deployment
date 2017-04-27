
exports.show = function(event, context, callback) {
    return context.succeed({show: event.num1});
};
