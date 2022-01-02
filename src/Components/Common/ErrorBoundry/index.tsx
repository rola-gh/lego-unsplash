import { Component } from 'react'
import {Wrapper} from './ErrorBoundry.style'

export default class Index extends Component {
    state={
        hasError: false
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if(this.state.hasError){
            return(
                <Wrapper>
                    Something Went Wrong :(
                </Wrapper>
            )
        }
        return (
            <>
                {this.props.children}
            </>
        )
    }
}
