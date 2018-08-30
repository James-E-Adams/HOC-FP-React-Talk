import compose from "recompose/compose"
import withProps from "recompose/withProps"
import withState from "recompose/withState"
import { connect } from "react-redux"
import withHandlers from "recompose/withHandlers"
import Picker from "Picker"
import { getBooks } from "__act__/projects/book"
import withFilteredList from "__screens__/Project/Books/withFilteredList"

const getValueLabel = ({ books }) => id => {
  //return a label
}

const mapState = state => ({
  //grab some data from the store
})

const newFilters = drawingSheetIdentifier => ({
  skip: 0,
  take: 30,
  tags: [],
  revisionDrawingName: "",
  drawingSheetIdentifier
})

const onValueChange = ({ setSelectedDrawing }) => value =>
  setSelectedDrawing(value)

export default compose(
  withProps({ kind: "drawing", placeHolder: "Select a drawing..." }),
  withState("filters", "setFilters", newFilters("")),
  connect(mapState),
  withFilteredList,
  withHandlers({ getValueLabel, onValueChange })
)(Picker)
