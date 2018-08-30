class MySillyClass extends React.Component {
  constructor(props) {
    super(props)
    //What am I doing here? It's not 1994, this isn't Java.
    //Why am I in a constructor...geeze.
    //💩
  }
  ughAnotherclassMethod() {
    //grrr what's `this` right now? Should I bind it?
  }

  componentWillMount() {
    /*I was here before
          this lifecycle became UNSAFE. 2010's kids represent.  */
  }
  render() {
    return <div> All this damn boiler plate. Haaaaaalp me! </div>
  }
}
