class SearchResultMeta {
  constructor(currentPage, totalPages, totalResults) {
    this.currentPage = currentPage;
    this.totalPages = totalPages;
    this.totalResults = totalResults;
  }

  get totalResultsFound() {
    return this.totalResults > 0
      ? `Found ${this.totalResults} titles`
      : "No results found";
  }

  get paginationInfo() {
    return this.totalResults > 0
      ? `${this.currentPage} / ${this.totalPages}`
      : null;
  }

  get next() {
    if (this.totalPages > this.currentPage) {
      return this.currentPage + 1;
    } else {
      return null;
    }
  }

  get prev() {
    if (this.currentPage !== 1) {
      return this.currentPage - 1;
    } else {
      return null;
    }
  }
}

export default SearchResultMeta;
