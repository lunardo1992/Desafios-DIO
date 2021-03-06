/ **
 * Dividindo X por Y
 *
 * Desafio:
 * - Você terá o desafio de escrever um algoritmo que leia 2 números e imprima 
* o resultado da divisão do primeiro pelo segundo. Caso não for possível mostre
 * a mensagem “divisao impossivel” para os valores em questão.
 * 
 * Entrada:
 * - A entrada contém um número inteiro N. Este N será a quantidade de pares de 
 * valores inteiros (X e Y) que serão lidos em seguida.
 * 
 * Saída:
 * - Para cada caso mostre o resultado da divisão com um dígito após o ponto decimal, 
 * ou “divisao impossivel” caso não seja possível efetuar o cálculo.
 * /

deixe  limit  =  parseInt ( gets ( ) ) ;

para  ( deixe  i  =  0 ;  i  <  limite ;  i ++ )  {
    
    let  line  =  gets ( ) . dividir ( "" ) ;
    deixe  X  =  parseInt ( linha [ 0 ] ) ;
    deixe  Y  =  parseInt ( linha [ 1 ] ) ;
    
    if  ( Y  ==  0 )  {
        console . log ( "divisao impossivel" ) ;
    }  else  {
        deixe  divisao  =  parseFloat ( X  /  Y ) . toFixed ( 1 ) ;
        console . log ( divisão ) ;
    }
}