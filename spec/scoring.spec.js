describe("ScoringService", function () {
    var ScoringService = require("../src/scoring.js")
    var scoringService;

    beforeEach(function () {
        scoringService = new ScoringService();
    });

    describe("calculateOutScore", function () {
        it("should output the total score for the front 9", function () {
            var scores = [];
            for (var i = 0; i < 18; i++) {
                scores[i] = 0;
            }
            scores[0] = 3;
            scores[1] = 4;
            scores[5] = 5;
            scores[17] = 3;

            var out = scoringService.calculateOutScore(scores);

            expect(out).toBe(12);
        });
        it("should calculate even if not all scores are there", function () {
            var scores = [];
            for (var scoreIndex = 0; scores < 18; scoreIndex ++) {
                scores[scoreIndex] = 0;
            }

            scores[0] = 4;
            scores[1] = 3;

            var out =scoringService.calculateOutScore(scores);

            expect(out).toBe(7);
            expect(errorCheck).not.toThrow();
        });
        it("should throw an error when there is a negative number in the input", function () {
            var scores = [];
            scores[3] = -2;

            function errorCheck() {
                scoringService.calculateOutScore(scores);
            }

            expect(errorCheck()).toThrow();
        });
    });

    describe("calculateInScore", function () {
        it("should output the total score for the back 9", function () {
            var scores = [];
            for (var i = 0; i < 18; i++) {
                scores[i] = 0;
            }
            scores[0] = 3;

            scores[8] = 4;
            scores[12] = 5;
            scores[17] = 3;

            var inScore = scoringService.calculateInScore(scores);

            function errorCheck() {
                scoringService.calculateInScore(scores);
            }

            expect(inScore).toBe(12);
            expect(errorCheck).not.toThrow();
        });
        it("should calculate even if not all scores are there", function () {

        });
        it("should throw an error when there is a negative number in the input", function () {
            var scores = [];
            for (var i = 0; i < 18; i++) {
                scores[i] = 0;
            }

            scores[17] = -3;

            var inScore = scoringService.calculateInScore(scores);

            function errorCheck() {
                scoringService.calculateInScore(scores);
            }

            expect(inScore).toBe(12);
            expect(errorCheck).not.toThrow();
        });
    });

    describe("calculateTotalScore", function () {
        it("should output the total score for all 18 holes", function () {

        });
        it("should calculate even if not all scores are there", function () {

        });
        it("should throw an error when there is a negative number in the input", function () {

        });
    });

    describe("compareToPar", function () {
        it('Should output total score minus par', function () {

        });

        it('Should throw an error when there is a negative number in the input', function () {

        });

        it('should output total score minus par even if not all scores are there', function () {

        });
        
        it('should throw an error when par is not defined', function () {
            
        });

    });
});