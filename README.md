# Jquery e prototype para controlar um menu

Uso de prototype para fazer o controle (toggle) de um menu responsivo com Jquery.

## Função construtura/prototype

A função `ResponsiveMenuToggle` que recebeu funções em seu prototype é instanciada com `new` funcionamento como uma função construtora que se comporta como uma classe. 

Outro ponto foi que essa função construtura foi encapsulada em uma IIFE, ou seja, o uso de prototype/função construtura foi combinado com uma  IIFE que retorna a prototype/função construtura.

## Syntax sugar

A função `$menuToggleInit` funciona como um syntax sugar para instanciar e usar a função construtora `ResponsiveMenuToggle`. Esse código é um wrapper para facilitar o uso de tudo, seria algo analogo a um método estático que usa uma classe de forma prodecural em linguagens com suporte a orientação a objetos.