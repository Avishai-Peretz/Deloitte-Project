import { Background } from '../../components/background/Background'
import { Search } from '../../components/search/Search'
import './style.css'

const SearchResults = () => {
  return (
      <>
        <h1 className='txt-title-blue bold'>Search Results</h1>
        <Search page="searchResults" />
        <Background />
      </>
  )
}
export default SearchResults;
