
		//--------------------------------------------------Declaration of Variables for result
	
		var $result = document.getElementById('result');
		var $operator = document.getElementById('operator');
		var $resultString = document.getElementById('result').innerHTML;

		//--------------------------------------------------Declaration of Variables for result



		//--------------------------------------------------Declaration of Variables for operators

		var $clearAll = document.getElementById('clearAll');	
		var $delete = document.getElementById('delete');			

		var $plus = document.getElementById('plus');						
		var $plusValue = document.getElementById('plus').value;
		var $plusHandler;

		var $subtract = document.getElementById('subtract');						
		var $subtractValue = document.getElementById('subtract').value;
		var $subtractHandler;		

		var $multiply = document.getElementById('multiply');						
		var $multiplyValue = document.getElementById('multiply').value;
		var $multiplyHandler;		

		var $divide = document.getElementById('divide');						
		var $divideValue = document.getElementById('divide').value;				
		var $divideHandler;		

		//--------------------------------------------------Declaration of Variables for operators




		//--------------------------------------------------Declaration of Variables for numbers				

		var $one = document.getElementById('one');						
		var $oneValue = document.getElementById('one').value;

		var $two = document.getElementById('two');						
		var $twoValue = document.getElementById('two').value;

		var $three = document.getElementById('three');						
		var $threeValue = document.getElementById('three').value;

		var $four = document.getElementById('four');						
		var $fourValue = document.getElementById('four').value;

		var $five = document.getElementById('five');						
		var $fiveValue = document.getElementById('five').value;						

		var $six = document.getElementById('six');						
		var $sixValue = document.getElementById('six').value;		

		var $seven = document.getElementById('seven');						
		var $sevenValue = document.getElementById('seven').value;

		var $eight = document.getElementById('eight');						
		var $eightValue = document.getElementById('eight').value;

		var $nine = document.getElementById('nine');						
		var $nineValue = document.getElementById('nine').value;

		var $zero = document.getElementById('zero');						
		var $zeroValue = document.getElementById('zero').value;

		var $dot = document.getElementById('dot');						
		var $dotValue = document.getElementById('dot').value;		

		//--------------------------------------------------Declaration of Variables for numbers	



		//--------------------------------------------------Declaration of Functions for printing operators


		$clearAll.addEventListener('click', function(){

			$result.innerHTML = null;
			$operator.innerHTML = null;
			$plusHandler = false;
			$subtractHandler = false;
			$multiplyHandler = false;
			$divideHandler = false;															

		});	

		$delete.addEventListener('click', function(){

			$resultString = document.getElementById('result').innerHTML;
			$resultString = $resultString.slice(0, $resultString.length - 1);
			$result.innerHTML = $resultString;

		});			

		$plus.addEventListener('click', function(){

			$resultString = document.getElementById('result').innerHTML;
			$operator.innerHTML = $resultString + $plusValue;
			$result.innerHTML = null;
			$plusHandler = true;

		});		


		$subtract.addEventListener('click', function(){

			$resultString = document.getElementById('result').innerHTML;
			$operator.innerHTML = $resultString + $subtractValue;
			$result.innerHTML = null;
			$subtractHandler = true;			

		});				

		$multiply.addEventListener('click', function(){

			$resultString = document.getElementById('result').innerHTML;
			$operator.innerHTML = $resultString + $multiplyValue;
			$result.innerHTML = null;
			$multiplyHandler = true;			

		});		

		$divide.addEventListener('click', function(){

			$resultString = document.getElementById('result').innerHTML;
			$operator.innerHTML = $resultString + $divideValue;
			$result.innerHTML = null;
			$divideHandler = true;			

		});				


		//--------------------------------------------------Declaration of Functions for printing numbers

		$one.addEventListener('click', function(){

			$result.innerHTML += $oneValue;

		});

		$two.addEventListener('click', function(){

			$result.innerHTML += $twoValue;	

		});

		$three.addEventListener('click', function(){

			$result.innerHTML += $threeValue;

		});

		$four.addEventListener('click', function(){

			$result.innerHTML += $fourValue;

		});

		$five.addEventListener('click', function(){

			$result.innerHTML += $fiveValue;

		});

		$six.addEventListener('click', function(){

			$result.innerHTML += $sixValue;

		});

		$seven.addEventListener('click', function(){

			$result.innerHTML += $sevenValue;

		});

		$eight.addEventListener('click', function(){

			$result.innerHTML += $eightValue;

		});		

		$nine.addEventListener('click', function(){

			$result.innerHTML += $nineValue;

		});		

		$zero.addEventListener('click', function(){

			$result.innerHTML += $zeroValue;

		});																		

		$dot.addEventListener('click', function(){

			$result.innerHTML += $dotValue;

		});

		//--------------------------------------------------Declaration of Functions for printing numbers


		//--------------------------------------------------Declaration of Variable and Function for Enter

		var $enter = document.getElementById('enter');
		var $resultValue;

		$enter.addEventListener('click', function(){

			var $leftSide = document.getElementById('operator').innerHTML;
			$leftSide = $leftSide.slice(0, -1);
			console.log($leftSide);


			var $rightSide = document.getElementById('result').innerHTML;
						console.log($rightSide);

			if($plusHandler === true){
				var resultValue = $leftSide*1 + $rightSide*1;
				$result.innerHTML = resultValue;
				$operator.innerHTML = null;

			}

			else if($subtractHandler === true){
				var resultValue = $leftSide*1 - $rightSide*1;
				$result.innerHTML = resultValue;
				$operator.innerHTML = null;

			}

			else if($multiplyHandler === true){
				var resultValue = $leftSide*1 * $rightSide*1;
				$result.innerHTML = resultValue;
				$operator.innerHTML = null;

			}

			else if($divideHandler === true){
				var resultValue = $leftSide*1 / $rightSide*1;
				$result.innerHTML = resultValue;
				$operator.innerHTML = null;

			}

		});

