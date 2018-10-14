# Functional React. Is it possible?

//Warning: Lots of code. If you're triggered by seeing large blocks of javascript, please consult your loved ones/religious leader/comfort puppy before proceeding.

Sorry for the clickbaity title. Let me be more upfront with you. 

Yes. Yes it is.

And I'd like to show you how. But first, a little background.

I started out with React in the second half of 2017. I was pretty green with web development, but something about React stuck with me - more so than any other framework.

I was able to learn bits and pieces at my previous job, but it was only proofs of concepts and new codebases that weren't getting shipped anytime soon. 

I was pretty hungry to work on React full time. And I wasn't able to do so with my position at the time. Luckily, I found Drawboard pretty soon and the rest is history. And the present? And the future? And the rest is past/present/future/timeless.

A few weeks before starting, I was emailing with one of my colleagues - the other front-end dev - and he gave me a list of technologies/frameworks that were being used on the web app.


<insert picture of email from gc.>

Before starting at drawboard - I was writing pretty typical React code. It looked a little like this:

<insert component slide.>


Everything has changed. It's very infrequent that I have to use the class keyword. Most of our view logic is composed of Higher Order Components and utility functions. Small building blocks that are easily grokked (understood) in isolation, but powerful upon composition.

<insert tweet about the class keyword.>

Before we dive into the rabbithole that is FP in React - let's start with a few explanations.

# Higher Order

The order of a function refers to how deep it is. Your typical function is single order. Upon execution - with some stuff (arguments) or otherwise - it does a thing, and then finishes execution (by returning some stuff or nothing).

A higher order function behaves on a grander scale. It has loftier aspirations.

<in quote style>: A higher order function either takes a function as an argument or returns a function. Or both.


<insert diagram.>

<insert kramer thing.>

<insert component diagram>

It's okay if this isn't crystal clear yet. But if you persist, I assure you you'll be using higher order functions and components all over the place once you can grasp their POWER.

Surreptiously, if you've jumped on the react/redux bandwagon anytime in the last couple years, you've probably used higher order components without even realising it.

Here's a common one:

<insert redux connect picture>

<quote from the slide immediately after>

Let's taeke a look at the same component written in two different styles.
<insert batman gif>
<insert a whole bunch of code>

This brings us to Recompose!

<insert andrew clark slide>

Explain recompose.

Let's take a look at some code. I promise it's quite approachable  - it isn't doing anything mega funky under the hood. It does exactly what it says on the box.

<insert mapProps>

<insert withState simplified with some comments>

Now - recompose has some really useful HOCs. But they're basic, general and won't solve every problem specific to your application. However - it's simple and you SHOULD roll your own to suit your needs.

Here is an example of an HOC that I wrote to avoid implementing the same logic across many components that have to store some local state which belongs in a Set. For those unfamiliar with how Sets behave in JS - I'd recommend checking out the MDN documentation (insert link).

<insert code and explanation>

quote: The extent to which you can compose HOCs is endless. These are the building blocks with which your application is built.


<insert maybe screenshot of canvas ui export from slides>

Now - I've written a whole chunk about the what (todo italics). But let's jump to the extensive and overwhelmingly positive _why_. (Typical FP fanboy trying to evangelize FP.)

Benefits in general:

//todo

React specific benefits:

- Component code reuse is significantly more feasible.
- This extends to react native
- The benefits are compounding if your whole codebase/all your components follow these patterns.


As we saw above - The components you end up using are generally compositions of 1-many Higher Order Components (HOCs) around a generic component (such as a modal, a button, a link, a gear (whoops, wrong type of engineering)).

Let's check out some more code!

<insert picker code>

//Sell it a bit more

I'm not a massive fan of selling some practice/product so enthusiastically whilst at the same time, neglecting to cover any potential downsides.

Here are a few downsides of writing all your code like this:

- Performance characteristics are a bit of a grey area. I'm not saying that react code written functionally is _less_ performant than functionally identical 'traditional' react view logic - but I've never seen any experiments and I'm yet to delve into it. This is because so far, we haven't had any problems with jank on the bullclip web app. I'd be very interested to hear if anyone has looked into this - especially with the profiling capabilities of the new react dev tools (link) - so please get in touch if you do so.

- Sometimes there are certain things that you either can't do, or are made harder than they should be using this pattern. Using refs is doable but less intuitive. If you're hooking into the lifecycle and doing very complex stuff - you might find it easier to use a class. But you can treat these things similarly to how you should treat impure, side-effecty code in a predominately functional codebase. Isolate it, acknowledge that you're using some impure code, use it, and move on. 

- React dev tools go deep. Exploring the component tree is significantly more difficult (but far from impossible) because each HOC adds another component into the tree.

<insert photo of devtools.>

But, you could see this as a plus if you appreciate the ability to see which HOC added which props into the chain.


#React Native

I've been doing some sporadic experimentation with react native this year in our iOS app. (link article). The ability to do so quickly and get features out the door was heavily influenced (find a better word) by the way the web codebase is structured. 

When I originally gave this talk - I'd just finished off a feature in react native. It added issue management support (add link to drawboard blog) to our iOS app. So it was pretty cool that I didn't even have to go hunting to find examples of why functional programming in react is so damn awesome. It was right there!

<insert chain of pulling out enhance from Issue slides>

And then I was able to use this HOC (composed of smaller HOCs) in the iOS app. (Note on isolating view specific code.)


Diagram idea:

Showing the composability of multiple HOCs
 (as a ... -> function -> function -> function -> ...)
 And then showing that it is still a single Component -> HOC -> Component. 


#Exploring the alternatives

- Render props. If I didn't have access to HOCs (cut to an apocalyptic, dystopian future where functions max out at single order) - I like this pattern the most. It's out of scope for this article, but (insert link).

- Collections of pure functions that you hook into from class components? (A bit ugly but still allows code reuse. Dealing with 'this' could be a bit yuck.)

- Prototypal/Class based (extends) inheritance everywhere? (Please don't do this.)

- Copy/Paste code everywhere? (I'm joking. Stahp, pls.) (I'm joking. Stahp, pls.)

I hope I've given a tasty enough selection of what's possible when you write React like this. And maybe a little bit of insight into the journey I've undertaken in the last year or so.
I'm a big fan of putting your work out in public and hearing alternate opinions and ways of doing things. Please get in touch if you have any questions/want to tell me why you think this is bad or why I'm wrong or why I smell. I promise not to yell functional programming terms at you. (I'll just put all that angst into a _curry_. )

You can find out more about me at https://james.now.sh or by stalking my GitHub @James-E-Adams.

















