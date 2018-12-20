function mainSort()
{
	var data = document.getElementsByName('elem');
	var res = [];
	
	for (index = 0; index < data.length; ++index) {
		res[index] = Number(data[index].textContent);
	}

	var result = bogosort(res);

	var resultStr = "";
	for (index = 0; index < result.length; ++index) {
		resultStr = resultStr + " " + result[index];
	}

	alert("Результат: " + resultStr);
}
