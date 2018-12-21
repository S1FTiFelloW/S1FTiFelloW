function mainSort()
{
	var Name = $('#Name').val();
	var Count = $('#Count').val();
	var data = document.getElementsByName('elem');
	var res = [];

	if (Count < 28 & Count > 0) 
	{
	} 
	else 
	{
		alert(Count + " количество элементов задано не верно!");
		return;
	}

	for (index = 0; index < Count; ++index) {
		res[index] = Number(data[index].textContent);
	}

	var time = performance.now();
	var result = bogosort(res);
	time = performance.now() - time;
	var resultStr = Name + " ваше время сортировки " + time + " мс, данные: ";
	for (index = 0; index < result.length; ++index) {
		resultStr = resultStr + " " + result[index];
	}

	var XML = new XMLWriter();
	XML.BeginNode("Foo");
    XML.WriteString("Hello World");
    XML.EndNode();
    XML.Close();
    XML.ToString();

	alert(resultStr);
}