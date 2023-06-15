import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App.tsx'
// import './index.css'
import { Button, Header, Icon } from '@molb/gobiz-styleguide'
import "@molb/gobiz-styleguide/src/styles/root.scss";
import r2wc from '@r2wc/react-to-web-component'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
const ButtonWC = r2wc(Button, React, ReactDOM)
const IconSearchWC = r2wc(Icon.Search, React, ReactDOM)
const HeaderWC = r2wc(Header, React, ReactDOM, {props: {childComponent: 'string'}})
customElements.define('gb-button', ButtonWC)
customElements.define('gb-icon-search', IconSearchWC)
customElements.define('gb-header', HeaderWC)