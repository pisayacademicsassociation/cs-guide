
Error
- A serious problem that a reasonable application should not try to catch

Exception
- A condition that a reasonable application might want to catch

Throwable
- Main interface of items that can be thrown

Two kinds of exceptions
- Checked exceptions
	- Exceptions that can be found during compile time
- Unchecked exceptions
	- Exceptions that are found during run time (NullPointerException)

Throwing an exception
- Process of creating/generating an exception

Handling an exception
- Coding process which detects and deals with exceptions


Custom exception
- Exceptions created by the programmer to meet their specific requirements.
- Created by extending the `Exception` class.
- If you don't want to store exception details, use the default constructor. Otherwise, use a parameterized one.N

# Errors and Exceptions

In previous CS projects, you've learned that a program can produce an Error when something unexpected happens. In Java, this is extended further with `Exception`s. Here, there is a clear difference between an `Error` and an `Exception`.

## Errors and Exceptions: The Difference

Now, what is the difference between an `Error` and an `Exception` in Java?

An `Error` is a serious problem that a reasonable application **shouldn't** catch. An example of this is the `VirtualMachineError`, which is thrown when the Java Virtual Machine (JVM) broke or has run out of resources for it to continue operating. A reasonable program shouldn't try to catch this `Error`, since it can't really do anything about it.

Exceptions on the other hand, indicate problems that a program might wanna catch. An example of this is the `ArithmeticException`, which is thrown when an exceptional arithmetic condition has occurred. For example: dividing by zero. Dividing by 0 in Math gives a result of undefined, but Java doesn't do that. Instead, it throws an `ArithmeticException` to indicate that the program tried to divide by zero. You can catch this `Exception` and do actions accordingly.

## Exception types

In Java, there are 2 exceptions:
- Checked exceptions, which are exceptional conditions that a program should anticipate and recover from, such as `ArithmeticException`, `FileNotFoundException`, etc., and
- Unchecked exceptions, which are exceptional conditions that are internal to the application that could not be anticipated or recovered from, such as a `NullPointerException`.

## Creating custom exceptions

Sometimes, you would think of creating a custom exception for a possible exceptional condition in your program. You can do this by extending the `Exception` class.

```java
public class CustomException extends Exception {
	public CustomException(String message) {
		super(message);
	}
}
```

This allows you to create custom exceptions that you can use in your code.

You can also create a default constructor if you don't wanna store Exception details, like so.

```java
public class CustomException extends Exception {
	public CustomException() {
		super();
	}
}
```

## Throwing and Catching Exceptions

Sometimes, you want to create exceptions for exceptional conditions in your code. You can do so by using the `throw` statement with your preferred exception.

```java
throw new InputMismatchException("Expected number input!");
```

::: tip
You should be throwing **instances** of `Exception`, not the Exception class itself.

```java
// This is wrong.
throw InputMismatchException;

// This is also wrong.
throw InputMismatchException("Expected number input");
```
:::

Now, how do we handle exceptions? You can handle code that could possibly throw an exception inside a `try-catch` or `try-catch-finally` block.

```java
try {
	// code that could produce exceptions
} catch (Exception e) {
	// code to handle the produced exception.
}

try {
	// code that could produce exceptions
} catch (Exception e) {
	// code to handle the produced exception.
} finally {
	// code to execute after the try or catch block.
}
```

Code that could produce an `Exception` is added inside the `try` block. When an Exception occurs, the corresponding `catch` block will handle the thrown exception, then code inside the `finally` block is executed, if it's provided.

Do note that a `try` block must be preceeded by either a `catch` or a `finally` block.