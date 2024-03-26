// React - JS library

// JSX
/* Short for JavaScript XML, a JavaScript syntax extension for inlining XML and
HTML in JavaScript. For example, this code could be compiled into standard
JavaScript function calls to create a heading element:
const h1 = <h1> Hello World! </h1>;
 */

// ReactDOM
/*
  A package used with React to work as the bridge between React
  elements and the actual DOM in the browser. The most frequently used ReactDOM
  function is the render which adds the component to the dom
  
  ReactDom.render(
    <h1> Hello World! </h1>,
    document.getElementById('root')
  );
*/

// React.Fragment

/*  A React container component that renders its children without adding
  any additional DOM nodes. This can be used for returning multiple adjacent
  elements without wrapping them in an unnecessary element. For example:

  <React.Fragment>
    <h1> Hello world </h1>
    <h2> Hello world </h2>
  <React.Fragment>

Fragments can also be created by using an empty tag, rather than the
<>
<>
*/

// Conditional Rendering

/*
The process of changing the returned element of a component based on some
condition. Conditional rendering can be achieved in a variety of ways, but
the most common utilizes ternary operators or short circuit evaluation. This
works because null undefined true and false all do not render anything

<React.Fragment>
    { myBool ? reactComponent : null }
  <React.Fragment>
*/

// Prop
/*
A JavaScript object passed as a parameter to functional components, containing
all of the key-value pairs that were passed as attributes to the component.
*/

// State
/* 
  Data specific to an instance of a component that persists between renders
  and causes re-renders when changed.
*/

// Hook
/*
  
  A JavaScript function used to "hook" into React features such as state and
  the larger component lifecycle. The names of hooks always begin with
*/

// useState
/**
<p>
  A React hook for creating stateful components. The <span>useState</span>
  function takes in an initial state value (or a function that returns that
  initial value), and it returns an array with two elements: the current state
  value and a setter function. For example:
</p>

const [number, setNumber] = useState(1);
 */

// useReducer
/**
<p>
  An alternative React hook for creating stateful components, oftentimes used
  for more complex state. The <span>useReducer</span> function takes in a
  reducer function and the initial state. It returns an array with two
  elements: the current state value and a dispatch function.
</p>

  The reducer function takes in the previous state and an action object
  as parameters, then it returns the new state. Usually the action object will
  have a <span>type</span> property, which will be used in a switch statement.
  
  The dispatch function will then take in an object, which will be passed as
  the action to the reducer function.
 */

// Lifting State up
/**
 * 
  A common React pattern of moving shared state up to the lowest common
  ancestor component in the tree. This allows for a single component to keep
  track of the state and pass the current value and setter function down
  through props.

  https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example
 */

// Controlled Component

/**
<p>
  A pattern of using React state to control the current state of an input,
  rather than allowing the native elements to control their own state (known as
  an <b>uncontrolled component</b>). For example, an input can be controlled via
  the <span>value</span> and <span>onChange</span> props (note that in React,
  <span>onChange</span> works the same as <span>onInput</span>). For example:
</p>

https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components
 */


// Component Lifecycle
 /**
<p>
  The different stages that an instance of a component goes through.
  There are three primary stages to the React lifecycle:
</p>

<ol>
  <li>
    <b>Mounting</b>: The component renders for the first time.
  </li>
  <li>
    <b>Updating</b>: The component re-renders whenever state changes or the
    props are updated by the parent component. A component can update many
    times without ever mounting again.
  </li>
  <li>
    <b>Unmounting</b>: The component is removed from the DOM. This is the final
    stage of the lifecycle, and a component cannot update again once it has
    been unmounted. However, a new instance of the component can still be mounted.
  </li>
  */

  // useEffect
  /**
   <p>
  A React hook for performing side effects around the component lifecycle. The
  <span>useEffect</span> hook takes in a callback function and an optional
  dependency array.
   </p>
  <p>
  If no dependency array is provided, the callback function
  will run on every render. If there is a dependency array provided, the
  callback function will only run on <b>mount</b> or when an item in that array has
  changed (note that objects must be new objects to be considered to have changed).
  To avoid bugs related to effects using stale values from previous renders,
  the dependency array should contain all values that the callback uses that
  could change between renders.
</p>
<p>
  The callback function can also return a cleanup function, which will run on
  <b>unmount</b> and before the main effect function runs on any re-renders.
</p>
  */

