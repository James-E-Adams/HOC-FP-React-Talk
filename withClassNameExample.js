import React from "react"

const BaseFantasticMrComponent = ({
  outerClassName,
  selectClassName,
  buttonClassName
}) => (
  <div className={outerClassName}>
    <select className={selectClassName}>{/* Yada,yada,        Yoda  */}</select>
    <button className={buttonClassName} />
  </div>
)

const outerClassName = ({ isMobile }) => [
  isMobile ? "flex-column" : "flex-row",
  "flex"
]
const buttonClassName = ({ canSubmit }) => [!canSubmit && "dn", "blue"]

const classNames = {
  outerClassName,
  selectClassName: "red",
  buttonClassName
}

const FantasticMrComponent = withClassName(classNames)(BaseFantasticMrComponent)

const MyConsumingComponent = () => (
  <div>
    <FantasticMrComponent
      outerClassName="blue"
      isMobile
      buttonClassName="circle"
    />
  </div>
)
