import { Background } from '../../components/background/Background'
import { Search } from '../../components/search/Search'
import { HTMLTitles, Pages } from '../../types'
import './style.css'

const SearchResults = () => {
  return (
      <>
      <h1 className='txt-title-blue bold'>{HTMLTitles.resultsMain}</h1>
        <Search page={Pages.searchResults} />
        <Background />
      </>
  )
}
export default SearchResults;