// useLayoutEffect
/**
<p>
  A React hook for performing side effects around the component lifecycle in the
  same way as <span>useEffect</span>. The only difference between the two
  functions is that <span>useLayoutEffect</span> works synchronously, meaning
  the effects always finish running before the browser paints. This hook
  should only be used for effects that will make visual changes to the DOM,
  because otherwise the synchronous nature will give worse performance
  than <span>useEffect</span> without any benefits.
</p>
 */

// Ref

/**
 <p>
  A React value specific to an instance of a component that persists between
  renders, but updating the value does not cause a re-render (unlike <b>state</b>).
  Refs are oftentimes used to reference the DOM node associated with the component,
  which can be achieved with the <span>ref</span> attribute.
 </p>

// useRef
 <p>
  A React hook for creating a ref. The <span>useRef</span> hook takes in an
  initial value and returns a ref. The ref is simply an object with a
  <span>current</span> property set to the current value.
</p>
 */

// forwardRef

/**
 * <p>
  A function used by a custom component to forward a ref attribute on to
  a child element. The forwardRef function is a <b>higher-order component</b>
  function, meaning it takes in a component and returns a new one. In this
  case, it takes a component that has a second parameter for the ref. For
  example:
</p>
 */

// useImperativeHandle
/**
 * <p>
  A React hook for customizing the value provided to a parent component when
  using a <b>ref</b>. The <span>useImperativeHandle</span> hook takes in a
  ref as the first parameter, followed by a callback function and an optional
  dependency array.
</p>

<p>
  The return value of the callback function will act as the <span>current</span>
  value of the ref. If any item in the dependency array changes between renders,
  the callback function will be invoked again to recalculate the
  <span>current</span> value.
</p>

<p>
  Since <span>useImperativeHandle</span> requires a ref on a custom
  component, it should always be used with <span>React.forwardRef</span>. For
  example:
</p>
https://react.dev/reference/react/useImperativeHandle
 */

// context

/**
 * <p>
  A way to pass values down a component tree without needing to pass
  props through every component (known as <b>prop drilling</b>). Contexts
  are generally useful for global state needed throughout an application or page,
  which would be inconvenient to pass as props to every element needing it.
</p>
 */

// createContext and provider component and useContext
/**
 * <p>
  A react function for creating a context object. This function takes in a default
  value, which will be used if there is no matching context provider in a tree.
  For example, this would create a context that could be used to keep track of
  a user's selected theme:
</p>
<p>
  This context would then have a <b>provider</b> component, which must be above
  any components in the tree that wish to use the context. The <span>value</span> prop
  will be passed as the value to all children using the context. For example:
</p>
<p>
  A React hook for using a context. The <span>useContext</span> function
  takes in a context object created with <span>createContext</span>, and it
  returns the value from the first <b>context provider</b> of that context
  above it in the tree. For example:
</p>
 */

// useMemo
/**
 * <p>
  A React hook for memoizing a value. The <span>useMemo</span> function takes
  in a function that returns a value to be memoized and a dependency array.
  The <span>useMemo</span> function then returns the memoized value, and it
  only calls the passed in function to recalculate the value if an item in the
  dependency array changes. For example:
</p>
 */

// useCallback
/**
 <p>
  A React hook for memoizing a function. This function works the exact same as
  <span>useMemo</span>, except rather than memoizing the return value of a
  function, it memoizes the entire function. This can be useful for a variety
  of reasons, such as if a callback is passed into a dependency array that
  requires it to not change on every render. For example:
</p>
 */

// React.memo
/**
 <p>
  A React <b>higher-order component</b> that takes in a component and returns
  a memoized version of that component. If the props have not changed, wrapping
  a component in <span>React.memo</span> will cause it to avoid re-rendering.
  This function can optionally also take in a second callback function as a
  parameter to determine when the component should re-render with more fine
  control. For example, this component will only need to re-render when the
  number prop changes:
</p>
 */

