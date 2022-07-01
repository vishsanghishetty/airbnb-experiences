1. What do props help us accomplish?
   props help us achieve handling dynamic data and thereby making the component more reusable

2. How do you pass a prop into a component?
   <MyAwesomeHeader title="???" />

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?

   No, because the JSX we use to describe native DOM elements will
   be turned into REAL DOM elements by React. And real DOM elements
   only have the properties/attributes specified in the HTML specification.
   (Which doesn't include properties like `blahblahblah`)

4. How do I receive props in a component?
   the parameters for the component function will receive a parameter (name can be anything here props)
   function Navbar(props) {
   return (
      <header>

      </header>
      )
      }

5. What data type is `props` when the component receives it?
   props is an object when the component receives it
