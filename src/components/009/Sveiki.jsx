function Sveiki({a}) {
   if (a === 1) {
       return <h1 style=
       {
           {
               color: 'red'
           }
       }>Zebrai ir Bebrai</h1>
   };
   if (a === 2) {
       return <h1
       style={
           {
               color: 'green'
           }
       }>Zebrai ir Bebrai</h1>
   };
};
// Sveiki(1)
export default Sveiki;