// React.lazy
/**
 <p>
  A React function for dynamically importing components, creating a potential
  performance boost when certain components are included in a module but not
  necessary for the initial render. The <span>lazy</span> function takes in a
  callback function that is run when the component is used, and this function
  should return a call to the <span>import</span> function. For example:
</p>
 */

// React.suspense
/**
 <p>
  A react component for specifying a fallback interface while a child component
  is preparing to render (such as waiting for a lazy import). The
  <span>Suspense</span> component takes a <span>fallback</span> prop of a
  React element, and its <span>children</span> prop is a suspending component.
  For example:
</p>
 */

// Custom hook
/**
 * <p>
    A helper function that uses hooks. When hook code becomes redundant or
    too long to easily read, it can be helpful to move that code into a helper
    function. To denote that this helper function uses a hook itself, the name
    should be prefixed with <span>use</span> just like the built-in React hook
    functions.
  </p>
 */

  /**
   * Portal
   <p>
    A built-in method for rendering React elements into a DOM node outside
    of the parent React tree.
  </p>
   */


  /**
   * Class-Based Component
<p>
  A JavaScript class that extends the <span>React.Component</span> class and
  acts as a React component.
</p>

<p>
  All class-based components must implement a <span>render</span> method, which
  usually returns JSX similar to a functional component.
</p>

<p>
  Instead of taking props as a parameter, all class-based components store their
  props in the <span>this.props</span> instance variable. Moreover, state
  is stored in <span>this.state</span> and updated using the
  <span>this.setState</span> method.
</p>

<p>
  Class-based components cannot use hooks. Instead, they can implement a
  variety of lifecycle methods that work similar to hooks. These are some of the
  more common ones:
</p>

<ul>
  <li>
    <span>componentDidMount</span>: Runs immediately after the component mounts.
    This method is usually used for setting up subscriptions.
  </li>
  <li>
    <span>componentDidUpdate</span>: Runs immediately after the component
    updates due to a state or props change. A common use case for this method
    is for network requests that depend on props or state.
  </li>
  <li>
    <span>componentWillUnmount</span>: Runs right before a component unmounts.
    This method is usually used for cleaning up any subscriptions.
  </li>
  <li>
    <span>shouldComponentUpdate</span>: Similar to <span>React.memo</span>,
    determines if the component should re-render based on new props and new
    state values.
  </li>
</ul>
</div></div><a href="https://react.dev/reference/react/Component" target="_blank" class="U7AYZbPGCl4OMCZOalKm" rel="noreferrer">Learn more: <span class="Link Link--fe xK6A5iqSxJsZrNgDxQet">https://react.dev/reference/react/Component</span></a></li>
   */

/**
 * Error Boundary
 * <p>
  A React component that catches errors in child components, preventing the
  entire application from crashing from a single error.
</p>
<p>
  Error boundaries must be <b>class-based components</b> in order to take
  advantage of two lifecycle methods:
</p>

<ul>
  <li>
    <span>static getDerivedStateFromError(error)</span>: Called during the render
    phase and updates the current state of the component.
  </li>
  <li>
    <span>componentDidCatch(error, errorInfo)</span>: Called during the commit
    phase for the purpose of side-effects related to the caught error.
  </li>
</ul>
 */

