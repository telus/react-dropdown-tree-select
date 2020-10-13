import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Action extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string,
    actionData: PropTypes.object,
    onAction: PropTypes.func,
    actionRenderer: PropTypes.func,
    readOnly: PropTypes.bool,
  }

  static defaultProps = {
    onAction: () => {},
    actionRenderer: (title, className, text, readOnly, handleClick) => {
      return (
        <i title={title} className={className} onClick={!readOnly ? handleClick : undefined}>
          {text}
        </i>
      )
    },
  }

  handleClick = () => {
    const { onAction, actionData } = this.props
    if (onAction) {
      onAction(actionData.nodeId, actionData.action)
    }
  }

  render() {
    const { title, className, text, readOnly, actionRenderer } = this.props
    return <div className="action-wrapper">{actionRenderer(title, className, text, readOnly)}</div>
  }
}

export default Action
