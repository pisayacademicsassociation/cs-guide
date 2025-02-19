# Big O, Big Θ and Big Ω

## Introduction

> *This page is about the mathematical way of obtaining a function's Big O. For the analytical one, see [Measuring Algorithm Growth (Level 2)](./measuring-algorithm-growth.md).*

In the previous lesson, we introduced to you the concept of function growth. In this lesson, we will learn about Big $O$, Big $\Theta$, and Big $\Omega$, and what each of them mean.

In CS, **Big $O$**, **Big $\Theta$**, and **Big $\Omega$** all represents the worst, average and best time complexity of an algorithm, respectively. Here, we will have two functions: $f(x)$, our function to estimate, and $g(x)$, the "bound" on the growth rate of $f(x)$. Each "Big X" has it's own specific bounds and ways of how $f(x)$ should behave relative to $g(x)$ as $x \to \infty$.

### Table of Contents

[[toc]]

## Return to Limits

See what I did there? "**as $x \to \infty$**". To better understand **how** $f(x)$ behaves relative to $g(x)$, we will be returning to the concept of limits.

In mathematics, a limit is the value or behavior of a function as it's argument ($x$) **approaches** a certain value, and in this lesson, we are trying to observe how $f(x)$ behaves relative to $g(x)$ as $x \to \infty$. 

Individually, the limits of both these functions are:

$$\lim_{x\to+\infty} f(x) = +\infty \text{ and } \lim_{x\to+\infty} g(x) = +\infty$$

However, by dividing them against each other, we can algebraically redefine the resulting function in such a way that allows us to see the behavior of $f(x)$ against $g(x)$.

To put it simply, we are trying to evaluate the growth of $f(x)$ relative to $g(x)$ as $x \to \infty$. We can think about this concept with a simple limit, defined as:

$$\lim_{x\to+\infty} \frac{f(x)}{g(x)}$$

Here, we compare the growth of $f(x)$ to $g(x)$ as they approach $\infty$. This works because, as $x \to \infty$, the fastest growing term dominates over the others, making the lower terms obsolete as they approach $\infty$.

To explain this further, we need a limit theorem too, namely:

$$\lim_{x\to+\infty} \frac{1}{x^r} = 0 \hspace{1em} \text{for} ~r \geq 1$$

Now that we have that aside, all we have to do is, well, evaluate the limit.

Let's say our functions are $f(x) = x^2+4x+16$ and $g(x) = x^2$. Now, when we substitute them in our limit:

$$\lim_{x\to+\infty} \frac{f(x)}{g(x)}$$
$$\lim_{x\to+\infty} \frac{x^2+4x+16}{x^2}$$

Can we evaluate this limit yet? No, because if we substitute $x$ as $+\infty$, we'd get an indeterminate form of $\frac{\infty}{\infty}$, so we need to redefine the function algebraically.

$$\lim_{x\to+\infty} \frac{x^2(1+\frac{4}{x}+\frac{16}{x^2})}{x^2(1)}$$

This is a key point in understanding how Big O works. When we redefine this function, we divide the numerator and denominator by the "largest degree" of $x$ in the denominator. In this way, the denominator evaluates to $1$, leaving the value to the "largest degree" of $x$ in the numerator.

$$\lim_{x\to+\infty} \frac{1+\frac{4}{x}+\frac{16}{x^2}}{1}$$
$$\lim_{x\to+\infty} 1+\frac{4}{x}+\frac{16}{x^2}$$

Now, we can substitute $x$ as $+\infty$.

$$1+\frac{4}{+\infty}+\frac{16}{(+\infty)^2}$$

We use the limit theorem from before.

$$1+0+0$$
$$1$$

Therefore, we can say that.

$$\lim_{x\to+\infty} \frac{x^2+4x+16}{x^2} = 1$$

Since it's $1$, the growth of $f(x)$ relative to $g(x)$ as $x \to \infty$ is like $g(x)$.

## Big O notation

Okay, back to the topic at hand. Big O represents the worst-case time complexity of an algorithm, where $f(x)$ is our algorithm, and $g(x)$ is our "upper bound" (this will be important later!). From our example above, it's quite evident *why* we don't include other "lower" constants in Big O notation.

We will return to our previous example. It is evident that as $x \to \infty$, the values for $4x$ and $16$ become negligible.

Formally, to show that $f(x) \in O(g(x))$, we prove that:

