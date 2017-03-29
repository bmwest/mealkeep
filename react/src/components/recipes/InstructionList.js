import React from 'react'
import Instruction from './Instruction'
import InstructionForm from '/InstructionForm'

class InstructionList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      steps: []
    }
      this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick(event) {
    let oldStep = event.target.value
    let newSteps = this.state.steps.filter(step => {
      return step.id !== oldStep.id
    })
    this.setState({ steps: newSteps })
    alert('Instruction removed')
  }

  render() {
    let stepItems = this.props.currentSteps.map((s) => {

        return (
          <Instruction
            key={s.id}
            id={s.id}
            recipe={s.recipe_id}
            stepItems={s.step}
          />
        )
    })

    return (
      <ul>
        {stepItems}
      </ul>
    )
  }
}

export default InstructionList;
