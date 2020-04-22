<html>
    <head>
        <title>My title</title>
        <script type="text/javascript">
            var cars = ["BMW" , "Volvo","Audi"];
            //to access value of array use follwing syntax
            document.write("<h2>"+cars[2]+"</h2>")
            //iterate over array:
            for(var i=0;i<3;i++)
            {
               document.write("<h2>"+cars[i]+"</h2>")
            }
        
        //another way by which we can create arrays
        var arr1 = new Array("Mango","apple")
        
        //arrays are dynamic here size can increase and decrease
        //arrays are predefined so there are various methods that come along with array
        //example we can use cars.length
        for(var i=0;i<car.length;i++)
            {
               document.write("<h2>"+cars[i]+"</h2>")
            }

            //here arrays can have different data types 
            cars.push(2)
            //now car array have 3 strings and a number
        </script>

            
    </head>
    <body>

    </body>
</html>
