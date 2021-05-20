function repeatingInt(arr , size)
    {
        var i, j;
        console.log("Repeated integer are :");
        for (i = 0; i < size; i++)
        {
            for (j = i + 1; j < size; j++)
            {
                if (arr[i] == arr[j])
                    console.log(arr[i]);
            }
        }
    }
 
var arr = [0,1,2,3,4,5,6,7,7,8,9,10];
var size = arr.length;
repeatingInt(arr, size);
 