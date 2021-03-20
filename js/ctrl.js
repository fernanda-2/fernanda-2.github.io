let numeros =new Array();
    function primo()
    {
        for(let i=2; i<100; i++){
            let contador = 0;
            for (let j=1; j<=i; j++){
                if (i%j==0)
                contador++;
            }
            if (contador==2){
                numeros.push(i);
            }
        }
        imprimirPrimo();
    }
    fuction imprimirPrimo(){
        for(let i=0; i<numeros.length; i++){
            document.getElementById('resultado').innerHTML +=numeros[i];
            if(!isUltimoNumero(i, numeros)){
                document.getElementById('resultado').innerHTML += ",";
            }
        }
    }
    function isUltimoNumero(pos, array){
        if ((pos+1) !=array.length){
            return false;
        }
        return true;
    }
