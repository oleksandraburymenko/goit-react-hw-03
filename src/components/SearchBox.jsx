import css from './Phonebook.module.css';


export default function SearchBox({value, onFilter}) {
    return <>
    <p className={css.search }>Find contacts by name</p>
    <input type="text" value={value}
     onChange={(evt) => onFilter(evt.target.value)} 
     className={css.input}>
     </input>
    </>
}
