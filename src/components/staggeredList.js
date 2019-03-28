import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './staggeredList.css'

const StaggeredList = ({ children }) => (
  <div>
    <TransitionGroup>
      {React.Children.map(children, (item, i) => (
        <CSSTransition
          key={i}
          classNames="fade"
          appear={true}
          style={{"transitionDelay": `${ i * 100 + 100 }ms` }}
          timeout={500}
        >
          <div>
            {item}
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  </div>
)

export default StaggeredList
