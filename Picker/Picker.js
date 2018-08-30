import React from 'react'
import compose from 'recompose/compose'
import { Picker as BasePicker } from 'react-native'
import withProps from 'recompose/withProps'

import tachyons from 'utils/tachyons'
import styles from '__styles__'
import colors from '__styles__/colors'

const DEFAULT_PLACEHOLDER = 'Scroll to select...'

const Picker = ({
  items,
  getValueLabel,
  noPlaceHolder = false,
  placeHolder = DEFAULT_PLACEHOLDER,
  ...props
}) => (
  <BasePicker {...props}>
    {items &&
      !noPlaceHolder && (
        <BasePicker.Item value="" label={placeHolder} color="grey" />
      )}
    {items ? (
      items.map(id => (
        <BasePicker.Item key={id} label={getValueLabel(id)} value={id} />
      ))
    ) : (
      <BasePicker.Item label="Loading..." />
    )}
  </BasePicker>
)

const styleProps = ({ itemStyle = [] }) => ({
  itemStyle: [
    styles.primaryText,
    { height: 100, borderColor: colors.navBars },
    ...itemStyle,
  ],
  style: { height: 100 },
})

export default compose(
  withProps(styleProps),
  tachyons
)(Picker)