$$f(x) \leq c \cdot g(x) \hspace{1em} \text{for all}~x \geq x_0, \text{where } c > 0~\text{and}~x_0~\text{is a constant}$$

Remember when we we're tasked to change $n$ and $c$? Well, this is it, except the way you change those values can be errorneous. When you change $n$ (in this case, $x$), you don't change $c$ with it. Instead, you provide values for all $x \geq x_0$ with a specified constant $c$, then increase $c$ after. Our definition also states **"for all"**, meaning that a single `false` indicates that $f(x) \notin O(g(x))$.

For example, let's try proving that $O(n^2) \in O(n)$:

$$\text{If } f(x) \in O(g(x)) \text{, then } f(x) \leq c \cdot g(x) \text{ for all}~x \geq x_0, \text{where } c > 0~\text{and}~x_0~\text{is a constant}$$
$$f(x) \leq c \cdot g(x)$$
$$n^2 \leq c \cdot n$$
$$\frac{n^2}{n} \leq \frac{c \cdot n}{n}$$
$$n \leq c$$
$$\text{There exists no constant } c \text{ such that } n \leq c \text{. Therefore, } O(n^2) \notin O(n) $$

Why is it `false` ($\notin$)? This is because $O(n)$ can't be an **upper bound** for $O(n^2)$, and this is right, since a linear function obviously grows lesser than a quadratic one. 

An "upper bound" is the function describing the worst-case growth, in this case: $O(n)$. However, it's impossible for $O(n)$ to be an upper bound since the growth of the function is already $O(n^2)$, which is already greater than that upper bound.

For instance, if our upper bound is a function like $g(x) = n^3$, $h(x) = 3^n$, or $j(x) = (n!)$, then it would be valid as the growth of those functions are greater than that of $f(x) = n^2$.

From this, we know that $g(x)$ (our upper bound) should obviously be greater than or equal to $f(x)$ for it to be a possible **upper bound** for $f(x)$.

Noting this and our limit definition, we can say that:

$$\text{If } \lim_{x\to+\infty} \frac{f(x)}{g(x)} \leq 1 \text{, then the function } O(g(x)) \text{ can be considered an upper bound for } f(x)$$

This limit also fits our requirements, as if it's equal to $1$, it would indicate that $f(x)$ and $g(x)$ grow at the same rate as $x \to \infty$. If it's less than $1$, or $0$ since $x$ would be approaching $\infty$, we know that the denominator: $g(x)$ grows faster than the numerator: $f(x)$, thus, allowing it to be considered as an **upper bound**.

I suggest however that you'd use the proof instead (since it might be asked for). The limit definition is just a simpler way to think about this. 

## Big Θ notation

Big $\Theta$, or Big Theta, represents the average-case time complexity of an algorithm, where $f(x)$ is our algorithm, and $g(x)$ is our "tight bound".

Formally, to show that $f(x) \in \Theta(g(x))$, we prove that:

$$c1 \cdot g(x) \leq f(x) \leq c2 \cdot g(x) \hspace{1em} \text{for all}~x \geq x_0, \text{where } c1, c2 > 0~\text{and}~x_0~\text{is a constant}$$

Now, why the introduction of $c1$ and $c2$? This is because Big $\Theta$ is a **tight bound** on the growth rate of the function. To put it simply, $f(x)$ **must** match the growth rate of $g(x)$ while ignoring the constants. 

For example, let's try proving that $\Theta(3n^2) \in \Theta(n^2)$:

$$\text{If } f(x) \in \Theta(g(x)) \text{, then } c1 \cdot g(x) \leq f(x) \leq c2 \cdot g(x) \text{ for all ... }$$
$$c1 \cdot g(x) \leq f(x) \leq c2 \cdot g(x)$$
$$c1 \cdot n^2 \leq 3n^2 \leq c2 \cdot n^2$$
$$\frac{c1 \cdot n^2}{n^2} \leq \frac{3n^2}{n^2} \leq \frac{c2 \cdot n^2}{n^2}$$
$$c1 \leq 3 \leq c2$$
$$\text{There exists a constant } c1 \text{ and } c2 \text{ such that } c1 \leq 3 \leq c2 \text{. Therefore, } \Theta(3n^2) \in \Theta(n^2) $$

Here, $\Theta(3n^2)$ has the same growth rate as $\Theta(n^2)$, with the only key difference being the constant $3$. Therefore, it would be `true`.

From this, we know that $g(x)$ should have an equal growth rate to $f(x)$ for it to be a **tight bound** for $f(x)$.

