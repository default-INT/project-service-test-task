import {Component} from 'react'
import ReactDom from 'react-dom'

class Portal extends Component {
    el = document.createElement('div')

    componentDidMount() {
        document.body.append(this.el)
    }

    componentWillUnmount() {
        document.removeChild(this.el)
    }

    render() {
        const {children} = this.props
        return ReactDom.createPortal(children, this.el)
    }
}

export default Portal