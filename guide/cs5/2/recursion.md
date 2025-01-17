# Recursion

Now, what is recursion? Well, recursion is recursion. Seriously speaking however, it's an occurence that happens when a process depends on a simpler or previous version of itself.

For instance, take the definition of the **Fibonacci Sequence**:

$$
F_0 = 0, \qquad F_1 = 1
$$
$$
F_n = F_{n-1} + F_{n-2}
$$

As you can see, the Fibonacci Sequence is recursive in nature, since it depends on a **previous** version of itself: $F_{n-1}$ and $F_{n-2}$.

A recursive function must have both of the following: a **base case** and a **recursive case** or **recursive step**. In the Fibonacci sequence, we can see both of these requirements being fulfilled, the base cases being $F_0 = 0$ and $F_1 = 1$, and the recursive case being $F_n = F_{n-1} + F_{n-2}$ for $n \geq 2$.

In Python, we can write the Fibonacci sequence as a recursive function, like so:
```py
def fib(n):
	if n == 0 or n == 1:
		return n

	return fib(n - 1) + fib(n - 2)
```
We first define our base cases: `0` and `1`, then return their respective values, `0` and `1`, respectively. We return `n` since $F_n$ for $0$ and $1$ is $n$.

After that, we define our recursive case, which is `fib(n - 1) + fib(n - 2)`.

Let's try another function: the **factorial**. In Mathematics, the factorial of a number is the sum of all natural numbers less than or equal to itself, and is defined as:

$$n! = 1 \times 2 \times ... \times (n - 2) \times (n - 1) \times n$$

Alternatively, it may also be defined as:

$$n! = n \times (n - 1)!$$

Do also note that $0!$ is $1$. The reason why it is $1$ is not covered by this topic on Recursion, but you can however, look the proof for it online.

Putting that aside, as you can see, the factorial of a number is also a recursive function, since it can also depend on a previous version of itself: $(n - 1)!$

Following our definition of a recursive function, we have our base case: $0$, which is equal to $1$, and our recursive case: $n! = n \times (n - 1)!$ for $n \geq 1$. Using these cases, we can create a recursive Python function for this like so:
```py
def factorial(n):
	if n == 0:
		return 1

	return n * factorial(n - 1)
```