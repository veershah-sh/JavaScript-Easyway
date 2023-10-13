# History Of C Language

- Inventor: Dennis Ritchie
- Location: The Bell Laboratories
- Year: 1972
- Level: Low Level Language
- Type: It is a functional Language.
- Run Type: Compiled Language
- Fact: C is <span style="color:green;">Green Language</span>


## Uses of c Language
1. To make database
2. Operating systems
3. Embbed systems
4. Developing new Language
5. Kernel 

## Language Levels

1. High Level Language          - International  (Python, Js, CSS, HTML, PHP)
2. Low Level Language           - National (C, C++, Pascel, Basic, Fortarn)
3. Machine Level Language       - Regional (Binary, Assembly ASM)


SYNTAX:

```c
#include<stdio.h> // standrad input output library

// () - paranthesis
void main() // main function
{
    // function body
}
```

Compile & Run:
```sh
gcc <file_name>.c -o <output_file_name>.exe
.\<output_file_name>.exe // windows
./<output_file_name>.exe // linux / mac
```

## Editors
- [Codeblocks](http://www.codeblocks.org/)
- [VS Code](https://code.visualstudio.com/)
- [Turbo C++](https://turbo-c.en.softonic.com/)
- [Dev C++](https://www.bloodshed.net/)
- [C Lion](https://www.jetbrains.com/clion/)
- [Netbeans](https://netbeans.apache.org/download/index.html)

## Compilers
- [GNU Compiler Collection](https://gcc.gnu.org/)
- [Portable C Compiler](http://pcc.ludd.ltu.se/)
- [Tiny C Compiler](https://bellard.org/tcc/)
- for more refer to [SETUP GUIDE](../clang_setup.pdf)

<hr>

# Variables

## Variables:
    Local Storage for your code.

### Syntax: 
- Declare variable: 
    ```data_type var_name;```

- Define variable: 
    ```
    data_type var_name;
    var_name = value;
    ```
    
- Initialize variable:
    ```data_type var_name = initial_value;```

### Example:
- Declare variable:
    ```int marks;```

- Define variable:
    ```
    int marks;
    marks = 50;
    ```
- Initialize variable:
    ```int marks = 0;```

### Rules to name variable:
1. Name must start with alphabet [a-z][A-Z] or underscror(_).
2. Name do not start with number[0-9] or special characters(@!#$%&*-).
3. Name do not include whitespace( ) or special characters(@!#$%&*-).
4. Do not use reserved keywords.

- Valid names:
    myAge, my_age, _age, age_, age1
- Invalid names:
    1age, @age, #age, my age, int, if, for

See this file for code. [Code](./variables.c)

See more practice questions. [Practice](./variable_practice.c)
