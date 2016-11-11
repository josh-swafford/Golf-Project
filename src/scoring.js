function ScoringService() {
    this.calculateOutScore = function (scores) {
        var out = 0;
        for (var score = 0; score < 8; score++) {
            out = out + scores[score];
        }
        return out;
    }
}

module.exports = ScoringService;