Noting this and our limit definition, we can say that:

$$\text{If } \lim_{x\to+\infty} \frac{f(x)}{g(x)} = L \text{, where } L > 0 \text{ and } L \text{ is a constant (finite), }  \\ \text{then the function } \Theta(g(x)) \text{ can be considered a tight bound for } f(x)$$

::: tip
Since Big $\Theta$ is a **tight bound**, any function $g(x)$ that is considered as a **tight bound** for $f(x)$ is also a **possible** **upper bound** (Big $O$) and **lower bound** (Big $\Omega$). 
:::

## Big Ω notation

Big $\Omega$, or Big Omega, represents the best-case time complexity of an algorithm, where $f(x)$ is our algorithm, and $g(x)$ is our "lower bound". This is basically the opposite of Big O. Here, we wan't $g(x)$ to be lower than $f(x)$, since $g(x)$ is our **lower bound**.

Formally, to show that $f(x) \in \Omega(g(x))$, we prove that:

$$f(x) \geq c \cdot g(x) \hspace{1em} \text{for all}~x \geq x_0, \text{where } c > 0~\text{and}~x_0~\text{is a constant}$$

For example, let's try proving that $\Omega(n^2) \in \Omega(n)$:

$$\text{If } f(x) \in \Omega(g(x)) \text{, then } f(x) \geq c \cdot g(x) \text{ for all}~x \geq x_0, \text{where } c > 0~\text{and}~x_0~\text{is a constant}$$
$$f(x) \geq c \cdot g(x)$$
$$n^2 \geq c \cdot n$$
$$\frac{n^2}{n} \geq \frac{c \cdot n}{n}$$
$$n \geq c$$
$$\text{There exists a constant } c \text{ such that } n \geq c \text{. Therefore, } \Omega(n^2) \in \Omega(n) $$

Obviously, a linear function grows lesser than a quadratic one, therefore, $\Omega(n)$ can be a **lower bound** for $\Omega(n^2)$. Thus, $\Omega(n^2) \in \Omega(n)$.

From this, we know that $f(x)$ should obviously be greater than or equal to $g(x)$ for $g(x)$ to be a possible **lower bound** for $f(x)$.

Noting this and our limit definition, we can say that:

$$\text{If } \lim_{x\to+\infty} \frac{f(x)}{g(x)} \geq 1 \text{, then the function } \Omega(g(x)) \text{ can be considered a lower bound for } f(x)$$

Just like before, this limit also fits our requirements, as if it's equal to $1$, it would indicate that $f(x)$ and $g(x)$ grow at the same rate as $x \to \infty$. If it's greater than $1$ or $+\infty$, we know that the denominator: $g(x)$ grows slower than the numerator: $f(x)$, thus, allowing it to be considered as a **lower bound**.

## Why ∈?

If you remembered sets from Mathematics, the symbol $\in$ means that an element is part of a set. What set? The set of functions with that "complexity".

For example, let's take our function from before: $f(x) = x^2+4x+16$. Remember that Big O means the **upper bound** on the function. Since our function has a growth of $x^2$ (largest growing term), it's included in the set of $O(n^2)$, because $n^2$ can be an **upper bound** on the function $f(x)$. Therefore, we can say that $x^2+4x+16 \in O(n^2)$.

What about $O(n) ∈ O(n^2)$? Well, this simply means if the set of functions whose upper bound is $O(n)$ can have an **upper bound** of $O(n^2)$. The answer? Yes, because $O(n^2)$ is an **upper bound**. If a function's **upper bound** is already $O(n)$, then anything greater than or equal to the growth of $O(n)$ can be an upper bound, since the only requirement is that it must not **exceed** it. If a function has an upper bound of $O(n)$, it most certainly can have an $O(n^2)$ one, because it's growth can't exceed $O(n)$ already, what more about $O(n^2)$?

## Advanced Knowledge: Limit definition, Derivatives and L'Hôpital's rule

::: warning
In this section, we are going to dive deep into how the limit definition "works", using more advanced concepts such as **Derivatives** and **L'Hôpital's rule**. This information can provide a deeper understanding about how the limit definition works. However, mastering these details is not required nor included for any of our CS activities.

If you are willing or eager to expand and enhance your understanding of how the limit definition works with the Big O, Big Θ and Big Ω notation, feel free to read this section. However, if you don't need to or prefer not to do so, then you are free to skip to the next section. The content included in this section is intended for people who would like to know more, and will not be a requirement for succeeding sections. 
:::

