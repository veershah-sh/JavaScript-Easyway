<?php
// default function
// parameterised function
// build-in functions

function printHello(){
    echo "Hello students...<br>";
    echo "Hello students1...<br>";
    echo "Hello students2...<br>";
}
printHello();

function findSquare(){
    $num = 10;
    return $num*$num;
}

$square = findSquare();
echo "Square : $square<br>";

function findCube($n){
    $cube = $n*$n*$n;
    echo "Cube of $n : $cube <br>";
}

findCube(5);

function areaOfCircle($radius){
    $area = 3.14*$radius*$radius;
    return $area;
}

echo "Area of Circle: " . areaOfCircle(23) . "<br>";


$n = 10;

// call by value
function addBy2($num){
    return $num + 2;
}

echo $n."<br>";
echo addBy2($n)."<br>";

// call by reference
function addBy3(&$num){
    return $num = $num + 3;
}
$a = 20;
addBy3($a);
echo $a."<br>";
?>