/**
 * React Debugging
 * 
 * <div class="ChQQkkDj2agwzMjoqxu5"><h3 class="V3jdxnvCj7E5zOoFB9cf">Key Terms</h3><ul class="_12CItVfN_biOnosoVtH"><li><h4 class="sCqnGtY08z6eLzfrJgxV">React.StrictMode</h4><div class="ChLV1pplx9xLHFaTcf_J default"><div class="html">
<p>
  A React component for putting a component in strict mode. Strict mode has two
  primary benefits for assisting in debugging:
</p>
<ul>
  <li>
    It provides warnings when using deprecated functions or lifecycle methods.
  </li>
  <li>
    It double-invokes some functions, such as functional components. This helps
    find potential bugs related to side-effects in functions that should not
    have side-effects.
  </li>
</ul>
</div></div><a href="https://react.dev/reference/react/StrictMode" target="_blank" class="U7AYZbPGCl4OMCZOalKm" rel="noreferrer">Learn more: <span class="Link Link--fe xK6A5iqSxJsZrNgDxQet">https://react.dev/reference/react/StrictMode</span></a></li><li><h4 class="sCqnGtY08z6eLzfrJgxV">React.Profiler</h4><div class="ChLV1pplx9xLHFaTcf_J default"><div class="html">
<p>
  A React component for tracking how often a component renders. The Profiler
  requires two props:
</p>

<ul>
  <li>
    <span>id</span>: A unique identifier.
  </li>
  <li>
    <span>onRender</span>: A callback function to run after the component
    renders (during the commit phase).
  </li>
</ul>

<p>
  For performance reasons, the Profiler is ignored in production mode.
</p>
</div></div><a href="https://react.dev/reference/react/Profiler" target="_blank" class="U7AYZbPGCl4OMCZOalKm" rel="noreferrer">Learn more: <span class="Link Link--fe xK6A5iqSxJsZrNgDxQet">https://react.dev/reference/react/Profiler</span></a></li><li><h4 class="sCqnGtY08z6eLzfrJgxV">React DevTools</h4><div class="ChLV1pplx9xLHFaTcf_J default"><div class="html">
<p>
  An official React browser extension for debugging React.
</p>
 */

/**
 * Best Practices
 * 
 * 1 component export per file
 * 
 * File names should match component names
 * 
 * Dir structure:
 * -src
 *  -components
 *    -base
 *    -pages
 *      -home
 *      -about
 *  -hooks
 * -app.js
 * 
 * Refactor repeated UI into helper components and repeated hook logic into custom hooks
 * 
 * Consistent CSS
 *  -import css file at top of each component module
 *  -have a global style sheets
 * 
 * Keep using html semantics
*/

/**
 * React Theory
 * <ul class="_12CItVfN_biOnosoVtH"><li><h4 class="sCqnGtY08z6eLzfrJgxV">React Element</h4><div class="ChLV1pplx9xLHFaTcf_J default"><div class="html">
<p>
  The internal object representation of a node in the React tree. React elements
  can represent either DOM nodes or React components.
</p>
</div></div><a href="https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html#elements-describe-the-tree" target="_blank" class="U7AYZbPGCl4OMCZOalKm" rel="noreferrer">Learn more: <span class="Link Link--fe xK6A5iqSxJsZrNgDxQet">https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html#elements-describe-the-tree</span></a></li><li><h4 class="sCqnGtY08z6eLzfrJgxV">Virtual DOM</h4><div class="ChLV1pplx9xLHFaTcf_J default"><div class="html">
<p>
  A "virtual" representation of the DOM kept by React internally. Since this
  data structure is not tied to the actual DOM, it is much quicker to update
  than the DOM.
</p>
</div></div><a href="https://reactjs.org/docs/faq-internals.html" target="_blank" class="U7AYZbPGCl4OMCZOalKm" rel="noreferrer">Learn more: <span class="Link Link--fe xK6A5iqSxJsZrNgDxQet">https://reactjs.org/docs/faq-internals.html</span></a></li><li><h4 class="sCqnGtY08z6eLzfrJgxV">Reconciliation</h4><div class="ChLV1pplx9xLHFaTcf_J default"><div class="html">
<p>
  The algorithm used by React to determine the "diff" between two trees of
  React elements. After each state update, React runs the reconciliation
  algorithm to determine what has changed, and that changelog is sent to the
  rendering function (in the case of the browser, this is from React DOM)
  which can update the page using the information.
</p>
</div></div><a href="https://reactjs.org/docs/reconciliation.html" target="_blank" class="U7AYZbPGCl4OMCZOalKm" rel="noreferrer">Learn more: <span class="Link Link--fe xK6A5iqSxJsZrNgDxQet">https://reactjs.org/docs/reconciliation.html</span></a></li></ul>
 */

