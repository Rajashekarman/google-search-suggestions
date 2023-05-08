const SuggestionItem = props => {
  const {searchDetails} = props
  const {suggestion} = searchDetails
  const onChangeSuggetion = () => {
    console.log(`event fired`)
  }
  return (
    <li>
      <div>
        <p>{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          onChange={onChangeSuggetion}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
