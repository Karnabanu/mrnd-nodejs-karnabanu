
describe("JSIntro Test Suite", function(){
	var JSIntro = require("C:/Users/kalpana/Desktop/mrnd-nodejs-master/src/JSIntro");

	describe("JSIntro-Sum", function(){

		it("sum of 2 and 3 is 5", function(){

			var i = JSIntro.Sum(2,3);
			expect(i).toEqual(5);
		});

		it("sum of -1 and 3 is 2", function(){

			var i = JSIntro.Sum(-1,3);
			expect(i).toEqual(2);
		});

	});

	describe("JSIntro-SumOfArray", function(){

		it("sum of 2 and 3 is 5", function(){

			var i = JSIntro.SumOfArray([2,3]);
			expect(i).toEqual(5);
		});

	});

	describe("JSIntro-SumOfUniqueNumbers", function(){

		it("sum of 2,3,3,2 is 5", function(){

		    var i = JSIntro.SumOfUniqueNumbers([2, 3, 3, 2]);
			expect(i).toEqual(5);
		});

		it("sum of 2,3,4 is 9", function(){

			var i = JSIntro.SumOfUniqueNumbers([2,3,4]);
			expect(i).toEqual(9);
		});
		it("sum of 1,2,3,4,3,3 is 10", function(){

			var i = JSIntro.SumOfUniqueNumbers([1,2,3,4,3,3]);
			expect(i).toEqual(10);
		});
	});
	describe("JSIntro-ReverseString", function(){

		it("abc reversed is cba", function(){

		    var str = JSIntro.ReverseString("abc");
			expect(str).toEqual("cba");
		});

		it("abcd reversed is dcba", function(){

			var str = JSIntro.ReverseString("abcd");
			expect(str).toEqual("dcba");
		});

		it("a reversed is a", function(){

			var str = JSIntro.ReverseString("a");
			expect(str).toEqual("a");
		});
	});

	describe("JSIntro-Reversingarray of strings", function () {
	    it("[karna,banu,ashala] reverse as [anrak,unab,alahsa]", function () {
	        var reversed_array = [];
	        reversed_array = JSIntro.ReverseArrayOfStrings(["karna", "banu", "ashala"]);
	        console.log(reversed_array);
	        expect(reversed_array[0]).toEqual("anrak");
	        expect(reversed_array[1]).toEqual("unab");
	        expect(reversed_array[2]).toEqual("alahsa");

	    });
	});
});
