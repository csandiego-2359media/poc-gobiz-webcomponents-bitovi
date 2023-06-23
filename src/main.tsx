// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App.tsx'
// import './index.css'
import "@molb/gobiz-styleguide/src/styles/root.scss";
import r2wc from '@r2wc/react-to-web-component'
import PreLoginHeader from './components/PreLoginHeader';
import PLRow from './components/PLRow';
import PLCol from './components/PLCol';

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const HeaderWC = r2wc(PreLoginHeader, {
    props: {
        logoUrl: 'string',
        optionList: 'function',
        loginUrl: 'string'
    }
})
const ColWC = r2wc(PLCol, {shadow: 'closed', props: {span: 'number'}})
const RowWC = r2wc(PLRow, {shadow: 'closed', props: {gutter: 'number'}})
customElements.define('gb-header', HeaderWC)
customElements.define('gb-col', ColWC)
customElements.define('gb-row', RowWC)
