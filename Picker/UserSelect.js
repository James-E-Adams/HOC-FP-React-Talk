import compose from "recompose/compose"
import withHandlers from "recompose/withHandlers"
import withPropsOnChange from "recompose/withPropsOnChange"
import withProps from "recompose/withProps"

import Picker from "Picker"
import property from "__lib__/object/fpProperty"
import enhanceUserSelect from "web/src/Issues/enhanceUserSelect"
import withoutProps from "__lib__/react/withoutProps"

const onValueChange = ({ setSelectedUser }) => value => setSelectedUser(value)

const mapUsersToItems = ({ users }) => ({
  items: users && users.map(property("id"))
})
export default compose(
  enhanceUserSelect,
  withPropsOnChange(["users"], mapUsersToItems),
  withHandlers({ onValueChange }),
  withProps({ placeHolder: "Select a member from your team..." }),
  withoutProps(["style"])
)(Picker)
