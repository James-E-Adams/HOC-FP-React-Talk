import React from "react"
//------------------Written as a class---------------------//
class Farm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tools: ["hammer", "scythe", "sickle"]
    }
  }

  componentDidMount() {
    fetch("/tools")
      .then(({ body: { tools } }) => this.setState(tools))
      .catch(err =>
        console.log("Oh no, your tools got lost. Here's why: ", err)
      )
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.tools !== this.state.tools
  }

  render() {
    const { tools } = this.state
    const { someProp, anotherProp } = this.props
    if (!(tools && tools.length)) {
      return null
    }
    return (
      <div>
        Here are all the tools in the farm:
        <ul>
          {tools.map((tool, index) => (
            <li key={index}> {tool} </li>
          ))}
        </ul>
        {someProp} - {anotherProp}
      </div>
    )
  }
}
// And now the exact same thing, written functionally.
//---------------------------------------------------------------//
// Only the 'view' logic.
const BaseFarm = ({ someProp, anotherProp, tools }) => (
  <div>
    Here are all the tools in the farm:
    <ul>
      {tools.map((tool, index) => (
        <li key={index}> {tool} </li>
      ))}
    </ul>
    {someProp} - {anotherProp}
  </div>
)
// All the 'other' stuff.
const didMount = ({ setTools }) =>
  fetch("/tools")
    .then(({ body: { tools } }) => setTools(tools))
    .catch(err => console.log("Oh no, your tools got lost. Here's why: ", err))

const shouldNotRender = ({ tools }) => !(tools && tools.length)

const Farm = withState("tools", "setTools", ["hammer", "scythe", "sickle"])(
  // N.B: lifecycle isn't from recompose
  lifecycle({ didMount })(
    branch(shouldNotRender, renderNothing)(
      onlyUpdateForKeys(["tools"])(BaseFarm)
    )
  )
)

//Or better:

const Farm = compose(
  withState("tools", "setTools", ["hammer", "scythe", "sickle"]),
  lifecycle({ didMount }),
  branch(shouldNotRender, renderNothing),
  onlyUpdateForKeys(["tools"])
)(BaseFarm)

// Alternatively.
const enhance = compose(
  withState("tools", "setTools", ["hammer", "scythe", "sickle"]),
  lifecycle({ didMount }),
  branch(shouldNotRender, renderNothing),
  onlyUpdateForKeys(["tools"])
)
// enhance is a HOC, composed of a few other HOCs.

// It takes a component (BaseFarm) and returns Farm.
const Farm = enhance(({ someProp, anotherProp, tools }) => (
  <div>
    Here are all the tools in the farm:
    <ul>
      {tools.map((tool, index) => (
        <li key={index}> {tool} </li>
      ))}
    </ul>
    {someProp} - {anotherProp}
  </div>
))