/**
 * Some buzz words
 * 
 * <ul class="_12CItVfN_biOnosoVtH"><li><h4 class="sCqnGtY08z6eLzfrJgxV">Redux</h4><div class="ChLV1pplx9xLHFaTcf_J default"><div class="html">
<p>
  A JavaScript state-management library often used with React. Redux uses
  reducer functions to create a global store that any component can read from.
</p>
</div></div><a href="https://redux.js.org/" target="_blank" class="U7AYZbPGCl4OMCZOalKm" rel="noreferrer">Learn more: <span class="Link Link--fe xK6A5iqSxJsZrNgDxQet">https://redux.js.org/</span></a></li><li><h4 class="sCqnGtY08z6eLzfrJgxV">Recoil</h4><div class="ChLV1pplx9xLHFaTcf_J default"><div class="html">
<p>
  A JavaScript state-management library built for React. Recoil uses <b>atoms</b>,
  which are global pieces of state that any component can subscribe to.
</p>
</div></div><a href="https://recoiljs.org/" target="_blank" class="U7AYZbPGCl4OMCZOalKm" rel="noreferrer">Learn more: <span class="Link Link--fe xK6A5iqSxJsZrNgDxQet">https://recoiljs.org/</span></a></li><li><h4 class="sCqnGtY08z6eLzfrJgxV">Server-Side Rendering</h4><div class="ChLV1pplx9xLHFaTcf_J default"><div class="html">
<p>
  A method of rendering an application where the server generates the final
  HTML page, rather than giving the client an empty HTML file and the scripts
  needed to generate the page. Server-side rendering can create significant
  performance improvements while also helping with search-engine optimization.
</p>
</div></div></li><li><h4 class="sCqnGtY08z6eLzfrJgxV">Static-Site Generation</h4><div class="ChLV1pplx9xLHFaTcf_J default"><div class="html">
<p>
  Similar to server-side rendering, a method of rendering an application where
  the server generates the final HTML pages, rather than giving the client an
  empty HTML file and the scripts needed to generate the page. The key
  distinction between static-site generation and server-side rendering is that
  static-site generation creates all possible HTML files at build time, whereas
  server-side rendering creates a new HTML file for each server request.
</p>
</div></div></li><li><h4 class="sCqnGtY08z6eLzfrJgxV">Next.js</h4><div class="ChLV1pplx9xLHFaTcf_J default"><div class="html">
<p>
  A JavaScript framework built around React. The primary use case for Next.js
  is server-side rendering, but it also includes a wide variety of other tools
  to simplify development and improve performance.
</p>
</div></div><a href="https://nextjs.org/" target="_blank" class="U7AYZbPGCl4OMCZOalKm" rel="noreferrer">Learn more: <span class="Link Link--fe xK6A5iqSxJsZrNgDxQet">https://nextjs.org/</span></a></li><li><h4 class="sCqnGtY08z6eLzfrJgxV">Gatsby</h4><div class="ChLV1pplx9xLHFaTcf_J default"><div class="html">
<p>
  A JavaScript framework with the primary use case of static-site generation.
  In addition to static-site generation, Gatsby also includes a wide variety of
  other features that simplify development and improve performance, similar to
  <b>Next.js</b>.
</p>
</div></div><a href="https://www.gatsbyjs.com/" target="_blank" class="U7AYZbPGCl4OMCZOalKm" rel="noreferrer">Learn more: <span class="Link Link--fe xK6A5iqSxJsZrNgDxQet">https://www.gatsbyjs.com/</span></a></li><li><h4 class="sCqnGtY08z6eLzfrJgxV">React Router</h4><div class="ChLV1pplx9xLHFaTcf_J default"><div class="html">
<p>
  A React library for declaratively controlling page routing from the
  client-side.
</p>
</div></div><a href="https://reactrouter.com/" target="_blank" class="U7AYZbPGCl4OMCZOalKm" rel="noreferrer">Learn more: <span class="Link Link--fe xK6A5iqSxJsZrNgDxQet">https://reactrouter.com/</span></a></li></ul>
 */