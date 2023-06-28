// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App.tsx'
// import './index.css'
import "@molb/gobiz-styleguide/src/styles/root.scss";
import r2wc from '@r2wc/react-to-web-component'
import PreLoginHeader from './components/PreLoginHeader';
import PLRow from './components/PLRow';
import PLCol from './components/PLCol';
import PLTable from "./components/PLTable";
import PLButton from "./components/PLButton";
import PLTag from "./components/PLTag";

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
const TableWC = r2wc(PLTable, {shadow: 'closed', props: {headers: 'function', data: 'function', showActionColumn: 'boolean'}})
const ButtonWC = r2wc(PLButton, {
    props: {
        label: 'string',
        disabled: 'boolean',
        size: 'string',
        href: 'string',
    }
})
const TagWC = r2wc(PLTag, {
    props: {
        label: 'string',
        size: 'string',
        color: 'string'
    }
})
customElements.define('gb-header', HeaderWC)
customElements.define('gb-col', ColWC)
customElements.define('gb-row', RowWC)
customElements.define('gb-table', TableWC)
customElements.define('gb-button', ButtonWC)
customElements.define('gb-tag', TagWC)
